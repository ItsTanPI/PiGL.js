precision highp float;

varying vec2 vTexCoord;
uniform sampler2D uTexture;
uniform sampler2D uOverlay; // Optional outline texture
uniform float uUseOverlay;   // Toggle overlay blending (float 0.0 or 1.0)

void main() {
    vec4 baseColor = texture2D(uTexture, vTexCoord);
    
    if (uUseOverlay > 0.5) {
        vec4 overlayColor = texture2D(uOverlay, vTexCoord);
        // Simple alpha blend: overlay over base
        gl_FragColor = vec4(mix(baseColor.rgb, overlayColor.rgb, overlayColor.a), baseColor.a);
    } else {
        gl_FragColor = baseColor;
    }
}
