import { APIResult } from "./Utility";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { GLSLLexer } from "./glsl/GLSLLexer";
import { SFXLexer } from "./sfx/SFXLexer";
import { GLSLParser } from "./glsl/GLSLParser";
import { SFXParser } from "./sfx/SFXParser";
import { SFXSourceVisotor } from "./SFXSourceVisotor";

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
}


export class SFXTool{

    public static parse(source:string):APIResult{

        if(source == null){
            return APIResult.error("source null");
        }

        let inputstream = new ANTLRInputStream(source);
        let lexer = new SFXLexer(inputstream);
        let tokenstream = new CommonTokenStream(lexer);
        let parse = new SFXParser(tokenstream);

        let program = parse.program();
        let visitor = new SFXSourceVisotor();

        let sfxsource= visitor.visit(program);
        return APIResult.Success(sfxsource);
    }
}