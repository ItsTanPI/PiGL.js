precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D uDepthTexture;
uniform mat4 uInverseViewProjection;
uniform vec3 uCameraPos;
uniform vec3 uLightDir;

uniform vec3 uTopColor;
uniform vec3 uBottomColor;
uniform vec3 uSunColor;

void main() {
    float depth = texture2D(uDepthTexture, vTexCoord).r;
    
    // Geometry exists (linear depth < 1.0 means closer than far plane)
    // Adjust threshold based on your far plane logic. 
    // If linear depth is used, 1.0 = Far Plane.
    if (depth < 0.99) {
        discard;
    }

    // Reconstruct World Position on Far Plane
    // NDC Z = 1.0 (Far)
    vec4 clipPos = vec4(vTexCoord * 2.0 - 1.0, 1.0, 1.0);
    vec4 worldPosH = uInverseViewProjection * clipPos;
    vec3 worldPos = worldPosH.xyz / worldPosH.w;

    // Ray Direction
    vec3 dir = normalize(worldPos - uCameraPos);

    // Sun
    float sun = max(dot(dir, normalize(uLightDir)), 0.0);
    float sunDisk = pow(sun, 1000.0) * 2.0; // Sharp disk
    float sunGlow = pow(sun, 4.0) * 0.5;    // Soft Glow

    // Gradient
    float t = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0); // -1..1 -> 0..1
    vec3 skyGradient = mix(uBottomColor, uTopColor, t);

    // Final Color
    vec3 color = skyGradient + uSunColor * (sunDisk + sunGlow);
    
    gl_FragColor = vec4(color, 1.0);
}
