precision mediump float;

varying vec2 vTexCoord;
uniform sampler2D uTexture;
uniform vec2 uResolution; // e.g., for aspect ratio or resolution dependent effects
uniform float uTime;      // For animations

void main() {
    vec2 uv = vTexCoord;
    
    // Example: Simple texture sampling + chromatic aberration controlled by time
    // vec2 offset = vec2(sin(uTime * 5.0) * 0.005, 0.0);
    // float r = texture2D(uTexture, uv - offset).r;
    // float g = texture2D(uTexture, uv).g;
    // float b = texture2D(uTexture, uv + offset).b;
    // gl_FragColor = vec4(r, g, b, 1.0);

    // Standard Pass-through
    gl_FragColor = texture2D(uTexture, uv);
}
