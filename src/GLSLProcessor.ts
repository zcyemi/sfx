import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { GLSLLexer } from "./glsl/GLSLLexer";
import { GLSLParser } from "./glsl/GLSLParser";
import { GLSLAnalysisVisitor, GLSLSegmentVisitor, GLSLSource } from "./GLSLSource";

export class GLSLTool{

    public static parse(glsl:string,filename:string):Promise<GLSLSource>{
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

            let root = parse.external_declaration_list();

            if(hasError){
                rej(errmsg);
                return;
            }

            let source = new GLSLSource(parse,root);
            source.source = glsl;
            source.fileName = filename;
            res(source);
            return true;
        });
    }

    public static analysis(source:GLSLSource):Promise<GLSLSource>{
        return new Promise((res,rej)=>{
            let visitor = new GLSLAnalysisVisitor(source);
            res(source);
        });
    }

    public static segment(source:GLSLSource):Promise<GLSLSource>{
        return new  Promise((res,rej)=>{
            let visitor = new GLSLSegmentVisitor(source);
            res(source);
        })
    }

    public static trimFunctions(source:GLSLSource,entryFunctions:string[]):string[]{
        let info = source;
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
}