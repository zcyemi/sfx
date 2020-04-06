import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { GLSLVisitor } from "./glsl/GLSLVisitor";
import { Preprocessor_statementContext } from "./glsl/GLSLParser";
import { GLSLFormatter } from "./GLSLFormatter";


export enum GLSLSegmentType{
    Unknown,
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

    public constructor(type:GLSLSegmentType,text:string){
        this.segmentType = type;
        this.text = text;
    }
}

export class GLSLSource{
    public segments:GLSLSegmentNode[] = [];

}


export class GLSLSegmentVisitor extends AbstractParseTreeVisitor<any> implements GLSLVisitor<any> {
    
    public segments:GLSLSegmentNode[] = [];

    private formatter:GLSLFormatter = new GLSLFormatter();

    protected defaultResult() {
        return null;
    }

    visitPreprocessor_statement(ctx:Preprocessor_statementContext){
        let text = this.formatter.visit(ctx);
        let node = new GLSLSegmentNode(GLSLSegmentType.Preprocessor,text);
        this.segments.push(node);

        this.visitChildren(ctx);
    }



}
