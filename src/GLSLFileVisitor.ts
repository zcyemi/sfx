import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { GLSLVisitor } from "./glsl/GLSLVisitor";
import { GLSLFile, GLSLSeg, GLSLSegPreprocCondition, GLSLSegPreprocDefine, GLSLSegFunction } from "./GLSLFile";
import { Preprocessor_statementContext } from "./glsl/GLSLParser";
import { GLSLFormatter } from "./GLSLFormatter";


export class GLSLFileVisitor extends AbstractParseTreeVisitor<any> implements GLSLVisitor<any> {
    
    private source:GLSLFile = new GLSLFile();
    
    protected defaultResult() {
    }

    private pushSegNode(seg:GLSLSeg){

    }

    private setFunc(funcIdentifier:string,seg:GLSLSegFunction){
        this.source.functions.set(funcIdentifier,seg);
    }

    private setDefineFunc(funcIdentifier:string,seg:GLSLSegPreprocDefine){
        this.source.functions.set(funcIdentifier,seg);
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
            node.text;
            this.pushSegNode(node);
        }

        this.visitChildren(ctx);
    }
    

}