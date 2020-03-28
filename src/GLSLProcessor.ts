import { ParseTree } from "antlr4ts/tree/ParseTree";
import { GLSLParser } from "./glsl/GLSLParser";
import { GLSLFormatter } from "./GLSLFormatter";
import { GLSLSourceInfo, GLSLSourceVisitor } from "./GLSLSourceVisitor";


export class GLSLProcessor{

    private m_parser:GLSLParser;

    private m_parseTree:ParseTree;

    public sourceInfo:GLSLSourceInfo;

    public constructor(parser:GLSLParser){
        this.m_parser = parser;
        this.m_parseTree = parser.external_declaration_list();
    }

    public analysis():GLSLSourceInfo{
        let visitor = new GLSLSourceVisitor();
        visitor.visit(this.m_parseTree);
        this.sourceInfo = visitor.sourceInfo;
        return this.sourceInfo;
    }

    public trimFunctions(entryFunctions:string[]):string[]{
        let info = this.sourceInfo;
        if(info == null) throw new Error('source not analysised');

        let functionTouched:string[] = [];
        functionTouched.push(...entryFunctions);

        let funcs = info.functions;

        let pendingFunctions:string[] = [];
        let workingFunctions:string[] = [];
        workingFunctions.push(...functionTouched);
      
        while(workingFunctions.length >0){
            workingFunctions.forEach(f=>{
                let fobj = funcs[f];
                if(fobj!=null){
                    let subfunc = fobj.funcInvokes;
                    subfunc.forEach(t=>{
                        if(functionTouched.includes(t))return;
                        if(funcs[t] !=null){
                            pendingFunctions.push(t);
                        }
                    });
                }
            });
            functionTouched.push(...pendingFunctions);
            workingFunctions = pendingFunctions;
            pendingFunctions = [];
        }

        return functionTouched;
    }


    getFormattedText(){
        let formatter = new GLSLFormatter();

        return formatter.visit(this.m_parseTree);
    }

}