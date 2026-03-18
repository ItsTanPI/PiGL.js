precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D uMainTex;
uniform vec4 uColor;

void main() {
    float alpha = texture2D(uMainTex, vTexCoord).a;
    if (alpha < 0.1) discard;
    gl_FragColor = uColor;
}
