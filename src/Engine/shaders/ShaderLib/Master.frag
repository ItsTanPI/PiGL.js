#version 300 es
precision highp float;

uniform int uRenderMode;
in vec3 vNormal;
in vec3 vPosition;
in vec3 vColor;
in vec2 vTexCoord;

uniform vec4 uColor;
uniform float uRoughness;
uniform sampler2D uMainTex;
uniform float uHasTexture;

out vec4 FragColor;

void fragment(inout vec4 color, inout vec3 normal, inout float emission);

void main() {
    vec4 color = vec4( 1.0);

    if (uHasTexture > 0.1) {
        color *= texture(uMainTex, vTexCoord);
    }
    else
    {
        color = vec4(vColor, 1.0);
    }
    
    // Flat shading: compute face normal from screen-space derivatives
    vec3 fdx = dFdx(vPosition);
    vec3 fdy = dFdy(vPosition);
    vec3 normal = normalize(cross(fdx, fdy));
    
    float emission = 0.0;
    vec2 uv = vTexCoord;

    #ifdef FRAGMENT
        fragment(color, normal, emission);
    #endif

    if (uRenderMode == 0)
    {
        FragColor = vec4(color.rgb, uRoughness);
    }
    else if (uRenderMode == 1) // Normal + depth
    {
        float near = 0.1; 
        float far = 100.0; 
    
        float z = gl_FragCoord.z * 2.0 - 1.0; 
        float linearDepth = (2.0 * near * far) / (far + near - z * (far - near)); 
        
        linearDepth /= far; 

        FragColor = vec4(normal * 0.5 + 0.5, linearDepth);
    } 
    else
    {
        FragColor = vec4(vPosition, 1.0);
    }
}