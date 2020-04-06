import { Utility } from "./Utility";
import { SFXSource } from "./SFXSource";


export interface SFXFile{
    filename:string,
    content:string,
}


class SFXCompileResult{
    public success:boolean;
    public error:string;
    public data:any;

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
    public isDirty:boolean;

    public sfxSource:SFXSource;

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

        console.log('update content',this.filename);

        return true;
    }


    public parseSource():Promise<SFXSource>{
        return new Promise(res=>{
            res(null);
        });
    }

}

export type SFXErrorCallabck = (e:Error)=>void;

export class SFXCompilationCtx{
    
    private m_sourceFiles:{[key:string]:SFXFileInfo} = {};
    private m_includeFiles:{[key:string]:SFXFileInfo} = {};

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
        return this.m_sourceFiles[filename];
    }

    private getIncludeFile(filename:string):SFXFileInfo{
        return this.m_includeFiles[filename];
    }

    public updateSource(filename:string,content:string){
        var file = this.getSourceFile(filename);
        if(file == null){
            let sfxfile = new SFXFileInfo(filename,content);
            this.m_sourceFiles[filename] = sfxfile;
        }
        else{
            file.updateContent(content);
        }
    }

    public removeSource(filename:string){

    }

    public removeInclude(filename:string){
        
    }

    public updateSources(files:SFXFile[]){
        files.forEach(f=>this.updateSource(f.filename,f.content));
    }

    public updateInclude(filename:string,content:string){
        var inc = this.getIncludeFile(filename);
        if(inc == null){
            let sfxfile= new SFXFileInfo(filename,content);
            this.m_includeFiles[filename] = sfxfile;
        }else{
            inc.updateContent(content);
        }
    }

    public updateIncludes(files:SFXFile[]){
        files.forEach(f=>this.updateInclude(f.filename,f.content));
    }

    public compile(){

    }

}