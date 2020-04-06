import { Utility } from "./Utility";
import { SFXCompilationCtx, SFXFile } from "./SFXCompilationCtx";

export class SFXFileResolver{


    public sourceDir:string;

    public constructor(sourceDir:string){
        this.sourceDir = sourceDir;
    }

    public updateCompileCtx(compileCtx:SFXCompilationCtx){

        let files = Utility.FileEntry(this.sourceDir,true);
        console.log(files);

        let sfxfiles:SFXFile[] = files.map(f=>{
            let content = Utility.FileRead(Utility.PathCombine(this.sourceDir,f));
            return {filename: f,content:content};
        });

        compileCtx.updateSources(sfxfiles);
           
    }
}