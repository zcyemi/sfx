import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { Function_definitionContext, Function_headerContext, Init_declarator_listContext, Parameter_declarationContext, Single_declarationContext, Function_call_headerContext, Type_specifierContext, Struct_specifierContext, Member_declarationContext, Interface_blockContext } from './glsl/GLSLParser';
import { GLSLVisitor } from './glsl/GLSLVisitor';
import { Utility } from './Utility';


export class GLSLSourceInfo {
    public functions: { [key: string]: FunctionDefinition } = {};
    public declaration: {[key:string]:VariableInfo} = {};
    public types:{[key:string]:TypeInfo} = {};
}

export class VariableInfo {
    type: string;
    identifier: string;
    sepcifier?:string;
}

/**
 * Uniform Buffer or Struct
 */
export class TypeInfo{
    public typename:string;
    public members:{[key:string]:VariableInfo} = {};
    public sepcifier:string;
}



export class FunctionDefinition {
    funcId: string;
    funcInvokes: string[] = [];
    variables: { [key: string]: VariableInfo } = {};
    parameterRef: string[] = [];
}


export class GLSLSourceVisitor extends AbstractParseTreeVisitor<any> implements GLSLVisitor<any> {

    private functions: { [key: string]: FunctionDefinition } = {};
    private types:{[key:string]:TypeInfo} = {};
    private declaration:{[key:string]:VariableInfo} = {};

    public sourceInfo: GLSLSourceInfo;

    public constructor() {
        super();

        let sourceInfo = new GLSLSourceInfo();
        this.sourceInfo = sourceInfo;
        sourceInfo.functions = this.functions;
        sourceInfo.declaration = this.declaration;
        sourceInfo.types = this.types;
    }


    protected defaultResult() {
        return null;
    }

    visitErrorNode(ctx: ErrorNode) {
        console.log(ctx.text);
    }



    private m_curFuncDef: FunctionDefinition;

    visitFunction_definition(ctx: Function_definitionContext) {
        let funcDef = new FunctionDefinition();
        this.m_curFuncDef = funcDef;
        this.visitChildren(ctx);
        this.m_curFuncDef = null;
    }

    visitFunction_header(ctx: Function_headerContext) {
        var funcDef = this.m_curFuncDef;
        let funcName = ctx.variable_identifier().text;
        funcDef.funcId = funcName;
        this.functions[funcName] = funcDef;
        this.visitChildren(ctx);
    }

    visitParameter_declaration(ctx: Parameter_declarationContext) {
        var dec = ctx.parameter_declarator();

        var identifier = dec.IDENTIFIER().text;
        var info = {
            type: dec.type_specifier().text,
            identifier: identifier
        };

        this.m_curFuncDef.variables[identifier] = info;
        this.m_curFuncDef.parameterRef.push(identifier);
        this.visitChildren(ctx);
    }


    visitInit_declarator_list(ctx:Init_declarator_listContext){


        this.visitChildren(ctx);
    }

    visitSingle_declaration(ctx:Single_declarationContext){

        this.addDeclaration(ctx);

        this.visitChildren(ctx);
    }

    visitFunction_call_header(ctx:Function_call_headerContext){

        let func = this.m_curFuncDef;
        if(func!=null){

            var funcName = ctx.function_identifier().text;

            Utility.arrayAddDistinct(func.funcInvokes,funcName);
        }


        this.visitChildren(ctx);
    }

    private addDeclaration(ctx:Single_declarationContext){

        let func = this.m_curFuncDef;
        if(func!=null){

            var type = ctx.fully_specified_type().text;
            var identifier= ctx.IDENTIFIER();
            if(identifier!=null){
                var id = identifier.text;
                var info = {
                    type: type,
                    identifier: id
                };
                func.variables[id] = info;
            }
        }
        else{
            //global declaration
            let array = ctx.array_specifier();
            if(array!=null){
                console.log(array.text);
            }
            else{
                let identifier =ctx.IDENTIFIER();
                if(identifier!=null){
                    let info:VariableInfo = new VariableInfo();
                    info.identifier=identifier.text;
                    let fulltype = ctx.fully_specified_type();
                    if(fulltype!=null){
                        let specifier = fulltype.type_qualifier();
                        let type = this.getTypeIdentifier(fulltype.type_specifier());
                        if(specifier!=null) info.sepcifier = specifier.text;
                        info.type = type;
                    }
                    this.declaration[info.identifier] = info;
                }
            }

        }

        this.visitChildren(ctx);

    }

    private m_curTypeInfo:TypeInfo;

    visitStruct_specifier(ctx:Struct_specifierContext){
        let typeinfo = new TypeInfo();
        let identifier= ctx.IDENTIFIER().text;
        typeinfo.typename = identifier;
        typeinfo.sepcifier=ctx.STRUCT().text;

        this.types[identifier] = typeinfo;


        this.m_curTypeInfo = typeinfo;
        this.visitChildren(ctx);
        this.m_curTypeInfo = null;
    }

    visitInterface_block(ctx:Interface_blockContext){
        let typeinfo = new TypeInfo();

        this.m_curTypeInfo = typeinfo;
        let block = ctx.basic_interface_block();
        let id = block.IDENTIFIER().text;

        let sepcifier = block.interface_qualifier().text;
        typeinfo.sepcifier = sepcifier;

        typeinfo.typename = id;
        this.types[id] = typeinfo;

        this.visitChildren(ctx);
        this.m_curTypeInfo = null;
    }




    visitMember_declaration(ctx:Member_declarationContext){
        let typeinfo =this.m_curTypeInfo;
        if(typeinfo!=null){
            
            let type_specifier = this.getTypeIdentifier(ctx.fully_specified_type().type_specifier());
            let identifier = ctx.struct_declarator_list().text;

            let info = new VariableInfo();
            info.identifier = identifier;
            info.type = type_specifier;
            typeinfo.members[identifier] = info;
        }

        this.visitChildren(ctx);
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


}
