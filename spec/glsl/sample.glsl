#define PI 3.1415926
#define PI_2 6.2831852
#define PI_HALF 1.5707963
#define EPSILON 1e-5

uniform UNIFORM_OBJ{
    mat4 _obj2world_;
};
#define MATRIX_M _obj2world_
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
#define TIME _time_
#define SCREEN _screenparam_

#define AMBIENT_COLOR _ambientcolor_

#define MATRIX_V _camera_mtx_view_
#define MATRIX_P _camera_mtx_proj_
#define MATRIX_VP MATRIX_P * MATRIX_V
#define MATRIX_MV MATRIX_V * MATRIX_M
#define MATRIX_IT_MV transpose(inverse(MATRIX_MV))
#define MATRIX_MVP MATRIX_P * MATRIX_MV
#define MATRIX_INV_P _camera_mtx_invproj_
#define MATRIX_WORLD2OBJ inverse(MATRIX_M)
#define CAMERA_POS _camera_pos_
#define CAMERA_NEAR _camera_projparam_.x
#define CAMERA_FAR _camera_projparam_.y
#define CAMERA_NEAR_INV _camera_projparam_.z
#define CAMERA_FAR_INV _camera_projparam_.w
#define SCREEN_WIDTH _screenparam_.x
#define SCREEN_HEIGHT _screenparam_.y
#define SCREEN_WIDTH_INV _screenparam_.z
#define SCREEN_HEIGHT_INV _screenparam_.w
vec3 ObjToWorldDir(in vec3 dir){
    return normalize(dir * mat3(MATRIX_WORLD2OBJ));
}
float SAMPLE_DEPTH_TEXTURE(sampler2D depthtex,vec2 uv){
    return texture(depthtex,uv).r;
}
float DECODE_VIEWDEPTH(float d){
    return 1.0/ ((CAMERA_NEAR_INV - CAMERA_FAR_INV) * d  - CAMERA_NEAR_INV);
}
vec4 ClipToWorld(in vec4 clippoint){
    return inverse(MATRIX_VP) * clippoint;
}
#define saturate(x) clamp(x,0.0,1.0)

vec3 LightModel_Lambert(vec3 lightdir,vec3 lightColor,float atten,vec3 normal,vec3 albedo){
    float diff = max(.0,dot(lightdir,normal));
    return albedo * lightColor * diff * atten;
}


vec3 Sample_4PointLights(vec3 wpos,vec3 normal){
    vec4 toLightX = lightPosX - vec4(wpos.x);
    vec4 toLightY = lightPosY - vec4(wpos.y);
    vec4 toLightZ = lightPosZ - vec4(wpos.z);

    //dot
    vec4 ndotl = vec4(0.0);
    ndotl += toLightX * normal.x;
    ndotl += toLightY * normal.y;
    ndotl += toLightZ * normal.z;
    ndotl = max(vec4(0.0),ndotl);

    //lensq
    vec4 toLightSq = vec4(0.0);
    toLightSq += toLightX * toLightX;
    toLightSq += toLightY * toLightY;
    toLightSq += toLightZ * toLightZ;
    toLightSq = max(toLightSq,vec4(0.000001));

    ndotl *= sqrt(toLightSq);

    vec4 atten = 1.0/ (1.0 + toLightSq * LIGHT_INTENSITY);
    vec4 diff = ndotl * atten;
    
    vec3 col = vec3(0.0);
    col += diff.x * LIGHT_COLOR0.xyz;
    col += diff.y * LIGHT_COLOR1.xyz;
    col += diff.z * LIGHT_COLOR2.xyz;
    col += diff.w * LIGHT_COLOR3.xyz;

    return col;
}



precision mediump float;

struct V2F{
    vec3 pos;
    vec3 normal;
    vec3 wpos;
};
inout V2F v2f;


in vec4 aPosition;
in vec2 aUV;
in vec4 aNormal;

void vertex(){
    vec4 wpos = MATRIX_M * aPosition;
    v2f.pos = wpos.xyz;
    vec4 pos = MATRIX_VP * wpos;
    gl_Position = pos;
    v2f.normal = ObjToWorldDir(aNormal.xyz);
    v2f.wpos = wpos.xyz;
}


out lowp vec4 fragColor;
uniform vec4 uColor;

void fragment(){
    vec3 col = Sample_4PointLights(v2f.wpos,normalize(v2f.normal)) * uColor.xyz;
    vec3 mainCol = LightModel_Lambert(MAIN_LIGHT_POS.xyz,MAIN_LIGHT_COLOR.xyz,MAIN_LIGHT_COLOR.w,v2f.normal,uColor.xyz);
    fragColor = vec4(mainCol + col,1.0);
}