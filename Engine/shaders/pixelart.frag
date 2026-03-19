precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D uSceneTexture;
uniform sampler2D uNormalTexture;
uniform sampler2D uDepthTexture;

uniform float uPixelSize;
uniform float uColorLevels;
uniform vec2 uResolution;

// Fine-tuned thresholds
const float depthThreshold = 0.05;
const float normalThreshold = 0.5;

// Color modifiers for edges
const float silhouetteDarkening = 0.2; // Very dark for outer edges
const float creaseDarkening = 0.7;     // Subtler darkening for inner corners

void main() {
    // 1. PIXELATION
    vec2 size = uResolution / uPixelSize;
    vec2 uv = floor(vTexCoord * size) / size;
    vec2 texelSize = 1.0 / size;

    // 2. SAMPLING
    float depthCenter = texture2D(uDepthTexture, uv).r;
    vec3 normalCenter = texture2D(uNormalTexture, uv).rgb * 2.0 - 1.0;
    vec4 sceneColor = texture2D(uSceneTexture, uv);

    // Quantize scene color early so edge colors are based on the "flat" art style
    vec3 quantizedColor = floor(sceneColor.rgb * uColorLevels) / uColorLevels;

    float depthEdge = 0.0;
    float normalEdge = 0.0;

    // 3. EDGE DETECTION LOOP
    vec2 offsets[4];
    offsets[0] = vec2(1.0, 0.0);
    offsets[1] = vec2(-1.0, 0.0);
    offsets[2] = vec2(0.0, 1.0);
    offsets[3] = vec2(0.0, -1.0);

    for(int i = 0; i < 4; i++) {
        vec2 neighborUV = uv + offsets[i] * texelSize;
        
        // Depth logic
        float depthNeighbor = texture2D(uDepthTexture, neighborUV).r;
        depthEdge = max(depthEdge, abs(depthCenter - depthNeighbor));

        // Normal logic
        vec3 normalNeighbor = texture2D(uNormalTexture, neighborUV).rgb * 2.0 - 1.0;
        normalEdge = max(normalEdge, (1.0 - dot(normalCenter, normalNeighbor)));
    }

    // 4. ADAPTIVE COLOR LOGIC
    vec3 finalColor = quantizedColor;

    // Is it an internal crease? (Normal-based)
    if (normalEdge > normalThreshold) {
        // Darken the surface color rather than making it black
        finalColor = quantizedColor * creaseDarkening;
    }

    // Is it a silhouette? (Depth-based)
    // We do this second so silhouette (outer) edges override crease (inner) edges
    if (depthEdge > depthThreshold) {
        // Use a much heavier darkening for the outer silhouette
        finalColor = quantizedColor * silhouetteDarkening;
    }

    gl_FragColor = vec4(finalColor, 1.0);
}