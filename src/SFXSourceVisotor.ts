import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SFXVisitor } from './sfx/SFXVisitor';
import { SFXSource, SFXInclude, SFXTechnique, SFXTechniquePipeline, SFXTechniqueProperty, SFXTechniqueProperties } from './SFXSource';
import { File_nameContext, Stat_include_baseContext, Stat_include_libContext, Teq_defContext, Teq_stat_vsContext, Teq_stat_pipelineContext, Teq_stat_propContext, Teq_statContext, Teq_bodyContext, ProgramContext, Teq_stat_psContext, Prop_decContext, Pipe_statContext, Pipe_exprContext, Program_statContext } from './sfx/SFXParser';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';

type Result = SFXSource;



export class SFXSourceVisotor extends AbstractParseTreeVisitor<any> implements SFXVisitor<any> {

    private m_source:SFXSource = new SFXSource();


    protected defaultResult() {
        return this;
    }

    public visitErrorNode(node: ErrorNode){
        console.error(node.text);
        return this;
    }

    visitProgram(ctx:ProgramContext):SFXSource{
        this.visitChildren(ctx);
        return this.m_source;
    }

    visitProgram_stat(ctx:Program_statContext){
        let glsl = ctx.GLSL();

        if(glsl!=null){
            let glslcode = glsl.text;
            glslcode = glslcode.substr(5,glslcode.length-9);

            let blocks = this.m_source.glslBlock || [];
            blocks.push(glslcode);
            this.m_source.glslBlock = blocks;
        }
        this.visitChildren(ctx);
    }

    visitFile_name(filename:File_nameContext){
        this.m_source.fileName = filename.text;

        return this;
    }

    visitStat_include_base(ctx:Stat_include_baseContext){
        let source = this.m_source;

        var filename = ctx.file_name().text;
        if(filename != null){
            var inc = new SFXInclude();
            inc.fileName = filename;
            inc.fullName = filename;
            source.addInclude(inc);
        }

        return this;
    }

    visitStat_include_lib(ctx:Stat_include_libContext){
        let source = this.m_source;

        let filepath = ctx.file_path();

        if(filepath!=null){
            var inc= new SFXInclude();
            inc.fullName = filepath.text;
            inc.fileName = filepath.file_name().text;
            inc.library = filepath.file_folder()[0].SFX_IDENTIFIER().text;
            source.addInclude(inc);
        }

        return this;
    }

    private m_teq:SFXTechnique;

    visitTeq_def(ctx:Teq_defContext){
        let teq = new SFXTechnique();
        teq.name = ctx.SFX_IDENTIFIER().text;

        this.m_teq = teq;

        this.visitChildren(ctx);

        this.m_teq = null;

        let teqs = this.m_source.techniques;
        if(teqs == null){
            this.m_source.techniques = [teq];
        }
        else{
            teqs.push(teq);
        }
        return this;
    }

    visitTeq_stat_vs(ctx:Teq_stat_vsContext){
        this.m_teq.vsEntry = ctx.SFX_IDENTIFIER().text;
    }

    visitTeq_stat_ps(ctx:Teq_stat_psContext){
        this.m_teq.psEntry = ctx.SFX_IDENTIFIER().text;
    }

    private m_pipeline:SFXTechniquePipeline;
    visitTeq_stat_pipeline(ctx:Teq_stat_pipelineContext){
        let pipeline = new SFXTechniquePipeline();
        this.m_pipeline = pipeline;
        this.visitChildren(ctx);

        this.m_pipeline = null;
        this.m_teq.pipeline = pipeline;
        return this;
    }

    private m_pipePropExpr:any[];
    visitPipe_stat(ctx:Pipe_statContext){
        let prop = ctx.SFX_PIPE_PROP().text;

        let exprs = [];
        this.m_pipePropExpr = exprs;
        this.visitChildren(ctx);
        this.m_pipePropExpr = null;
        this.m_pipeline[prop] = exprs;
    }

    visitPipe_expr(ctx:Pipe_exprContext){
        this.m_pipePropExpr.push(ctx.SFX_IDENTIFIER().text);
    }

    private m_property:SFXTechniqueProperties;
    visitTeq_stat_prop(ctx:Teq_stat_propContext){
        let prop = {};
        this.m_property = prop;

        this.visitChildren(ctx);

        this.m_property= null;
        this.m_teq.properties = prop;

        return this;
    }

    visitProp_dec(ctx:Prop_decContext){
        let semantic = ctx.SFX_SEMANTIC();
        let identifier = ctx.SFX_IDENTIFIER().text;

        let prop = new SFXTechniqueProperty();
        prop.semantic = semantic.text;

        prop.variable = identifier;
        this.m_property[identifier] = prop;
    }



}
