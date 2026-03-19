precision highp float;

varying vec2 vTexCoord;

uniform sampler2D uTexture1;
uniform sampler2D uTexture2;

void main() {
    vec4 c1 = texture2D(uTexture1, vTexCoord);
    vec4 c2 = texture2D(uTexture2, vTexCoord);
    
    // Debug: If c1 (scene) is black, show Red. If c2 (depth) is black, show Blue.
    // Normalized depth should not be black everywhere.
    
    // Just multiply them
    gl_FragColor = c1 + c2;
}
