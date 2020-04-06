import * as fs from "fs";
import { SFXCompilationCtx } from './SFXCompilationCtx';
import { SFXFileResolver } from './SFXFileResolver';
import { SFXFileWatcher } from './SFXFileWatcher';
import { Utility } from './Utility';

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


        switch(evt.type){
            case 'change':
            {
                const fstat = fs.statSync(fpath);
                if(!fstat.isFile()) return;
                let file = fs.readFileSync(fpath,"utf8");
                compileCtx.updateSource(fname,file);
            }
            break;
            case 'rename':
            {
                if(fs.existsSync(fpath)){
                    if(fs.statSync(fpath).isDirectory()) return;

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