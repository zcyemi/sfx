
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

type SFXTechniqueProperties = {[key:string]:SFXTechniqueProperty}

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
}