import { ANTLRInputStream, CommonTokenStream, ConsoleErrorListener } from "antlr4ts";
import { GLSLLexer } from "./glsl/GLSLLexer";
import { GLSLParser } from "./glsl/GLSLParser";
import { GLSLAnalysisVisitor, GLSLSegmentVisitor, GLSLSource, GLSLSegmentType, GLSLShaderType } from "./GLSLSource";
import { Utility } from "./Utility";
import * as fs from "fs";
import os from 'os';
import * as childProcess from 'child_process';
import { GLSLFile, GLSLSeg, GLSLSegFunction, GLSLSegPreprocDefine } from "./GLSLFile";
import { GLSLFileVisitor } from "./GLSLFileVisitor";

const PATH_TEMP_SFX = Utility.PathCombine(os.tmpdir(),'sfx-cache');

export class GLSLDependencyInfo{
    public entryFunctions:string[];

    public touchedSegs:GLSLSeg[] = [];
    public touchedDeclaration:string[] = [];
    public touchedDefine:string[] = [];

    public touchedDefineFunc:string[] = [];
    public touchedFunctions:string[] = [];

    public touchedTypes:string[] = [];
    public touchedDeclarationBlock:string[] = [];

    public pendingVariableRef:string[] = [];

    public addFunc(identifier:string):boolean{
        return Utility.arrayAddDistinct(this.touchedFunctions,identifier);
    }

    public addDefineFunc(identifier:string):boolean{
        return Utility.arrayAddDistinct(this.touchedDefineFunc,identifier);
    }

    public addVaraiblesRef(variables:string[]){
        Utility.ArrayConcatDistainct(this.pendingVariableRef,variables);
    }

}

export class GLSLTool{

    public static parseGLSLFile(glsl:string,filename:string):Promise<GLSLFile>{
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

            var visitor = new GLSLFileVisitor();
            visitor.visit(parse.external_declaration_list());
            res(visitor.sourceFile);
        });
    }

    public static resolveDependency(source:GLSLFile,depInfo:GLSLDependencyInfo){

        let pendingFunc:string[] = depInfo.entryFunctions.concat([]);
        
        while(pendingFunc!=null && pendingFunc.length>0){
            pendingFunc = GLSLTool.resolveDepSteps(pendingFunc,source,depInfo);
        }

        let pendingVariable = depInfo.pendingVariableRef;

        source.declaration.forEach((val,key)=>{
            if(pendingVariable.includes(key)){
                depInfo.touchedDeclaration.push(key);
                depInfo.touchedSegs.push(val);
            }
        })

 

        console.log(depInfo);
    }

    private static resolveDepSteps(pendingFunc:string[],source:GLSLFile,depInfo:GLSLDependencyInfo):string[]{
        let retPendingFunc:string[] = [];

        pendingFunc.forEach(func=>{
            let funcSeg:GLSLSeg = source.functions.get(func);
            if(funcSeg == null) {
                funcSeg = source.defineFunc.get(func);
                if(funcSeg == null){
                    throw new Error(`can not find function ${func}`);
                }
                else{
                    let seg:GLSLSegPreprocDefine = <GLSLSegPreprocDefine>funcSeg;
                    if(depInfo.addDefineFunc(func)){
                        
                    }
                }
            }
            else{
                let seg:GLSLSegFunction = <GLSLSegFunction>funcSeg;
                if(depInfo.addFunc(func)){
                    let subfunc = Utility.ArrayExclude(seg.functionRef,depInfo.touchedFunctions);
                    retPendingFunc.push(...subfunc);
                    depInfo.addVaraiblesRef(seg.variableRef);
                }
                
            }
            depInfo.touchedSegs.push(funcSeg);
        });

        return retPendingFunc;
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