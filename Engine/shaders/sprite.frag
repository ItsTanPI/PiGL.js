precision highp float;

varying highp vec2 vTexCoord;

uniform sampler2D uMainTex;
uniform vec4 uColor;

void main() {
    vec4 texColor = texture2D(uMainTex, vTexCoord);
    
    // Only discard if transparent enough for simplicity?
    // if(texColor.a < 0.1) discard;

    gl_FragColor = texColor * uColor;
}
