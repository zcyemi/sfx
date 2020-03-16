import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { GLSLVisitor } from './glsl/GLSLVisitor';
import { SFXSource } from './SFXSource';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';




export class GLSLSourceVisitor extends AbstractParseTreeVisitor<any> implements GLSLVisitor<any> {
    protected defaultResult() {
        return null;
    }

    visitErrorNode(ctx:ErrorNode){
        console.log(ctx.text);
    }

}
