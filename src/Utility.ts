

export class Utility{

    public static arrayAddDistinct<T>(ary:T[],o:T){
        if(ary.indexOf(o) >=0) return;
        ary.push(o);
    }
}