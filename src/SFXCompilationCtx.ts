import { SFXSource, SFXTool, SFXTechnique } from "./SFXSource";
import { Utility, APIResultT } from "./Utility";


export interface SFXFile{
    filename:string,
    content:string,
}


class SFXCompileResult{
    public success:boolean;
    public error:string;
    public fileName:string;


    public static success(source:SFXSource){
        let ret = new SFXCompileResult();
        ret.success= true;
        ret.fileName = source.filePathName;
        return ret;
    }
    
    public static error(errmsg:string,source:SFXSource){
        let ret = new SFXCompileResult();
        ret.success =false;
        ret.error = errmsg;
        ret.fileName = source.filePathName;
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
        newcontent = newcontent.replace(/[\r]/gm,'');
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
        this.content = newcontent;

        return true;
    }

    public async parseSource():Promise<APIResultT<{sfx:SFXSource,file:SFXFileInfo}>>{
        var self =this;

        let result = await SFXTool.parseSFX(this.content,this.filename);

        if(result.success){
            self.source = result.data;
            self.source.filePathName = self.filename;
            self.isDirty = false;
            return APIResultT.Success({sfx:self.source,file:self});
        }
        else{
            return APIResultT.Error(result.error,{sfx:null,file:self});
        }
    }

}

export type SFXErrorCallabck = (e:Error)=>void;

export class SFXShaderTechnique extends SFXTechnique{
    public glsl_vs:string;
    public glsl_ps:string;
    public technique:SFXTechnique;
    public sfxName:string;
}

export class SFXCompilationCtxInitCfg{
    verbose:boolean = false;
}

export class SFXCompilationCtx{
    
    private m_sourceFiles:Map<string,SFXFileInfo> = new Map();
    private m_includeFiles:Map<string,SFXFileInfo> = new Map();

    private m_sourceSFX:Map<string,SFXSource> = new Map();

    private m_errorCallback:SFXErrorCallabck[] = [];

    public techniques:Map<string,SFXShaderTechnique> = new Map();

    public config:SFXCompilationCtxInitCfg;

    public constructor(cfg?:SFXCompilationCtxInitCfg){
        this.config = cfg == null? new SFXCompilationCtxInitCfg() : cfg;
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

    public getTechniquesBySFXname(sfxname:string):SFXShaderTechnique[]{
        return [...this.techniques.values()].filter(t=>t.sfxName == sfxname);
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

    public compile():Promise<APIResultT<SFXCompileResult[]>>{

        return new Promise(async (res,rej)=>{
            let tasks:Promise<APIResultT<{sfx:SFXSource,file:SFXFileInfo}>>[] = [];
            this.m_sourceFiles.forEach((val,key)=>{
                if(!val.isDirty) return;
                tasks.push(val.parseSource());
            });

            let results:APIResultT<{sfx:SFXSource,file:SFXFileInfo}>[] = null;
            try{
                results = await Promise.all(tasks);
            }
            catch(e){
                if(this.config.verbose){
                    console.error(e);
                }
                res(APIResultT.Error(e))
                return;
            }

            // update sfx deps
            let returnResult:SFXCompileResult[] = [];

            let changedSFXIndex:string[] = [];
            let changedSFXsource:SFXSource[] =[];


            results.forEach(r=>{

                if(!r.success){
                    let sfxcr = new SFXCompileResult();
                    let err = r.error;
                    if(err == null) {
                        err = 'unknown error';
                    }
                    else{
                        err = err.toString();
                    }
                    sfxcr.error = err;
                    sfxcr.fileName = r.data.file.filename;
                    sfxcr.success = false;
                    returnResult.push(sfxcr);
                }
                else{
                    changedSFXsource.push(r.data.sfx);
                }
            })

            changedSFXsource.map(s=>{
                let fname = s.fileName;
                changedSFXIndex.push(fname);
                this.m_sourceSFX.set(fname,s);
            });
            
            //measure all changed source;
            var allsfx:Map<string,SFXSource[]> = new Map();
            var processDep = (fname:string,sfx:SFXSource)=>{
                let ary = allsfx.get(fname);
                if(ary == null){
                    ary = [];
                    allsfx.set(fname,ary);
                }

                if(ary.includes(sfx)) return;
                ary.push(sfx);
            };

            this.m_sourceSFX.forEach(sfx=>{
                if(sfx.includes == null) return;
                sfx.includes.forEach(inc=>{
                    let incfname = inc.fullName;
                    processDep(incfname,sfx);
                });
            });

            let dirtySFX:SFXSource[] = changedSFXsource.concat();

            let touchedFname:string[] = [];
            
            dirtySFX.forEach(sfx=>{
                let fname = sfx.fileName;
                if(touchedFname.includes(fname)) return;
                touchedFname.push(fname);

                let deps = allsfx.get(fname);
                if(deps == null) return;
                deps.map(t=>t.fileName).forEach(t=>{
                    if(!touchedFname.includes(t)){
                        touchedFname.push(t);
                    }
                })
            });
            // link all techniques

            const techniques = this.techniques;

            let techTasks:Promise<SFXCompileResult>[] = touchedFname.map(sfxname=>{

                return new Promise(async (res,rej)=>{

                    let sfx = this.m_sourceSFX.get(sfxname);
                
                    let sfxTechniques:APIResultT<SFXShaderTechnique[]> = null;
                    try{
                        sfxTechniques = await SFXTool.parseTechnique(sfx,this.m_sourceSFX,this.config.verbose);
                    }catch(e){
                        if(this.config.verbose){
                            console.error(e);
                        }
                        res(SFXCompileResult.error(e,sfx));
                        return;
                    }

                    if(!sfxTechniques.success){
                        res(SFXCompileResult.error(sfxTechniques.error.toString(),sfx))
                        return;
                    }

                    let tdata = sfxTechniques.data;
                    if(tdata!=null){
                        tdata.forEach(tech=>{
                            techniques.set(tech.name,tech);
                        });
                    }
                    res(SFXCompileResult.success(sfx));
                });
            })

            let result = await Promise.all(techTasks);
            returnResult.push(...result);


            let hasError = false;
            let errMsg:string[] = [];

            returnResult.forEach(r=>{
                if(!r.success){
                    hasError =true;
                    errMsg.push(r.error);
                }
            })

            if(hasError){
                res(APIResultT.Error(errMsg.join('\n'),returnResult));
            }
            else{
                res(APIResultT.Success(returnResult));
            }
        })
    }

}