#extension GL_EXT_frag_depth : enable

precision highp float;

#define FRAGMENT
varying float vNoise;

uniform vec3 uColor1; 
uniform vec3 uColor2; 
uniform vec3 uColor3; 

uniform float uColorBands; // Set this to 3.0 or 4.0 for a retro look

void fragment(inout vec4 color, inout vec3 normal, inout float emission)
{
    // 1. CLAMP & QUANTIZE
    // vNoise is 0.0 at the bottom of a wave and 1.0 at the peak.
    float n = clamp(vNoise, 0.0, 1.0);
    
    // Snap 'n' to discrete steps to create pixel-art color bands
    float quantizedN = floor(n * uColorBands) / uColorBands;

    // 2. APPLY COLOR BANDS
    // Band 1: Deep to Shallow transition
    float blend1 = smoothstep(0.0, 0.5, quantizedN);
    vec3 waterBase = mix(uColor1, uColor2, blend1);

    // Band 2: Shallow to Foam/Peak transition
    // Since Gerstner waves are "pinched", uColor3 will only appear 
    // at the very sharp tips of the waves.
    float blend2 = smoothstep(0.0, 2.0, quantizedN);
    vec3 finalColor = mix(waterBase, uColor3, blend2);

    // 3. OUTPUT
    // Set emission to 1.0 if you want the foam (uColor3) to glow slightly
    emission = blend2; 
    
    color = vec4(finalColor, 0.8);
}