precision lowp float;

varying lowp vec2 vTexCoord;
varying lowp float vNoise;
varying vec3 vWorldPos;

uniform vec3 uColor1; 
uniform vec3 uColor2; 
uniform vec3 uColor3; 

void main() {
    float n = clamp(vNoise, 0.0, 1.0);

    // 1. Create a smooth transition for the first blend (Deep to Shallow)
    // This blend happens between 0.0 and 0.6
    float blend1 = smoothstep(0.0, 0.6, n);
    vec3 waterBase = mix(uColor1, uColor2, blend1);

    // 2. Create a smooth transition for the second blend (Shallow to Foam)
    // This blend starts late (at 0.7) and ends at the peak (1.0)
    float blend2 = smoothstep(0.7, 1.0, n);
    vec3 finalColor = mix(waterBase, uColor3, blend2);

    gl_FragColor = vec4(finalColor, 1.0);
}