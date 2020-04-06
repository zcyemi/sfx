import * as fs from "fs";
import { type } from "os";
import { Delayter } from "./Utility";


export type SFXFileEvt = {type:string,fileName:string};

export class SFXFileWatcher{

    private m_fsWatcher:fs.FSWatcher;

    public onFileChange:(data:SFXFileEvt[])=>void;

    private m_delayter: Delayter<SFXFileEvt> = new Delayter(100,(a,b)=>{
        return a.type == b.type && a.fileName == b.fileName;
    });

    public constructor(folder:string){

        this.m_delayter.onDataChange = this.onDataChange.bind(this);
        this.m_fsWatcher = fs.watch(folder,{recursive:true},this.onFileEvt.bind(this));
    }

    private onDataChange(e:SFXFileEvt[]){
        if(this.onFileChange!=null){
            this.onFileChange(e);
        }
    }

    public release(){
        this.m_fsWatcher.close();
        this.m_fsWatcher = null;
    }

    private onFileEvt(evtType:string,fileName:string){
        this.m_delayter.emit({type:evtType,fileName:fileName});
    }
}