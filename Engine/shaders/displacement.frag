precision highp float; // Upgraded to mediump to prevent precision artifacts

varying vec2 vTexCoord;
varying float vNoise;
varying vec3 vWorldPos;

uniform vec3 uColor1; 
uniform vec3 uColor2; 
uniform vec3 uColor3; 

void main() {
    // Step 1: Clamp noise to ensure it stays in 0.0 - 1.0 range
    float n = clamp(vNoise, 0.0, 1.0);

    // Step 2: Use smooth interpolation instead of if/else
    // This creates a smooth transition across all three colors
    vec3 col1to2 = mix(uColor1, uColor2, smoothstep(0.0, 0.5, n));
    vec3 finalColor = mix(col1to2, uColor3, smoothstep(0.5, 1.0, n));

    gl_FragColor = vec4(finalColor, 1.0);
}