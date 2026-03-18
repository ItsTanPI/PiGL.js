precision mediump float;

varying vec2 vTexCoord;
uniform sampler2D uTexture;
uniform vec2 uResolution;
uniform vec2 uDirection; // (1,0) for H, (0,1) for V

void main() {
    vec2 off1 = vec2(1.3846153846) * uDirection / uResolution;
    vec2 off2 = vec2(3.2307692308) * uDirection / uResolution;

    vec3 color = texture2D(uTexture, vTexCoord).rgb * 0.2270270270;
    color += texture2D(uTexture, vTexCoord + off1).rgb * 0.3162162162;
    color += texture2D(uTexture, vTexCoord - off1).rgb * 0.3162162162;
    color += texture2D(uTexture, vTexCoord + off2).rgb * 0.0702702703;
    color += texture2D(uTexture, vTexCoord - off2).rgb * 0.0702702703;

    gl_FragColor = vec4(color, 1.0);
}
