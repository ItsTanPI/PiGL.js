precision mediump float;

varying lowp vec2 vTexCoord;

uniform sampler2D uMainTex;
uniform vec4 uColor;
uniform float uAberration; // Strength of CA effect

void main() {
    float r = texture2D(uMainTex, vTexCoord + vec2(uAberration, 0.0)).r;
    float g = texture2D(uMainTex, vTexCoord).g;
    float b = texture2D(uMainTex, vTexCoord - vec2(uAberration, 0.0)).b;
    float a = texture2D(uMainTex, vTexCoord).a; // Use the alpha of the center

    gl_FragColor = vec4(r, g, b, a) * uColor;
}
