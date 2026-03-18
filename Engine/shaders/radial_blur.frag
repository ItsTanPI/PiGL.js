precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D uTexture;
uniform vec2 uLightPosition; // In UV Space (0-1)
uniform float uExposure;
uniform float uDecay;
uniform float uDensity;
uniform float uWeight;

const int SAMPLES = 64;

void main() {
    vec2 tc = vTexCoord;
    vec2 deltaTexCoord = (tc - uLightPosition);
    deltaTexCoord *= 1.0 / float(SAMPLES) * uDensity;
    
    vec4 color = texture2D(uTexture, tc);
    float illuminationDecay = 1.0;
    
    for(int i=0; i < SAMPLES; i++) {
        tc -= deltaTexCoord;
        vec4 sample = texture2D(uTexture, tc);
        sample *= illuminationDecay * uWeight;
        color += sample;
        illuminationDecay *= uDecay;
    }
    
    gl_FragColor = color * uExposure;
}
