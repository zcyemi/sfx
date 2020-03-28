import { External_declaration_listContext } from "./glsl/GLSLParser";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { GLSLVisitor } from "./glsl/GLSLVisitor";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";


export class GLSLFormatter extends AbstractParseTreeVisitor<string> implements GLSLVisitor<string> {
    protected defaultResult(): string {
        return "";
    }

    visitTerminal(node:TerminalNode):string{
        return node.text;
    }

    aggregateResult(aggregate: string, nextResult: string): string{
        return aggregate + nextResult;
    }

}