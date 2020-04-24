export enum GLSLSegType{
    Version,
    Declaration,
    DeclarationBlock,
    PreprocDefine,
    PreprocCondition,
    Precision,
    Function,
}

export class GLSLVariableInfo{
    public identifier:string;
    public typeName:string;
    public specifier:string;
}

export class GLSLTypeInfo{
    public typeName:string;
    public member:GLSLVariableInfo[] =[];
    public sepcifier:string;
}


export abstract class GLSLSeg{
    public segType:GLSLSegType;
    public text:string;
    public constructor(type:GLSLSegType){
        this.segType = type;
    }
}

export class GLSLSegVersion extends GLSLSeg{
    public profile:string;
    public version:string;

    public constructor(){
        super(GLSLSegType.Version);
    }
}

export class GLSLSegDeclaration extends GLSLSeg{
    public identifier:string;
    public typeName:string;
    public specifier:string;

    public constructor(){
        super(GLSLSegType.Declaration);
    }
}

export class GLSLSegDeclarationBlock extends GLSLSeg{
    public typeName:string; 
    public identifier:string;
    public typeInfo:GLSLTypeInfo;

    public constructor(){
        super(GLSLSegType.DeclarationBlock);
    }
}

export class GLSLSegPreprocDefine extends GLSLSeg{
    public identifier:string;
    public isFunc:boolean;
    public valueExpr:string;

    public constructor(){
        super(GLSLSegType.PreprocDefine);
    }
}

export class GLSLSegPreprocCondition extends GLSLSeg{
    public symbol:string;
    public valueExpr:string;

    public constructor(){
        super(GLSLSegType.PreprocCondition);
    }
}

export class GLSLSegPrecision extends GLSLSeg{
    public typeName:string;
    public value:string;

    public constructor(){
        super(GLSLSegType.Precision);
    }
}

export class GLSLSegFunction extends GLSLSeg{
    public identifier:string;

    public variableDef:Map<string,GLSLVariableInfo> = new Map();
    public variableRef:string[] = [];
    public parameterDef:Map<string,GLSLVariableInfo> = new Map();

    public constructor(){
        super(GLSLSegType.Function);
    }

    public setParameter(identifier:string,info:GLSLVariableInfo){
        this.parameterDef.set(identifier,info);
    }
}

export class GLSLFile{
    public segments:GLSLSeg[] = [];

    public functions:Map<string,GLSLSegFunction> = new Map();
    public defineFunc:Map<string,GLSLSegPreprocDefine> = new Map();

    public declaration:Map<string,GLSLSegDeclaration> = new Map();
    public define:Map<string,GLSLSegPreprocDefine> = new Map();
    public defineTypes:Map<string,GLSLSegDeclarationBlock> = new Map();

    public declarationBlock:Map<string,GLSLSegDeclarationBlock> = new Map();
    public fileName:string;
}