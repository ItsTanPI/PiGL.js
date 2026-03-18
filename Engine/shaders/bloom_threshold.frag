precision mediump float;

varying vec2 vTexCoord;
uniform sampler2D uTexture;
uniform float uThreshold;
uniform vec2 uStep; // For simple blur kernel

void main() {
    float r = texture2D(uTexture, vTexCoord).r;
    float g = texture2D(uTexture, vTexCoord).g;
    float b = texture2D(uTexture, vTexCoord).b;
    float a = texture2D(uTexture, vTexCoord).a;

    // Very naive Bloom: check brightness
    float brightness = dot(vec3(r,g,b), vec3(0.2126, 0.7152, 0.0722));
    if(brightness > uThreshold) {
      // Glow pass result
      gl_FragColor = vec4(r,g,b,1.0) * 2.0; // Intensify
    } else {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
