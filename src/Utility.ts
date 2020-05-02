var md5 = require('md5');
import * as process from 'process';
import * as fs from 'fs';

export class APIResult{
    public success:boolean;
    public error:Error |string;
    public data?:any;

    public static Success(data?:any){
        let ret = new APIResult();
        ret.success = true;
        ret.data = data;
        return ret;
    }

    public static Error(err:string|Error):APIResult{
        let ret = new APIResult();
        ret.success =false;
        ret.error = err;
        return ret;
    }
}


export class APIResultT<T> extends APIResult{
    public data?:T;

    public static Success<T>(data?:T){
        let ret = new APIResultT<T>();
        ret.success = true;
        ret.data = data;
        return ret;
    }

    
    public static Error<T>(err:Error|string,data?:T):APIResultT<T>{
        let ret = new APIResultT<T>();
        ret.success =false;
        ret.data = data;
        ret.error = err;
        return ret;
    }
}



export class Utility{

    public static arrayAddDistinct<T>(ary:T[],o:T):boolean{
        if(ary.indexOf(o) >=0) return false;
        ary.push(o);
        return true;
    }

    public static md5hash(str:string):string{
        return md5(str);
    }

    public static ArrayInsert<T>(ary:T[],obj:T){
        if(obj == null) return;
        if(ary.indexOf(obj) >=0) return;
        ary.push(obj);
    }

    public static ArrayConcatDistainct<T>(ary:T[],b:T[]){
        if(b == null || b.length== 0) return;
        b.forEach(obj=>{
            if(obj == null) return;
            if(ary.indexOf(obj) >=0) return;
            ary.push(obj);
        })
    }

    public static ArrayDistinct<T>(ary:T[]):T[]{
        if(ary == null) return null;
        if(ary.length <=1) return ary.concat([]);

        let ret = ary.sort();

        let temp:T = ary[0];
        let writeIndex = 1;
        const len = ret.length;

        for(let t=1;t<len;t++){
            const val = ary[t];
            if(val != temp){
                temp = val;
                ary[writeIndex] = val;
                writeIndex ++;
            }
        }
        return ret.slice(0,writeIndex);
    }

    public static ResolveDeps(startItems:string[],allItems:string[],funcGetDep:(item:string)=>string[]):string[]{
        let depMap:Map<string,string[]> = new Map();
        allItems.forEach(item=>{
            let itemDep = funcGetDep(item);
            if(itemDep == null || itemDep.length == 0)return;
            depMap.set(item,itemDep);
        })


        let touchedItems:string[] = startItems.concat();
        let pendingItems:string[] = startItems.concat();
        let workingItems:string[] = [];

        while(pendingItems.length>0){
            pendingItems.forEach(t=>{
                let ary = depMap.get(t);
                if(ary == null) return;
                ary.forEach(dep=>{
                    if(touchedItems.includes(dep)) return;
                    workingItems.push(dep);
                })
            })
            Utility.ArrayConcatDistainct(touchedItems,workingItems);
            pendingItems = workingItems;
            workingItems = [];
        }
        return touchedItems;
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

    public static ArrayExclude<T>(a:T[],b:T[]):T[]{
        if(a == null || a.length == 0) return [];
        if(b == null || b.length == 0) return a.concat([]);

        let ret = [];
        a.forEach(t=>{
            if(!b.includes(t)){
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
                        result = Object.create(Object.getPrototypeOf(item));
                        for (var i in item) {
                            result[i] = Utility.clone( item[i] );
                        }

                    }
                } else {
                    result = item;
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