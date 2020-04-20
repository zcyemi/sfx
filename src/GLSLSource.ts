import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { DeclarationContext, External_declaration_listContext, Function_call_headerContext, Function_definitionContext, Function_headerContext, GLSLParser, Init_declarator_listContext, Interface_blockContext, Member_declarationContext, Parameter_declarationContext, Preprocessor_statementContext, Single_declarationContext, Struct_specifierContext, Type_specifierContext, ExpressionContext, Variable_identifierContext } from "./glsl/GLSLParser";
import { GLSLVisitor } from "./glsl/GLSLVisitor";
import { GLSLFormatter } from "./GLSLFormatter";
import { Utility } from "./Utility";
export enum GLSLSegmentType{
    Unknown,
    Function,
    Preprocessor,
    Pragma,
    Precision,
    Declaration,
}

export enum GLSLShaderType{
    Vertex,
    Fragment,
}

export class VariableInfo {
    type: string;
    identifier: string;
    sepcifier?:string;
}


export class DefineInfo{
    identifier:string;
    parameterRef:string[];
    functionRef:string[];
}

/**
 * Uniform Buffer or Struct
 */
export class TypeInfo{
    public typename:string;
    public members:{[key:string]:VariableInfo} = {};
    public specifier:string;
}

export class FunctionDefinition {
    funcId: string;
    funcInvokes: string[] = [];
    variables: { [key: string]: VariableInfo } = {};
    variableRef:string[] = [];
    parameterRef: string[] = [];

    public getExternalVariable():string[]{
        let ret = [];
        this.parameterRef.forEach(p=>{
            if(this.variables[p]==null){
                ret.push(p);
            }
        });
        return ret;
    }
}

export class GLSLSegmentNode{
    public segmentType:GLSLSegmentType;
    public text:string;
    public identifier:string;
    public type:string;
    public specifier?:string;

    public constructor(type:GLSLSegmentType,text:string){
        this.segmentType = type;
        this.text = text;
    }

    public update(){
        switch(this.segmentType){
            case GLSLSegmentType.Declaration:
            if(this.specifier == 'in' || this.specifier == 'out'){
                this.text = `${this.specifier} ${this.type} ${this.identifier};`;
            }
            break;
        }
    }

    public getText(){
        return this.text;
    }
}

export class GLSLPreprocessorSegmentNode extends GLSLSegmentNode{

}

export class GLSLDeclarationSegmentNode extends GLSLSegmentNode{

}

export class GLSLFunctionSegmentNode extends GLSLSegmentNode{

}


export class GLSLSource{
    public segments:GLSLSegmentNode[] = [];
    public segments_map:Map<string,GLSLSegmentNode>;
    public functions: { [key: string]: FunctionDefinition } = {};
    public declaration: {[key:string]:VariableInfo} = {};
    public types:{[key:string]:TypeInfo} = {};
    public define:{[key:string]:DefineInfo} = {};
    public defineFunction:{[key:string]:DefineInfo} = {};

    public source:string;
    public fileName:string;

    public parser:GLSLParser;
    public parser_root:External_declaration_listContext;

    public constructor(parser:GLSLParser,parser_root:External_declaration_listContext){
        this.parser = parser;
        this.parser_root = parser_root;
    }

    public getSource(){
        if(this.source == null){
            this.source = this.combineSegments();
        }
        return this.source;
    }

    public getSegment(identifier:string):GLSLSegmentNode{
        return this.segments_map.get(identifier);
    }

    public combineSegments():string{
        return this.segments.map(seg=>{
            let text = seg.text;
            if(!text.endsWith('\n')){
                return text +'\n';
            }
            return text;
        }).join('');
    }

    public regenerageSegmentMap(){
        let map = new Map<string,GLSLSegmentNode>();
        this.segments.forEach(seg=>{
            map.set(seg.identifier,seg);
        });
        this.segments_map = map;
    }

    public clone():GLSLSource{
        let ret = new GLSLSource(null,null);
        ret.segments = Utility.clone(this.segments);

        ret.segments.forEach(s=>Object.setPrototypeOf(s,GLSLSegmentNode.prototype));
        ret.functions = Utility.clone(this.functions);
        ret.declaration = Utility.clone(this.declaration);
        ret.types = Utility.clone(this.types);
        ret.source = this.source;
        ret.fileName = this.fileName;
        ret.regenerageSegmentMap();
        return ret;
    }
}

export class GLSLSegmentVisitor extends AbstractParseTreeVisitor<any> implements GLSLVisitor<any> {
    private segments:GLSLSegmentNode[] = [];
    private formatter:GLSLFormatter = new GLSLFormatter();

    private source:GLSLSource;

    public constructor(source:GLSLSource){
        super();
        this.source = source;
        source.segments = this.segments;
        this.visit(source.parser_root);
        source.regenerageSegmentMap();
    }

    protected defaultResult() {
        return null;
    }

    visitPreprocessor_statement(ctx:Preprocessor_statementContext){
        let text = this.formatter.visit(ctx);
        let node = new GLSLPreprocessorSegmentNode(GLSLSegmentType.Preprocessor,text);
        this.segments.push(node);

        let define = ctx.PREPROC_DEFINE();
        if(define!=null){
            let text = define.text;

            let expr = text.substr(8).trim();
            let splits = expr.split(' ').filter(t=>t!='');
            let identifier = splits[0];
            splits.splice(0,1);
            let value = splits.join('');

            let matchFunc =  identifier.match(/([\d\w_]+)\s*\((.+)\)/);
            let isFunction = matchFunc!=null;

            let defineInfo = new DefineInfo();
            if(isFunction){
                node.identifier = matchFunc[1];
            }else{
                node.identifier = identifier;
            }
        }

        this.visitChildren(ctx);
    }

    m_curNode:GLSLSegmentNode;
    visitFunction_definition(ctx:Function_definitionContext){
        let node = new GLSLFunctionSegmentNode(GLSLSegmentType.Function,this.formatter.visit(ctx));
        this.m_curNode = node;
        this.visitChildren(ctx.function_prototype());
        this.m_curNode = null;
        this.segments.push(node);
    }

    visitFunction_header(ctx: Function_headerContext){
        let fname = ctx.variable_identifier().text;
        this.m_curNode.identifier = fname;
    }

    visitStruct_specifier(ctx:Struct_specifierContext){
        let node = new GLSLDeclarationSegmentNode(GLSLSegmentType.Declaration,this.formatter.visit(ctx));
        node.identifier = ctx.IDENTIFIER().text;
        node.specifier = ctx.STRUCT().text;
        node.type = node.identifier;
        this.segments.push(node);
    }

    visitInterface_block(ctx:Interface_blockContext){
        let node = new GLSLDeclarationSegmentNode(GLSLSegmentType.Declaration,this.formatter.visit(ctx));
        let block = ctx.basic_interface_block();
        let id = block.IDENTIFIER().text;

        let sepcifier = block.interface_qualifier().text;
        node.specifier = sepcifier;
        node.identifier = id;
        node.type = id;
        this.segments.push(node);
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

    visitSingle_declaration(ctx:Single_declarationContext){
        let array = ctx.array_specifier();
        if(array ==null){
            let identifier =ctx.IDENTIFIER();
            if(identifier!=null){

                let text = this.formatter.visit(ctx).trim();
                if(!text.endsWith(';')){
                    text = text+';';
                }
                let node = new GLSLDeclarationSegmentNode(GLSLSegmentType.Declaration,text);
                node.identifier=identifier.text;
                let fulltype = ctx.fully_specified_type();
                if(fulltype!=null){
                    let specifier = fulltype.type_qualifier();
                    let type = this.getTypeIdentifier(fulltype.type_specifier());
                    if(specifier!=null) node.specifier = specifier.text;
                    node.type = type;
                }
                this.segments.push(node);
                return;
            }
        }
        this.visitChildren(ctx);
    }

    visitDeclaration(ctx:DeclarationContext){
        if(ctx.precision_qualifier()!=null){
            let node = new GLSLSegmentNode(GLSLSegmentType.Precision,this.formatter.visit(ctx));
            node.type = this.getTypeIdentifier(ctx.type_specifier());
            node.specifier = ctx.precision_qualifier().text;
            this.segments.push(node);
        }
        else{
            this.visitChildren(ctx);
        }
    }
}

export class GLSLAnalysisVisitor extends AbstractParseTreeVisitor<any> implements GLSLVisitor<any> {
    private functions: { [key: string]: FunctionDefinition } = {};
    private types:{[key:string]:TypeInfo} = {};
    private declaration:{[key:string]:VariableInfo} = {};
    private define:{[key:string]:DefineInfo} = {};
    private defineFunction:{[key:string]:DefineInfo} = {};
    public sourceInfo: GLSLSource;
    public constructor(source:GLSLSource) {
        super();
        let sourceInfo = source;
        this.sourceInfo = sourceInfo;
        sourceInfo.functions = this.functions;
        sourceInfo.declaration = this.declaration;
        sourceInfo.types = this.types;
        sourceInfo.define = this.define;
        sourceInfo.defineFunction = this.defineFunction;
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

    visitVariable_identifier(ctx:Variable_identifierContext){
        let identifier = ctx.IDENTIFIER();

        if(this.m_curFuncDef!=null){
            this.functionDefAddVariableRef(identifier.text);
        }

        this.visitChildren(ctx);
    }

    private functionDefAddVariableRef(identifier:string){

        let funcDef = this.m_curFuncDef;
        if(identifier == funcDef.funcId) return;
        let variableRef = funcDef.variableRef;
        let functionInv = funcDef.funcInvokes;
        if(funcDef.variables[identifier]!=null) return;
        if(functionInv.indexOf(identifier) >=0) return;
        if(variableRef.indexOf(identifier) < 0){
            variableRef.push(identifier);
        }
    }

    visitPreprocessor_statement(ctx:Preprocessor_statementContext){
        let define = ctx.PREPROC_DEFINE();
        if(define!=null){
            let text = define.text;

            let expr = text.substr(8).trim();
            let splits = expr.split(' ').filter(t=>t!='');
            let identifier = splits[0];
            splits.splice(0,1);
            let value = splits.join('');

            let matchFunc =  identifier.match(/([\d\w_]+)\s*\((.+)\)/);
            let isFunction = matchFunc!=null;

            let defineInfo = new DefineInfo();
            if(isFunction){
                defineInfo.identifier = matchFunc[1];
                this.defineFunction[defineInfo.identifier] = defineInfo;
            }else{
                defineInfo.identifier = identifier;
                this.define[defineInfo.identifier] = defineInfo;
            }

            let funRef = [];
            let varRef = [];
            this.parseExpression(value,funRef,varRef);

            defineInfo.functionRef = funRef;
            defineInfo.parameterRef = varRef;

        }
    }

    private parseExpression(text:string,funcRef:string[],variableRef:string[]){
        text = text.trim();
        let matchFunc =  text.match(/([\d\w_]+)\s*\((.+)\)/);

        if(matchFunc!=null){
            funcRef.push(matchFunc[1]);
            this.parseExpression(matchFunc[2],funcRef,variableRef);
            text = text.replace(matchFunc[0],"");
            this.parseExpression(text,funcRef,variableRef);
            return;
        }

        text = text.replace(/(\*|\+|,|-|\/)/gm,' ');

        let subtext = text.split(' ').filter(t=>t!='');


        subtext.forEach(t=>{
            t = t.trim();
            if(t.match(/^\d*(\.\d*)?$/gm)){
                return;
            };
            if(t.indexOf('.')>=0){
                let ts = t.split('.')[0];

                if(variableRef.indexOf(ts) <0){
                    variableRef.push(ts)
                }
                variableRef.push(ts[0]);
            }
            else{
                variableRef.push(t);
            }

        })

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
        typeinfo.specifier=ctx.STRUCT().text;

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

        let specifier = block.interface_qualifier().text;
        typeinfo.specifier = specifier;

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
