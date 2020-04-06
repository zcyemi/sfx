import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import * as fs from "fs";
import { GLSLLexer } from './glsl/GLSLLexer';
import { GLSLParser } from './glsl/GLSLParser';
import { GLSLFormatter } from './GLSLFormatter';
import { SFXLexer } from './sfx/SFXLexer';
import { SFXParser } from './sfx/SFXParser';
import { SFXSourceVisotor } from './SFXSourceVisotor';
import { SFXFileWatcher } from './SFXFileWatcher';
import { SFXCompilationCtx } from './SFXCompilationCtx';
import { Utility } from './Utility';
import { SFXFileResolver } from './SFXFileResolver';




const watchPath = 'tests';

const folderPath = Utility.GetAbsolutePath(watchPath)

var compileCtx = new SFXCompilationCtx();
let res = new SFXFileResolver(folderPath);
res.updateCompileCtx(compileCtx);

compileCtx.compile().then((r)=>{});

let sfxWatcher = new SFXFileWatcher(folderPath);


sfxWatcher.onFileChange = async (data)=>{
    if(data == null || data.length ==0) return;


    data.forEach(evt=>{
        const fname = evt.fileName;
        const fpath = Utility.PathCombine(folderPath,fname);
        const fstat = fs.statSync(fpath);
        
        if(!fstat.isFile) return;


        switch(evt.type){
            case 'change':
            {
                let file = fs.readFileSync(fpath,"utf8");
                compileCtx.updateSource(fname,file);
            }
            break;
            case 'rename':
            {
                if(fs.existsSync(fpath)){
                    let file = fs.readFileSync(fpath,"utf8");
                    compileCtx.updateSource(fname,file);
                }
                else{
                    compileCtx.removeSource(fname);
                }
            }
            break;
        }

    });

    let result = await compileCtx.compile();
}