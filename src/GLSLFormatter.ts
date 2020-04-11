import { External_declaration_listContext, Builtin_type_specifier_nonarrayContext, Struct_specifierContext } from "./glsl/GLSLParser";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { GLSLVisitor } from "./glsl/GLSLVisitor";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";


const KEYWORD_WS:string[] =[
    'struct','return','uniform',
    'precision','highp','mediump','lowp','invariant','smooth','flat','precise',
    'in','out','inout','varying','attribute'
]

export class GLSLFormatter extends AbstractParseTreeVisitor<string> implements GLSLVisitor<string> {

    public defineTypes:string[] = [];

    public registerType(type:string){
        if(this.defineTypes.includes(type)) return;
        this.defineTypes.push(type);
    }

    protected defaultResult(): string {
        return "";
    }

    visitBuiltin_type_specifier_nonarray(ctx:Builtin_type_specifier_nonarrayContext):string{
        return ctx.text+' ';
    }

    visitTerminal(ctx:TerminalNode):string{
        const text = ctx.text;
        if(KEYWORD_WS.includes(text) || this.defineTypes.includes(text)) return text +' ';
        return text;
    }


    aggregateResult(aggregate: string, nextResult: string): string{
        return aggregate + nextResult;
    }
    

}