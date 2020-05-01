import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import * as childProcess from 'child_process';
import * as fs from "fs";
import os from 'os';
import { GLSLLexer } from "./glsl/GLSLLexer";
import { GLSLParser } from "./glsl/GLSLParser";
import { GLSLFile, GLSLSeg, GLSLSegFunction, GLSLSegPreprocDefine,GLSLShaderType, GLSLSegType, GLSLSegDeclaration, GLSLSegDeclarationBlock } from "./GLSLFile";
import { GLSLFileVisitor } from "./GLSLFileVisitor";
import { Utility } from "./Utility";

const PATH_TEMP_SFX = Utility.PathCombine(os.tmpdir(),'sfx-cache');


export class GLSLDependencyInfo{
    public entryFunctions:string[];

    public touchedSegs:GLSLSeg[] = [];
    public touchedDeclaration:string[] = [];
    public touchedDefine:string[] = [];

    public touchedDefineFunc:string[] = [];
    public touchedFunctions:string[] = [];

    public touchedTypes:string[] = [];

    public touchedVarRef:string[] = [];

    public addFunc(identifier:string):boolean{
        return Utility.arrayAddDistinct(this.touchedFunctions,identifier);
    }

    public addType(typename:string):boolean{
        return Utility.arrayAddDistinct(this.touchedTypes,typename);
    }

    public addDefineFunc(identifier:string):boolean{
        return Utility.arrayAddDistinct(this.touchedDefineFunc,identifier);
    }

    /* return new variables */
    public calVaraiblesRef(vars:string[]):string[]{
        return Utility.ArrayExclude(vars,this.touchedVarRef);
    }

    public addVariable(variable:string){
        this.touchedVarRef.push(variable);
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
            let sourceFile = visitor.sourceFile;
            sourceFile.fileName = filename;
            res(sourceFile);
        });
    }

    public static resolveDependency(source:GLSLFile,depInfo:GLSLDependencyInfo){
        let pendingFunc:string[] = depInfo.entryFunctions.concat([]);
        let pendingVarRef:string[] = [];
        
        while(true){
            [pendingFunc,pendingVarRef] = GLSLTool.resolveDepSteps(pendingFunc,pendingVarRef,source,depInfo);
            if(pendingFunc.length == 0 && pendingVarRef.length == 0){
                break;
            }
        }
    }

    private static resolveDepSteps(pendingFunc:string[],pendingVariable:string[],source:GLSLFile,depInfo:GLSLDependencyInfo):[string[],string[]]{
        let retPendingFunc:string[] = [];
        let retPendingVariable:string[] = [];

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
                        let subfunc = Utility.ArrayExclude(Utility.ArrayExclude(seg.functionRef,depInfo.touchedFunctions),depInfo.touchedDefineFunc);
                        retPendingFunc.push(...subfunc);
                        retPendingVariable.push(...depInfo.calVaraiblesRef(seg.variableRef));
                    }
                }
            }
            else{
                let seg:GLSLSegFunction = <GLSLSegFunction>funcSeg;
                if(depInfo.addFunc(func)){
                    let subfunc = Utility.ArrayExclude(seg.functionRef,depInfo.touchedFunctions);
                    retPendingFunc.push(...subfunc);
                    retPendingVariable.push(...depInfo.calVaraiblesRef(seg.variableRef));
                }
                
            }
            depInfo.touchedSegs.push(funcSeg);
        });

        pendingVariable.forEach(v=>{

            //decl
            let dec = source.declaration.get(v);
            if(dec!=null){
                depInfo.touchedDeclaration.push(v);
                depInfo.addVariable(v);

                let ty = dec.typeName;
                if(ty !=null){
                    if(source.defineTypes.get(ty)!=null){
                        depInfo.addType(ty);
                    }
                }

                return;
            }

            //defines
            let define = source.define.get(v);
            if(define!=null){
                depInfo.touchedDefine.push(v);
                depInfo.addVariable(v);
                retPendingFunc.push(...define.functionRef);
                retPendingVariable.push(...define.variableRef);
                return;
            }
        });

        //types
        if(source.defineTypes.size != depInfo.touchedTypes.length){
            let defTypes= source.defineTypes;
            defTypes.forEach(ty=>{
                if(!depInfo.touchedTypes.includes(ty.typeName)){
                    let members = ty.typeInfo.member;
                    for(let s=0;s<members.length;s++){
                        let m = members[s].identifier;
                        if(pendingVariable.includes(m)){
                            depInfo.touchedTypes.push(ty.typeName);
                            break;
                        }
                    }
                    
                }
            });
        }

        return [Utility.ArrayDistinct(retPendingFunc),Utility.ArrayDistinct(retPendingVariable)];
    }

    public static trimDeps(source:GLSLFile,depInfo:GLSLDependencyInfo):GLSLSeg[]{
        return source.segments.filter(seg=>{
            let segtype =seg.segType;
            switch(segtype){
                case GLSLSegType.Declaration:
                    let id = (<GLSLSegDeclaration>seg).identifier;
                    return depInfo.touchedDeclaration.includes(id);
                case GLSLSegType.DeclarationBlock:
                    return depInfo.touchedTypes.includes((<GLSLSegDeclarationBlock>seg).typeInfo.typeName);
                case GLSLSegType.Function:
                    return depInfo.touchedFunctions.includes((<GLSLSegFunction>seg).identifier);
                case GLSLSegType.PreprocDefine:
                    {
                        let segdef = (<GLSLSegPreprocDefine>seg);
                        let identifier =  segdef.identifier;
                        if(segdef.isFunc){
                            return depInfo.touchedDefineFunc.includes(identifier);
                        }
                        else{
                            return depInfo.touchedDefine.includes(identifier);
                        }
                    }
            }
            return true;
        });
    }

    public static trimDepsApply(source:GLSLFile,depInfo:GLSLDependencyInfo){
        source.segments = GLSLTool.trimDeps(source,depInfo);
    }


    public static collapseToShader(source:GLSLFile,shaderType:GLSLShaderType,entry:string){
        let segVaryings = source.segments.filter(seg=>{
            return seg.segType == GLSLSegType.Declaration && (<GLSLSegDeclaration>seg).specifier == 'inout';
        });

        //process inout
        if(shaderType == GLSLShaderType.Vertex){
            segVaryings.forEach(seg=>{
                let segdecl = <GLSLSegDeclaration>seg;
                segdecl.specifier = 'out';
                segdecl.update();
            });
        }
        else{
            segVaryings.forEach(seg=>{
                let segdecl = <GLSLSegDeclaration>seg;
                segdecl.specifier = 'in';
                segdecl.update();
            });
        }

        //process entry
        source.segments.map(seg=>{
            if(seg.segType == GLSLSegType.Function){
                let segfunc = <GLSLSegFunction> seg;
                if(segfunc.identifier == entry){
                    segfunc.identifier= 'main';
                }
            }
        })

        source.glslSource = null;
    }

    public static glslVerifyClearCache(){

    }

    public static async glslVerify(targetFile:string,source:GLSLFile):Promise<boolean>{
        let fpath = Utility.PathCombine(PATH_TEMP_SFX,targetFile);
        if(!fs.existsSync(PATH_TEMP_SFX)){
            fs.mkdirSync(PATH_TEMP_SFX);
        }

        let sourceCode = source.getGLSLSource();
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
