import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { GLSLVisitor } from "./glsl/GLSLVisitor";
import { GLSLFile, GLSLSeg, GLSLSegPreprocCondition, GLSLSegPreprocDefine, GLSLSegFunction, GLSLVariableInfo } from "./GLSLFile";
import { Preprocessor_statementContext, Function_definitionContext, Function_headerContext, Parameter_declarationContext } from "./glsl/GLSLParser";
import { GLSLFormatter } from "./GLSLFormatter";

export class GLSLFileVisitor extends AbstractParseTreeVisitor<any> implements GLSLVisitor<any> {
    
    private source:GLSLFile = new GLSLFile();

    public get sourceFile():GLSLFile{
        return this.source;
    }
    
    protected defaultResult() {
    }

    private pushSegNode(seg:GLSLSeg){
        this.source.segments.push(seg);
    }

    private setFunc(funcIdentifier:string,seg:GLSLSegFunction){
        this.source.functions.set(funcIdentifier,seg);
    }

    private setDefineFunc(funcIdentifier:string,seg:GLSLSegPreprocDefine){
        this.source.defineFunc.set(funcIdentifier,seg);
    }

    private setDefine(identifier:string,seg:GLSLSegPreprocDefine){
        this.source.define.set(identifier,seg);
    }
    
    visitPreprocessor_statement(ctx:Preprocessor_statementContext){
        let text = GLSLFormatter.instance.visit(ctx);
        let define = ctx.PREPROC_DEFINE();
        if(define!=null){
            let node = new GLSLSegPreprocDefine();
            node.text = text;
            text = define.text;

            let expr = text.substr(8).trim();
            let splits = expr.split(' ').filter(t=>t!='');
            let identifier = splits[0];
            splits.splice(0,1);
            let value = splits.join('');

            let matchFunc =  identifier.match(/([\d\w_]+)\s*\((.+)\)/);
            let isFunction = matchFunc!=null;
            node.isFunc = isFunction;
            node.valueExpr = value;
            if(isFunction){
                node.identifier = matchFunc[1];
                this.setDefineFunc(node.identifier,node);
            }else{
                node.identifier = identifier;
                this.setDefine(identifier,node);
            }
            this.pushSegNode(node);
        }
        else{
            let node = new GLSLSegPreprocCondition();
            node.text = text;
            this.pushSegNode(node);
        }
        this.visitChildren(ctx);
    }


    //#region Functions

    private m_curfuncSeg:GLSLSegFunction;

    visitFunction_definition(ctx:Function_definitionContext){
        let funcSeg = new GLSLSegFunction();
        this.m_curfuncSeg = funcSeg;
        this.visitChildren(ctx);
        this.pushSegNode(funcSeg);
        this.m_curfuncSeg = null;
    }

    visitFunction_header(ctx:Function_headerContext){
        let curfunc = this.m_curfuncSeg;
        let funcName = ctx.variable_identifier().text;
        curfunc.identifier = funcName;
        this.setFunc(funcName,curfunc);
        this.visitChildren(ctx);
    }

    visitParameter_declaration(ctx:Parameter_declarationContext){
        var dec = ctx.parameter_declarator();
        var identifier = dec.IDENTIFIER().text;

        var type_specifier = dec.type_specifier().text;

        var info = new GLSLVariableInfo();
        info.typeName = type_specifier;
        info.identifier = identifier;
        this.m_curfuncSeg.setParameter(identifier,info);

        this.visitChildren(ctx);
    }



    //#endregion
}