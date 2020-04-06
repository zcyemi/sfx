

export enum GLSLSegmentType{
    Function,
    Preprocessor,
    Pragma,
    Precision,
    Declaration,
}

export class GLSLSegmentNode{

    public segmentType:GLSLSegmentType;
    public text:string;
    public identifier:string;
}

export class GLSLSource{
    public segments:GLSLSegmentNode[] = [];
}