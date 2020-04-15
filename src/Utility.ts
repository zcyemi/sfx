var md5 = require('md5');
import * as process from 'process';
import * as fs from 'fs';

export class APIResult{
    public success:boolean;
    public error:Error;
    public data?:any;

    public static Success(data?:any){
        let ret = new APIResult();
        ret.success = true;
        ret.data = data;
        return ret;
    }

    public static error(errmsg:string):APIResult{
        let ret = new APIResult();
        ret.success =false;
        ret.error = new Error(errmsg);
        return ret;
    }
}



export class Utility{

    public static arrayAddDistinct<T>(ary:T[],o:T){
        if(ary.indexOf(o) >=0) return;
        ary.push(o);
    }

    public static md5hash(str:string):string{
        return md5(str);
    }

    public static PathCombine(...subpath:string[]):string{
        let pathes = subpath.map(spath=>spath.replace(/[\/\\]*$/,''));

        for(let t=1;t<pathes.length;t++){
            pathes[t] = pathes[t].replace(/^[\/\\]*/,'');
        }
        return Utility.PathFmt(pathes.join('/'));
    }

    public static PathFmt(path:string):string{
        if(path == null) return null;
        return path.replace(/\\/gm,'/');
    }

    public static GetAbsolutePath(path:string,basePath?:string){
        if(basePath != null){
            return Utility.PathCombine(basePath,path);
        }
        else{
            return Utility.PathCombine(process.cwd(),path);
        }
    }

    public static FileRead(fpath:string):string{
        return fs.readFileSync(fpath,"utf8");
    }

    public static FileEntry(dir:string,recursive:boolean = false):string[]{
        let fdir= Utility.PathFmt(dir);
        const dirlen = fdir.length;
        return Utility.FileEntryImpl(dir,recursive).map(f=>f.substr(dirlen).replace(/^\//,''));
    }

    private static FileEntryImpl(dir:string,recursive:boolean = false):string[]{
        let files:string[] = [];
        let dirent:fs.Dirent[] = fs.readdirSync(dir,{withFileTypes:true});
        if(dirent!=null && dirent.length>0){
            dirent.forEach(d=>{
                if(d.isDirectory()){
                    if(recursive){
                        let subfiles = Utility.FileEntryImpl(Utility.PathCombine(dir,d.name),recursive);
                        if(subfiles.length >0){
                            files.push(...subfiles);
                        }
                    }
                }
                else if(d.isFile()){
                    files.push(Utility.PathCombine(dir,d.name));
                }
            })
        }
        return files;
    }

    public static ArrayIntersect<T>(a:T[],b:T[]):T[]{

        if(a == null || a.length == 0)return [];
        if(b == null || b.length == 0) return [];

        let ret = [];

        a.forEach(t=>{
            if(b.includes(t)){
                ret.push(t);
            }
        });
        return ret;
    }

    public static clone(item:any) {
        if (!item) { return item; } // null, undefined values check
    
        var types = [ Number, String, Boolean ], 
            result;
    
        // normalizing primitives if someone did new String('aaa'), or new Number('444');
        types.forEach(function(type) {
            if (item instanceof type) {
                result = type( item );
            }
        });
    
        if (typeof result == "undefined") {
            if (Object.prototype.toString.call( item ) === "[object Array]") {
                result = [];
                item.forEach(function(child, index, array) { 
                    result[index] = Utility.clone( child );
                });
            } else if (typeof item == "object") {
                // testing that this is DOM
                if (item.nodeType && typeof item.cloneNode == "function") {
                    result = item.cloneNode( true );    
                } else if (!item.prototype) { // check that this is a literal
                    if (item instanceof Date) {
                        result = new Date(item);
                    } else {
                        // it is an object literal
                        result = {};
                        for (var i in item) {
                            result[i] = Utility.clone( item[i] );
                        }
                    }
                } else {
                    // depending what you would like here,
                    // just keep the reference, or create new object
                    if (false && item.constructor) {
                        // would not advice to do that, reason? Read below
                        result = new item.constructor();
                    } else {
                        result = item;
                    }
                }
            } else {
                result = item;
            }
        }
    
        return result;
    }
}


export class Delayter<T>{


    private m_data:T[] = [];

    private m_comparer:(a:T,b:T)=>boolean;
    
    private m_deltaTime:number;
    private m_timeout:any;

    public onDataChange:(data:T[])=>void;

    public constructor(deltaTime:number = 100,comparer:(a:T,b:T)=>boolean){
        this.m_deltaTime = deltaTime;
        this.m_comparer = comparer == null ? (a,b)=>{return a==b} : comparer;
    }

    public emit(d:T){
        if(d == null) return;
        const comparer = this.m_comparer;
        let data = this.m_data;
        for(let t=0;t<data.length;t++){
            if(comparer(d,data[t])){
                return;
            }
        }
        this.m_data.push(d);

        if(this.m_timeout !=null){
            clearTimeout(this.m_timeout);
        }

        this.m_timeout = setTimeout(this.onTimeOut.bind(this), this.m_deltaTime);
    }

    private onTimeOut(){
        const mdata= this.m_data;
        this.m_data = [];
        if(this.onDataChange!=null){
            this.onDataChange(mdata);
        }
    }
}