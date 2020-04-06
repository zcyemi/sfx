import { SFXSource, SFXTool } from "./SFXSource";
import { Utility } from "./Utility";


export interface SFXFile{
    filename:string,
    content:string,
}


class SFXCompileResult{
    public success:boolean;
    public error:string;
    public data:any;

    public sfxSource:SFXSource;

    public static success(data?:any){
        let ret = new SFXCompileResult();
        ret.success= true;
        ret.data = data;
        return ret;
    }
    
    public static error(errmsg:string){
        let ret = new SFXCompileResult();
        ret.success =false;
        ret.error = errmsg;

        return ret;
    }
}

class SFXFileInfo{
    filename:string;
    content:string;
    hash:string;

    public source:SFXSource;

    public isDirty:boolean;

    public constructor(filename:string,content:string){
        this.filename = filename;
        this.content = content;
        this.isDirty= true;
        this.hash= Utility.md5hash(content);
    }

    public updateContent(newcontent:string):boolean{
        if(newcontent.length== this.content.length){
            const newhash = Utility.md5hash(newcontent);
            if(newhash == this.hash){
                return false;
            }
            this.hash = newhash;
        }
        else{
            this.hash = Utility.md5hash(newcontent);
        }
        this.isDirty = true;
        this.content = this.content;

        console.log('parse content',this.filename);

        return true;
    }

    public parseSource():Promise<{sfx:SFXSource,file:SFXFileInfo}>{
        var self =this;
        return SFXTool.parse(this.content).then(val=>{
            self.source = val;
            return {sfx:val,file:self};
        });
    }

}

export type SFXErrorCallabck = (e:Error)=>void;

export class SFXCompilationCtx{
    
    private m_sourceFiles:Map<string,SFXFileInfo> = new Map();
    private m_includeFiles:Map<string,SFXFileInfo> = new Map();

    private m_errorCallback:SFXErrorCallabck[] = [];

    public constructor(){
    }

    public addErrorCallback(cb:SFXErrorCallabck){
        if(cb == null) return;
        this.m_errorCallback.push(cb);
    }

    public removeErrorCallback(cb:SFXErrorCallabck){
        let index = this.m_errorCallback.indexOf(cb);
        if(index >=0) this.m_errorCallback = this.m_errorCallback.splice(index,1);
    }

    private getSourceFile(filename:string):SFXFileInfo{
        return this.m_sourceFiles.get(filename);
    }

    private getIncludeFile(filename:string):SFXFileInfo{
        return this.m_includeFiles.get(filename);
    }

    public updateSource(filename:string,content:string){
        console.log(`update source [${filename}]`);
        var file = this.getSourceFile(filename);
        if(file == null){
            let sfxfile = new SFXFileInfo(filename,content);
            this.m_sourceFiles.set(filename,sfxfile); 
        }
        else{
            file.updateContent(content);
        }
    }

    public removeSource(filename:string){

    }

    public removeInclude(filename:string){
        
    }

    private getSources(){
    }

    public updateSources(files:SFXFile[]){
        if(files == null)return;
        files.forEach(f=>this.updateSource(f.filename,f.content));
    }

    public updateInclude(filename:string,content:string){
        var inc = this.getIncludeFile(filename);
        if(inc == null){
            let sfxfile= new SFXFileInfo(filename,content);
            this.m_includeFiles.set(filename,sfxfile);
        }else{
            inc.updateContent(content);
        }
    }

    public updateIncludes(files:SFXFile[]){
        files.forEach(f=>this.updateInclude(f.filename,f.content));
    }

    public compile():Promise<boolean>{

        return new Promise<boolean>(async (res,rej)=>{
            let tasks:Promise<{sfx:SFXSource,file:SFXFileInfo}>[] = [];
            this.m_sourceFiles.forEach((val,key)=>{
                if(!val.isDirty) return;
                tasks.push(val.parseSource());
            });
            let results = await Promise.all(tasks);

            //check duplicated sfxsources;


            // link all techniques

            res(true);

        })
    }

}