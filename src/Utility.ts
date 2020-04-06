var md5 = require('md5');
import * as process from 'process';

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

        return pathes.join('/').replace(/\\/gm,'/');
    }
    public static GetAbsolutePath(path:string,basePath?:string){
        if(basePath != null){
            return Utility.PathCombine(basePath,path);
        }
        else{
            return Utility.PathCombine(process.cwd(),path);
        }
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