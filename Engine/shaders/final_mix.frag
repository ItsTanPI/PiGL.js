precision mediump float;

varying vec2 vTexCoord;
uniform sampler2D uTexture;
uniform sampler2D uBloom;
uniform float uBloomIntensity;
uniform float uChromaticAberration;

void main() {
    vec2 uv = vTexCoord;
    
    // Original Scene
    // vec4 scene = texture2D(uTexture, uv);

    // Apply Screen-Space Chromatic Aberration to final pass on Scene Color
    float r = texture2D(uTexture, uv + vec2(-uChromaticAberration, 0.0)).r;
    float g = texture2D(uTexture, uv).g;
    float b = texture2D(uTexture, uv + vec2(uChromaticAberration, 0.0)).b;
    float a = texture2D(uTexture, uv).a;
    vec4 scene = vec4(r, g, b, 1.0); // Override alpha for screen

    // Sample Bloom with lower alpha
    vec4 bloom = texture2D(uBloom, uv);

    // Additive Blending
    vec3 result = scene.rgb + (bloom.rgb * uBloomIntensity);

    // Simple Tone Mapping (Reinhard)
    result = result / (result + vec3(1.0));
    // Gamma correction
    result = pow(result, vec3(1.0/2.2));

    gl_FragColor = vec4(result, 1.0);
}
