#ifdef XXXX


#define COLOR(c) XXX_#c

#define EPSILON 1e-5
#define MATRIX_VP MATRIX_P * MATRIX_V

#endif


struct V2F{
    vec4 pos;
    vec4 color;
    vec3 normal;
};


void main(float2 pos,fixed3 col){

}

uniform UNIFORM_BASIS{
    //basic region
    vec4 _screenparam_;//[width,height,1/wdith,1/height]
    highp vec4 _time_;//[Time,deltaTime,sinTime,cosTime]
    //camera
    vec4 _camera_pos_;
    mat4 _camera_mtx_view_;
    vec4 _camera_projparam_;//[near,far,1/near,1/far]
    mat4 _camera_mtx_proj_;
    mat4 _camera_mtx_invproj_;
    //Ambient And Fog
    lowp vec4 _ambientcolor_;
    vec4 _fogcolor_;
    vec4 _fogparam_;
};

void vertex_raw(){
    vec4 pos = aPosition;
    pos.a = 1.0;
    pos =  (MATRIX_MVP * pos);
    vPos = aPosition.xy;
    gl_Position = pos;
}


uniform vec4 uColor;

out vec4 fragColor;
void fragment(){
    fragColor = uColor;
}