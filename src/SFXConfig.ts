


export class SFXConfig{

    private static s_glslang_path:string;
    private static s_glslang_enable:boolean = false;

    public static get GLSLANG_ENABLE():boolean{return SFXConfig.s_glslang_enable;}
    public static get GLSLANG_PATH():string{ return SFXConfig.s_glslang_path;}

    public static set GLSLANG_PATH(path:string){
        if(path == null || path == ''){
            SFXConfig.s_glslang_enable = false;
            SFXConfig.s_glslang_path = null;
            return;
        }
        SFXConfig.s_glslang_enable = true;
        SFXConfig.s_glslang_path = path;
    }

    
}