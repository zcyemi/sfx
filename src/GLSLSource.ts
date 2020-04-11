import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { GLSLVisitor } from "./glsl/GLSLVisitor";
import { Preprocessor_statementContext, Function_prototypeContext, Function_identifierContext, Function_definitionContext, Function_headerContext, Struct_specifierContext, Interface_blockContext, Member_declarationContext, DeclarationContext, Single_declarationContext, Type_specifierContext } from "./glsl/GLSLParser";
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
    public type:string;
    public specifier?:string;

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


    m_curNode:GLSLSegmentNode;
    visitFunction_definition(ctx:Function_definitionContext){

        let node = new GLSLSegmentNode(GLSLSegmentType.Function,this.formatter.visit(ctx));
        this.m_curNode = node;
        this.visitChildren(ctx.function_prototype());
        this.m_curNode = null;
        this.segments.push(node);
    }

    visitFunction_header(ctx: Function_headerContext){
        let fname = ctx.variable_identifier().text;
        this.m_curNode.identifier = fname;
    }

    visitStruct_specifier(ctx:Struct_specifierContext){
        let node = new GLSLSegmentNode(GLSLSegmentType.Declaration,this.formatter.visit(ctx));
        node.identifier = ctx.IDENTIFIER().text;
        node.specifier = ctx.STRUCT().text;
        node.type = node.identifier;
        this.segments.push(node);
    }

    visitInterface_block(ctx:Interface_blockContext){
        let node = new GLSLSegmentNode(GLSLSegmentType.Declaration,this.formatter.visit(ctx));

        let block = ctx.basic_interface_block();
        let id = block.IDENTIFIER().text;

        let sepcifier = block.interface_qualifier().text;
        node.specifier = sepcifier;
        node.identifier = id;
        node.type = id;
        this.segments.push(node);
    }


    private getTypeIdentifier(type:Type_specifierContext):string{
        let type_noarray = type.type_specifier_nonarray();

        let buildIn =type_noarray.builtin_type_specifier_nonarray();
        if(buildIn!=null){
            return buildIn.text;
        }
        let identifier= type_noarray.IDENTIFIER();
        if(identifier!=null) return identifier.text;
        return type_noarray.struct_specifier().IDENTIFIER().text;
    }

    visitSingle_declaration(ctx:Single_declarationContext){
        let array = ctx.array_specifier();
        if(array ==null){
            let identifier =ctx.IDENTIFIER();
            if(identifier!=null){
                let node = new GLSLSegmentNode(GLSLSegmentType.Declaration,this.formatter.visit(ctx));
                node.identifier=identifier.text;
                let fulltype = ctx.fully_specified_type();
                if(fulltype!=null){
                    let specifier = fulltype.type_qualifier();
                    let type = this.getTypeIdentifier(fulltype.type_specifier());
                    if(specifier!=null) node.specifier = specifier.text;
                    node.type = type;
                }
                this.segments.push(node);
                return;
            }
        }
        this.visitChildren(ctx);
    }


    visitDeclaration(ctx:DeclarationContext){
        if(ctx.precision_qualifier()!=null){
            let node = new GLSLSegmentNode(GLSLSegmentType.Precision,this.formatter.visit(ctx));
            node.type = this.getTypeIdentifier(ctx.type_specifier());
            node.specifier = ctx.precision_qualifier().text;
            this.segments.push(node);
        }
        else{
            this.visitChildren(ctx);
        }
    }

}
