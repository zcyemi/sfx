import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { GLSLTool, GLSLDependencyInfo } from "./GLSLTool";
import { SFXLexer } from "./sfx/SFXLexer";
import { SFXParser } from "./sfx/SFXParser";
import { SFXShaderTechnique } from "./SFXCompilationCtx";
import { SFXSourceVisotor } from "./SFXSourceVisotor";
import { Utility, APIResultT, APIResult } from "./Utility";
import { GLSLFile, GLSLShaderType } from "./GLSLFile";

export class SFXTechniquePipeline{
    public queue?:string;
    public zwrite?:string;
    public blend?:string;
    public ztest?:string;
}

export class SFXTechniqueProperty{
    public type:string;
    public index:string;
    public semantic:string;
    public variable:string;
}

export type SFXTechniqueProperties = {[key:string]:SFXTechniqueProperty}

export class SFXTechnique{
    public name:string;
    public vsEntry:string;
    public psEntry:string;
    public pipeline?:SFXTechniquePipeline;
    public properties?:SFXTechniqueProperties;
}

export class SFXInclude{
    public library?:string;
    public fileName:string;
    public fullName:string;
}

export class SFXSource{
    public fileName:string;
    public filePathName:string;
    public glslBlock?:string[];
    public includes?:SFXInclude[];
    public techniques?:SFXTechnique[];

    public addInclude(inc:SFXInclude){
        if(inc == null) return;
        if(this.includes == null) this.includes = [];
        this.includes.push(inc);
    }

    public getTechnique(name:string):SFXTechnique{
        if(this.techniques == null) return null;
        return this.techniques.find(t=>t.name === name);
    }

    public containsInclude(fullname:string):boolean{
        const includes = this.includes;
        if(includes == null || includes.length == 0) return false;

        let includesInd = includes.map(inc=>inc.fullName);
        return includesInd.includes(fullname);
    }

    public containsIncludes(fullname:string[]):boolean{
        const includes = this.includes;
        if(includes == null || includes.length == 0) return false;
        let includesInd = includes.map(inc=>inc.fullName);
        return Utility.ArrayIntersect(includesInd,fullname).length >0;
    }
}

export class SFXTool{

    public static parseSFX(source:string,file:string):Promise<APIResultT<SFXSource>>{
        return new Promise((res,rej)=>{
            if(source == null){
                res(APIResultT.Error('source is null'));
                return;
            }
            let inputstream = new ANTLRInputStream(source);
            let lexer = new SFXLexer(inputstream);
            let tokenstream = new CommonTokenStream(lexer);
            let parse = new SFXParser(tokenstream);
            var hasError = false;
            let errmsg:string[] = [];
            parse.addErrorListener({
                syntaxError:(rec,offsymbol,line,pos,msg,e)=>{
                    hasError = true;
                    errmsg.push(`sfx error: (${line}:${pos}) ${msg}  file:${file}`);
                }
            })
            
            let program = parse.program();
            let visitor = new SFXSourceVisotor();
            let sfxsource= visitor.visit(program);
            if(hasError){
                res(APIResultT.Error(errmsg.join('\n')))
                return;
            }
            res(APIResultT.Success(sfxsource));
        });
    }

    private static extractDependency(sfx:SFXSource,deps?:Map<string,SFXSource>):Promise<APIResultT<string[]>>{
        return new Promise(async (res,rej)=>{
            let deplist:string[] = [];

            let result = await SFXTool.extractDependencyImpl(sfx,deplist,deps);

            if(result.success){
                res(APIResultT.Success(deplist));
            }
            else{
                res(APIResultT.Error(result.error));
            }
        });
    }

    private static extractDependencyImpl(sfx:SFXSource,depList:string[],deps?:Map<string,SFXSource>):Promise<APIResult>{
        return new Promise(async (res,rej)=>{
            let includes = sfx.includes;
            if(includes == null || includes.length == 0){
                res(APIResult.Success());
                return;
            }

            if(deps == null){
                res(APIResult.Error(`Error: sfxsource ${sfx.fileName} require deps: ${includes.map(t=>t.fullName)}`))
                return;
            }

            for(let t=0;t<includes.length;t++){
                const inc = includes[t];
                let fname = inc.fullName;
                if(depList.includes(fname)){
                    res(APIResult.Success());
                    return;
                }

                let depsfx = deps.get(fname);
                if(depsfx == null){
                    res(APIResult.Error(`Error: sfxsource ${sfx.fileName} require dep: ${inc.fullName}`))
                    return;
                }
                if(!await this.extractDependencyImpl(depsfx,depList,deps)){
                    res(APIResult.Error(`Error: parse dep failed: ${fname}`));
                    return;
                }

                depList.push(fname);
            }
            res(APIResult.Success());
        });
    }

    public static parseTechnique(sfx:SFXSource,deps?:Map<string,SFXSource>,verbose:boolean = false):Promise<APIResultT<SFXShaderTechnique[]>>{
        return new Promise(async (res,rej)=>{
            let depresult = await SFXTool.extractDependency(sfx,deps);
            if(!depresult.success){
                res(APIResultT.Error(depresult.error))
                return;
            }
            let glslblocks:string[] = [];

            var depList = depresult.data;

            if(depList!=null && depList.length >0){
                depList.forEach(fname=>{

                    let glsls =deps.get(fname).glslBlock;
                    if(glsls!=null && glsls.length>0){
                        glslblocks.push(...glsls);
                    }

                })
            }

            glslblocks.push(...sfx.glslBlock);
            let glslsource = glslblocks.join('\n');

            glslsource = glslsource.trim();
            if(glslsource == ''){
                res(APIResultT.Error(`source is null: ${sfx.fileName}`))
                return;
            }

            let source:GLSLFile = null;
            glslsource +='\n';
            try{
                source = await GLSLTool.parseGLSLFile(glslsource,sfx.fileName,verbose);
            }
            catch(e){
                if(verbose){
                    console.error(e);
                }
                res(APIResultT.Error(e))
                return;
            }

            let techniques = sfx.techniques;
            let tasks:Promise<APIResult>[] = [];
            let retTechniques:SFXShaderTechnique[] = [];

            if(techniques!=null){
                techniques.forEach(t=>{
                    let depInfoVS = new GLSLDependencyInfo();
                    depInfoVS.entryFunctions = [t.vsEntry];

                    let depInfoPS = new GLSLDependencyInfo();
                    depInfoPS.entryFunctions = [t.psEntry];

                    GLSLTool.resolveDependency(source,depInfoVS);
                    GLSLTool.resolveDependency(source,depInfoPS);

                    let sourceVS = source.clone();
                    let sourcePS = source.clone();
                    GLSLTool.trimDepsApply(sourceVS,depInfoVS);
                    GLSLTool.trimDepsApply(sourcePS,depInfoPS);
    
                    GLSLTool.collapseToShader(sourceVS,GLSLShaderType.Vertex,t.vsEntry);
                    GLSLTool.collapseToShader(sourcePS,GLSLShaderType.Fragment,t.psEntry);

                    let buildtechnique = new Promise<APIResult>(async (res,rej)=>{
                        let fname = `${source.fileName}_${t.name}`;
                        let result = await GLSLTool.glslVerify(fname+'.vert',sourceVS);
                        if(!result.success){
                            res(result);
                            return;
                        }

                        result = await GLSLTool.glslVerify(fname+'.frag',sourcePS);

                        if(result.success){
                            let technique:SFXShaderTechnique = new SFXShaderTechnique();
                            technique.technique = t;
                            technique.name = t.name;
                            technique.glsl_vs = sourceVS.getGLSLSource();
                            technique.glsl_ps = sourcePS.getGLSLSource();
                            technique.sfxName = sfx.fileName;
                            retTechniques.push(technique);
                        }
                        res(result);
                    })
                    tasks.push(buildtechnique);
                })
            }

            let validateResult = await Promise.all(tasks);

            let suc = true;
            let errMsg:string[] = [];
            validateResult.forEach(r=>{
                if(!r.success){
                    suc =false;
                    errMsg.push(r.error.toString());
                }
            });

            if(suc){
                res(APIResultT.Success(retTechniques));
            }
            else{
                res(APIResultT.Error(errMsg.join('\n'),retTechniques));
            }
        });
    }
    public static optimizeGLSL(glsl:string){
    }
}