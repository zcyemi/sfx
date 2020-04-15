import { ANTLRInputStream, CommonTokenStream, ConsoleErrorListener } from "antlr4ts";
import { GLSLLexer } from "./glsl/GLSLLexer";
import { GLSLParser } from "./glsl/GLSLParser";
import { GLSLAnalysisVisitor, GLSLSegmentVisitor, GLSLSource, GLSLSegmentType, GLSLShaderType } from "./GLSLSource";
import { Utility } from "./Utility";
import * as fs from "fs";
import os from 'os';
import * as childProcess from 'child_process';

const PATH_TEMP_SFX = Utility.PathCombine(os.tmpdir(),'sfx-cache');

export class GLSLTool{

    public static parse(glsl:string,filename:string):Promise<GLSLSource>{
        return new Promise((res,rej)=>{
            let input = new ANTLRInputStream(glsl);

            let lexer = new GLSLLexer(input);
            let tokenstream = new CommonTokenStream(lexer);
            let parse = new GLSLParser(tokenstream);

            var hasError = false;
            let errmsg = null;
            parse.addErrorListener({
                syntaxError:(rec,offsymbol,line,pos,msg,e)=>{
                    hasError = true;
                    if(msg.length > 75){
                        msg = msg.substr(0,75);
                    }
                    errmsg = `glsl error: (${line}:${pos}) ${msg}  file:${filename}`;

                    let lineAry = glsl.split('\n');
                    let lines = line > 0? line-1:line;
                    let linee = line + 1 > lineAry.length? lineAry.length:line;
                    let linectx  =lineAry.splice(lines,linee-lines+1);

                    console.error([filename,errmsg,offsymbol,linectx.join('\n')]);
                }
            });

            let root = parse.external_declaration_list();

            if(hasError){
                rej(errmsg);
                return;
            }

            let source = new GLSLSource(parse,root);
            source.source = glsl;
            source.fileName = filename;
            res(source);
            return true;
        });
    }

    public static analysis(source:GLSLSource):Promise<GLSLSource>{
        return new Promise((res,rej)=>{
            let visitor = new GLSLAnalysisVisitor(source);
            visitor.visit(source.parser_root);
            res(source);
        });
    }

    public static segment(source:GLSLSource):Promise<GLSLSource>{
        return new  Promise((res,rej)=>{
            let visitor = new GLSLSegmentVisitor(source);
            res(source);
        })
    }

    public static analysisFunctions(source:GLSLSource,entryFunctions:string[]):string[]{
        let info = source;
        if(info == null) throw new Error('source not analysised');

        let functionTouched:string[] = [];
        functionTouched.push(...entryFunctions);

        let funcs = info.functions;

        let pendingFunctions:string[] = [];
        let workingFunctions:string[] = [];
        workingFunctions.push(...functionTouched);
      
        while(workingFunctions.length >0){
            workingFunctions.forEach(f=>{
                let fobj = funcs[f];
                if(fobj!=null){
                    let subfunc = fobj.funcInvokes;
                    subfunc.forEach(t=>{
                        if(functionTouched.includes(t))return;
                        if(funcs[t] !=null){
                            pendingFunctions.push(t);
                        }
                    });
                }
            });
            functionTouched.push(...pendingFunctions);
            workingFunctions = pendingFunctions;
            pendingFunctions = [];
        }
        return functionTouched;
    }

    public static analysisVariable(source:GLSLSource,variableRef:string[]){
        let touchedVaraibles:string[] = [];
        let functions = source.functions;

        for (const key in functions) {
            if (functions.hasOwnProperty(key)) {
                const element = functions[key];
                touchedVaraibles.push(element.funcId);
            }
        }
        //Resolve Defines

        let allVariables:string[] = [];
        let validSegmentsType:GLSLSegmentType[] = [GLSLSegmentType.Declaration, GLSLSegmentType.Function, GLSLSegmentType.Preprocessor];
        source.segments.forEach(seg=>{
            if(validSegmentsType.includes(seg.segmentType)){
                Utility.ArrayInsert(allVariables,seg.identifier);
            }
        })

        var funcGetDep = function(segIdentifier:string):string[]{
            let seg = source.getSegment(segIdentifier);
            if(seg == null) return null;

            switch(seg.segmentType){
                case GLSLSegmentType.Function:
                    return source.functions[segIdentifier].variableRef;
                case GLSLSegmentType.Preprocessor:
                    let define = source.define[segIdentifier];
                    if(define == null) define = source.defineFunction[segIdentifier];
                    if(define == null) return null;
                    return define.parameterRef;
            }
        }

        let resultTouched = Utility.ResolveDeps(touchedVaraibles,allVariables,funcGetDep);
     
    }

    public static trimFunctions(source:GLSLSource,functionsKeep:string[]):GLSLSource{
        let functions = source.functions;
        functionsKeep.forEach(f=>{
            delete functions.f;
        });

        source.segments =  source.segments.filter(seg=>{
            if(seg.segmentType == GLSLSegmentType.Function){
                if(!functionsKeep.includes(seg.identifier)){
                    return false;
                }
            }
            return true;
        });

        source.source = null;
        return source;
    }

    public static collapseToShader(source:GLSLSource,shaderType:GLSLShaderType,entry:string){
        let segVaryings = source.segments.filter(seg=>{
            return seg.segmentType == GLSLSegmentType.Declaration && seg.specifier == 'inout';
        });


        if(shaderType == GLSLShaderType.Vertex){
            segVaryings.forEach(seg=>{
                seg.specifier = 'out';
                seg.update();
            });
        }
        else{
            segVaryings.forEach(seg=>{
                seg.specifier = 'in';
                seg.update();
            });
        }

        source.segments.map(seg=>{
            if(seg.segmentType == GLSLSegmentType.Function){
                if(seg.identifier == entry){
                    seg.identifier= 'main';
                }
            }
        })

        source.source = null;
    }

    private static glslVerifyGetTempFolder(){
        return 
    }

    public static glslVerifyClearCache(){

    }

    public static async glslVerify(targetFile:string,source:GLSLSource):Promise<boolean>{
        let fpath = Utility.PathCombine(PATH_TEMP_SFX,targetFile);
        if(!fs.existsSync(PATH_TEMP_SFX)){
            fs.mkdirSync(PATH_TEMP_SFX);
        }

        let sourceCode = source.getSource();
        sourceCode = '#version 300 es\n'+ sourceCode;


        fs.writeFileSync(fpath,sourceCode);

        console.log(fpath);

        const glslangBin = Utility.GetAbsolutePath('tools/glslangValidator.exe');
        return new Promise((res,rej)=>{
            childProcess.exec(`${glslangBin} ${fpath}`, (error, stdout, stderr) => {
                let suc = error == null && stdout == '' && stderr == '';
                if (stdout != '') console.log(`[${targetFile}] stdout:`,stdout);
                if (stderr != '') console.error(`[${targetFile}] stderr:`,stderr);
                if(!suc) console.error(fpath);
                res(suc);
            });
        });
    }
}