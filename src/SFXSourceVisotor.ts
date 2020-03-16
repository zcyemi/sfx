import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SFXVisitor } from './sfx/SFXVisitor';
import { SFXSource, SFXInclude, SFXTechnique } from './SFXSource';
import { File_nameContext, Stat_include_baseContext, Stat_include_libContext, Teq_defContext } from './sfx/SFXParser';

type Result = SFXSource;

export class SFXSourceVisotor extends AbstractParseTreeVisitor<SFXSource> implements SFXVisitor<SFXSource> {

    private m_source:SFXSource = new SFXSource();

    protected defaultResult(): SFXSource {
        return this.m_source;
    }
    aggregateResult(aggregate: Result, nextResult: Result): Result{
        return this.m_source;
    }

    visitFile_name(filename:File_nameContext):SFXSource{
        this.m_source.fileName = filename.text;
        return this.m_source;
    }

    visitStat_include_base(ctx:Stat_include_baseContext):SFXSource{
        let source = this.m_source;

        var filename = ctx.file_name().text;
        if(filename != null){
            var inc = new SFXInclude();
            inc.fileName = filename;
            inc.fullName = filename;
            source.addInclude(inc);
        }
        return source;
    }

    visitStat_include_lib(ctx:Stat_include_libContext):SFXSource{
        let source = this.m_source;

        let filepath = ctx.file_path();

        if(filepath!=null){
            var inc= new SFXInclude();
            inc.fullName = filepath.text;
            inc.fileName = filepath.file_name().text;
            inc.library = filepath.file_folder()[0].SFX_IDENTIFIER().text;
            source.addInclude(inc);
        }
        return this.m_source;
    }

    visitTeq_def(ctx:Teq_defContext):SFXSource{
        let source = this.m_source;

        let teq = new SFXTechnique();
        teq.name = ctx.SFX_IDENTIFIER().text;
        return source;
    }

}
