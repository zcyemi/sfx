import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { GLSLVisitor } from "./glsl/GLSLVisitor";
import { GLSLFile, GLSLSeg, GLSLSegPreprocCondition, GLSLSegPreprocDefine, GLSLSegFunction, GLSLVariableInfo, GLSLSegDeclarationBlock, GLSLTypeInfo, GLSLSegDeclaration } from "./GLSLFile";
import { Preprocessor_statementContext, Function_definitionContext, Function_headerContext, Parameter_declarationContext, Struct_specifierContext, Member_declarationContext, Type_specifierContext, Interface_blockContext, Single_declarationContext, Function_call_headerContext, Variable_identifierContext } from "./glsl/GLSLParser";
import { GLSLFormatter } from "./GLSLFormatter";
import { VariableInfo, TypeInfo } from "./GLSLSource";

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

    private setType(identifier:string,seg:GLSLSegDeclarationBlock){
        this.source.defineTypes.set(identifier,seg);
    }

    private setDeclaration(identifeir:string,seg:GLSLSegDeclaration){
        this.source.declaration.set(identifeir,seg);
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

    //#region Preprocessor
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

    //#endregion

    //#region Functions

    private m_curfuncSeg:GLSLSegFunction;

    visitFunction_definition(ctx:Function_definitionContext){
        let funcSeg = new GLSLSegFunction();
        funcSeg.text = GLSLFormatter.instance.visit(ctx);
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

    //#region blocks

    private m_curDeclBlock:GLSLSegDeclarationBlock;
    visitStruct_specifier(ctx:Struct_specifierContext){
        let identifier = ctx.IDENTIFIER().text;

        let typeInfo = new GLSLTypeInfo();
        typeInfo.typeName = identifier;
        typeInfo.sepcifier = "struct";


        let seg = new GLSLSegDeclarationBlock();
        seg.text = GLSLFormatter.instance.visit(ctx);
        seg.typeName = identifier;
        seg.typeInfo = typeInfo;

        this.m_curDeclBlock = seg;
        this.setType(identifier,seg);
        this.pushSegNode(seg);
        this.visitChildren(ctx);

        this.m_curDeclBlock = null;
    }

    visitInterface_block(ctx:Interface_blockContext){
        let text = GLSLFormatter.instance.visit(ctx);
        let block = ctx.basic_interface_block();

        let identifier = block.IDENTIFIER().text;
        let specifier = block.interface_qualifier().text;

        let typeInfo = new GLSLTypeInfo();
        typeInfo.typeName = identifier;
        typeInfo.sepcifier = specifier;

        let seg = new GLSLSegDeclarationBlock();
        seg.text = text;
        seg.typeInfo = typeInfo;
        seg.typeName = identifier;

        this.setType(identifier,seg);
        this.pushSegNode(seg);

        this.m_curDeclBlock = seg;
        this.visitChildren(ctx);
        this.m_curDeclBlock = null;
    }

    visitMember_declaration(ctx:Member_declarationContext){
        let declBlock = this.m_curDeclBlock;
        if(declBlock!=null){
            let type_specifier = this.getTypeIdentifier(ctx.fully_specified_type().type_specifier());
            let identifier = ctx.struct_declarator_list().text;
            let memberInfo =new GLSLVariableInfo();
            memberInfo.identifier=  identifier;
            memberInfo.typeName = type_specifier;
            declBlock.typeInfo.member.push(memberInfo);
        }
        this.visitChildren(ctx);
    }
    //#endregion

    //#region Fields

    visitSingle_declaration(ctx:Single_declarationContext){

        let curFunc = this.m_curfuncSeg;
        if(curFunc == null){
            //global declaration
            
            let seg = new GLSLSegDeclaration();
            seg.text = GLSLFormatter.instance.visit(ctx);

            let arrray = ctx.array_specifier();
            if(arrray != null){

            }
            else{
                let identifeir = ctx.IDENTIFIER();
                if(identifeir !=null){
                    seg.identifier = identifeir.text;
                    let fulltype = ctx.fully_specified_type();
                    if(fulltype!=null){
                        let specifier = fulltype.type_qualifier();
                        let type = this.getTypeIdentifier(fulltype.type_specifier());

                        let specifiertxt = specifier == null ? null : specifier.text;

                        seg.typeName = type;
                        seg.specifier = specifiertxt;
                        this.pushSegNode(seg);
                        this.setDeclaration(identifeir.text,seg);
                    }
                }

            }
        }
        else{
            let info = new GLSLVariableInfo();
            let typename = ctx.fully_specified_type().text;
            let identifier = ctx.IDENTIFIER().text;
            info.typeName = typename;
            info.identifier = identifier;
            curFunc.setVariableDef(identifier,info);
        }
        this.visitChildren(ctx);
    }

    visitFunction_call_header(ctx:Function_call_headerContext){
        let curFunc = this.m_curfuncSeg;
        if(curFunc != null){
            const funcName = ctx.function_identifier().text;
            curFunc.setFunctionRef(funcName);
        }
        this.visitChildren(ctx);
    }

    visitVariable_identifier(ctx:Variable_identifierContext){
        let curFunc = this.m_curfuncSeg;
        if(curFunc!=null){
            curFunc.setVariableRef(ctx.IDENTIFIER().text);
        }
        this.visitChildren(ctx);
    }

    //#endregion
}