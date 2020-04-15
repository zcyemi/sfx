import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { GLSLTool } from "./GLSLTool";
import { GLSLSource } from "./GLSLSource";
import { SFXLexer } from "./sfx/SFXLexer";
import { SFXParser } from "./sfx/SFXParser";
import { SFXShaderTechnique } from "./SFXCompilationCtx";
import { SFXSourceVisotor } from "./SFXSourceVisotor";
import { Utility } from "./Utility";

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

    public static parseSFX(source:string,file:string):Promise<SFXSource>{
        return new Promise((res,rej)=>{
            if(source == null){
                return rej('source is null');
            }
            let inputstream = new ANTLRInputStream(source);
            let lexer = new SFXLexer(inputstream);
            let tokenstream = new CommonTokenStream(lexer);
            let parse = new SFXParser(tokenstream);
            var hasError = false;
            let errmsg = null;
            parse.addErrorListener({
                syntaxError:(rec,offsymbol,line,pos,msg,e)=>{
                    hasError = true;
                    errmsg = `sfx error: (${line}:${pos}) ${msg}  file:${file}`;
                    console.error(errmsg);
                }
            })
            
            let program = parse.program();

            if(hasError){
                rej(errmsg);
                return;
            }

            let visitor = new SFXSourceVisotor();
            let sfxsource= visitor.visit(program);
            res(sfxsource);
        });
    }

    private static extractDependency(sfx:SFXSource,deps?:Map<string,SFXSource>):Promise<string[]>{
        return new Promise(async (res,rej)=>{
            let deplist:string[] = [];

            let result = await SFXTool.extractDependencyImpl(sfx,deplist,deps);

            if(result){
                res(deplist);
            }
            else{
                rej(`Error: parse dep failed: ${sfx.fileName}`);
            }
        });
    }

    private static extractDependencyImpl(sfx:SFXSource,depList:string[],deps?:Map<string,SFXSource>):Promise<boolean>{
        return new Promise(async (res,rej)=>{
            let includes = sfx.includes;
            if(includes == null || includes.length == 0){
                res(true);
                return null;
            }

            if(deps == null){
                rej(`Error: sfxsource ${sfx.fileName} require deps: ${includes.map(t=>t.fullName)}`);
                return;
            }

            for(let t=0;t<includes.length;t++){
                const inc = includes[t];
                let fname = inc.fullName;
                if(depList.includes(fname)){
                    res(true);
                    return;
                }

                let depsfx = deps.get(fname);
                if(depsfx == null){
                    rej(`Error: sfxsource ${depsfx.fileName} require dep: ${inc.fullName}`);
                    return;
                }
                if(!await this.extractDependencyImpl(depsfx,depList,deps)){
                    rej(`Error: parse dep failed: ${fname}`);
                    return;
                }

                depList.push(fname);
            }
            res(true);
        });
    }

    public static parseTechnique(sfx:SFXSource,deps?:Map<string,SFXSource>):Promise<SFXShaderTechnique[]>{
        return new Promise(async (res,rej)=>{

            let depList = await SFXTool.extractDependency(sfx,deps);
            console.log(sfx.fileName,depList);

            let glslblocks:string[] = [];
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
                res([])
                return;
            }

            let source:GLSLSource = null;

            try{
                source = await GLSLTool.parse(glslsource,sfx.fileName);
                source = await GLSLTool.segment(source);
                source = await GLSLTool.analysis(source);

                let valid = await GLSLTool.glslVerify(source);
            }
            catch(e){
                res([]);
                return;
            }


            res([]);

        });
    }

    public static optimizeGLSL(glsl:string){

    }
}