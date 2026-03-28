precision highp float;

uniform int uRenderMode;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vColor;
varying vec2 vTexCoord;

uniform vec4 uColor;
uniform float uRoughness;
uniform sampler2D uMainTex;
uniform float uHasTexture;

void fragment(inout vec4 color, inout vec3 normal, inout float emission);

void main() {
    //gl_FragColor = vec4(1.0);

    vec4 color = uColor;
    if (uHasTexture > 0.1) {
        color *= texture2D(uMainTex, vTexCoord);
    }
    
    vec3 normal = normalize(vNormal);
    float emission = 0.0;
    vec2 uv = vTexCoord;

    #ifdef FRAGMENT
        fragment(color, normal, emission);
    #endif

    if (uRenderMode == 0)
    {
        gl_FragColor = color;
    }
    else if(uRenderMode == 1) // uRoughness
    {
        gl_FragColor = vec4(uRoughness,0.0, 0.0, 1.0 );
    }
    else if (uRenderMode == 2)  // normal
    {
        gl_FragColor = vec4(normal * 0.5 + 0.5, 1.0);
    } 
    else if (uRenderMode == 3) //depth
    {
        float near = 0.1; 
        float far = 1000.0; 
    
        float z = gl_FragCoord.z * 2.0 - 1.0; 
        float linearDepth = (2.0 * near * far) / (far + near - z * (far - near)); 
        
        linearDepth /= far; 

        gl_FragColor = vec4(vec3(linearDepth), 1.0);
    } 
    else if (uRenderMode == 4) //shadow
    {
        gl_FragColor = vec4(gl_FragCoord.z, gl_FragCoord.z, gl_FragCoord.z, 1.0);
    }
    else
    {
        gl_FragColor = vec4(vPosition, 1.0);
    }
}