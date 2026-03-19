precision mediump float;

varying vec2 vTexCoord;
uniform sampler2D uTexture;
uniform sampler2D uOverlay; // Optional outline texture
uniform bool uUseOverlay;   // Toggle overlay blending

void main() {
    vec4 baseColor = texture2D(uTexture, vTexCoord);
    
    if (uUseOverlay) {
        vec4 overlayColor = texture2D(uOverlay, vTexCoord);
        // Simple alpha blend: overlay over base
        gl_FragColor = vec4(mix(baseColor.rgb, overlayColor.rgb, overlayColor.a), baseColor.a);
    } else {
        gl_FragColor = baseColor;
    }
}
