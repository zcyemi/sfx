import { ParseTree } from "antlr4ts/tree/ParseTree";
import { GLSLParser } from "./glsl/GLSLParser";
import { GLSLFormatter } from "./GLSLFormatter";
import { GLSLSourceInfo, GLSLSourceVisitor } from "./GLSLSourceVisitor";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { GLSLLexer } from "./glsl/GLSLLexer";
import { GLSLSegmentVisitor } from "./GLSLSource";


export class GLSLProcessor{

    private m_parser:GLSLParser;

    private m_parseTree:ParseTree;

    public sourceInfo:GLSLSourceInfo;



    public constructor(parser?:GLSLParser){
        if(parser!=null){
            this.m_parser = parser;
            this.m_parseTree = parser.external_declaration_list();
        }

    }

    public static parse(glsl:string,filename:string):Promise<GLSLProcessor>{

        return new Promise((res,rej)=>{

            let input = new ANTLRInputStream(glsl);

            let lexer = new GLSLLexer(input);
            let tokenstream = new CommonTokenStream(lexer);
            let parse = new GLSLParser(tokenstream);

            var hasError = false;
            let errmsg = null;
            parse.addErrorListener({
                syntaxError:(rec,offsymbol,line,pos,msg,e)=>{
                    hasError = true;

                    if(msg.length > 75){
                        msg = msg.substr(0,75);
                    }
                    errmsg = `glsl error: (${line}:${pos}) ${msg}  file:${filename}`;

                    
                    let lineAry = glsl.split('\n');
                    let lines = line > 0? line-1:line;
                    let linee = line + 1 > lineAry.length? lineAry.length:line;

                    let linectx  =lineAry.splice(lines,linee-lines+1);


                    console.error([filename,errmsg,offsymbol,linectx.join('\n')]);
                }
            });
            

            let parseTree = parse.external_declaration_list();

            if(hasError){
                rej(errmsg);
                return;
            }

            let processor= new GLSLProcessor();
            processor.m_parser = parse;
            processor.m_parseTree = parseTree;

            processor.analysisSegments();

            console.log('length',parseTree.text.length);


            res(processor);
            return true;
        });
    }

    public analysisSegments(){
        let visitor = new GLSLSegmentVisitor();
        visitor.visit(this.m_parseTree);

        console.log(visitor.segments);
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