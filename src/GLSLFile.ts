import { Utility } from "./Utility";
import { GLSLTool } from "./GLSLTool";

const GLSL_INTERNAL_FUNC:string[] = [
    'vec4','vec3','vec2','mat2','mat3','mat4','ivec2','ivec3','ivec4','float','int','bool',
    'sin','cos','tan','asin','acos','atan','radians','degrees',
    'pow','exp','log','exp2','log2','sqrt','inversesqrt',
    'abs','ceil','clamp','floor','fract','max','min','mix','mod','sign','smoothstep','step',
    'cross','dot','length','normalize','reflect','refract','distance',
    'texture1D','texture1DProj','texture2D','texture2DProj','texture3D','texture3DProj','textureCube','texture',
    'shadow1D','shadow2D','shadow1DProj','shadow2DProj',
    'texture1DLod','texture1DProjLod','texture2DLod','texture2DProjLod','texture3DProjLod',
    'textureCubeLod','shadow1DLod','shadow2DLod','shadow1DProjLod','shadow2DProjLod',
    'textureSize',
    'dFdx','dFdy','fwidth',
    'max',
    'clamp','inverse'
];


export enum GLSLShaderType{
    Vertex,
    Fragment,
}

export var GLSL_INTERNAL_FUNC_MAP:{} = {};
GLSL_INTERNAL_FUNC.forEach(f=>GLSL_INTERNAL_FUNC_MAP[f]= true);

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

    public update(){}
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

    public update(){
        let specifier = this.specifier;
        if(specifier == 'in' || specifier == 'out'){
            this.text = `${specifier} ${this.typeName} ${this.identifier};`;
            
        }
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

    public variableRef:string[] = [];
    public functionRef:string[] = [];

    public constructor(){
        super(GLSLSegType.PreprocDefine);
    }

    public parseExpr(){
        let expr = this.valueExpr;
        if(expr == null || expr == '')return;

        GLSLTool.ParseExpr(expr,this.functionRef,this.variableRef);
        this.functionRef = Utility.ArrayExclude(this.functionRef,GLSL_INTERNAL_FUNC);
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

    public textIdentifier:string;

    public variableDef:Map<string,GLSLVariableInfo> = new Map();
    public variableRef:string[] = [];
    public functionRef:string[] = [];
    public parameterDef:Map<string,GLSLVariableInfo> = new Map();

    public constructor(){
        super(GLSLSegType.Function);
    }

    public setParameter(identifier:string,info:GLSLVariableInfo){
        this.parameterDef.set(identifier,info);
    }

    public setVariableDef(identifier:string,info:GLSLVariableInfo){
        this.variableDef.set(identifier,info);
    }
    public setVariableRef(identifier:string){
        if(identifier == this.identifier) return;
        if(this.functionRef.includes(identifier)) return;
        if(this.variableDef.get(identifier)!=null) return;
        Utility.ArrayInsert(this.variableRef,identifier);
    }

    public setFunctionRef(identifier:string){
        if(GLSL_INTERNAL_FUNC_MAP[identifier]) return;
        Utility.ArrayInsert(this.functionRef,identifier);
    }

    public setNewFunctionName(fname:string){
        let regexp = new RegExp(`\\s${this.identifier}\\(`);
        this.text = this.text.replace(regexp,` ${fname}(`);
        this.identifier = fname;
    }


}

export class GLSLFile{
    public segments:GLSLSeg[] = [];

    public functions:Map<string,GLSLSegFunction> = new Map();
    public defineFunc:Map<string,GLSLSegPreprocDefine> = new Map();

    public declaration:Map<string,GLSLSegDeclaration> = new Map();
    public define:Map<string,GLSLSegPreprocDefine> = new Map();

    public defineTypes:Map<string,GLSLSegDeclarationBlock> = new Map();
    
    public fileName:string;

    public glslSource:string;

    public getGLSLSource():string{
        if(this.glslSource == null){
            this.glslSource = this.combineSegments();
        }
        return this.glslSource;
    }

    private combineSegments():string{
        return this.segments.map(seg=>{
            let text = seg.text;
            if(!text.endsWith('\n')){
                return text +'\n';
            }
            return text;
        }).join('');
    }

    public clone():GLSLFile{
        let ret =new GLSLFile();
        ret.fileName = this.fileName;
        ret.segments = Utility.clone(this.segments);
        ret.functions = new Map(this.functions);
        
        ret.declaration = new Map(this.declaration)
        ret.define = new Map(this.define);
        ret.defineFunc = new Map(this.defineFunc);
        ret.defineTypes = new Map(this.defineTypes);
        ret.glslSource = this.glslSource;
        return ret;
    }
}