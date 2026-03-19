precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D uSceneTexture;
uniform sampler2D uNormalTexture;
uniform sampler2D uDepthTexture;

uniform float uPixelSize;    // e.g. 4.0
uniform float uColorLevels;  // e.g. 8.0
uniform vec2 uResolution;

// Thresholds for edge detection
const float depthThreshold = 0.2;
const float normalThreshold = 0.7;

void main() {
    // 1. PIXELATION
    // Determine the size of the "virtual" low-res screen
    vec2 size = uResolution / uPixelSize;
    vec2 uv = floor(vTexCoord * size) / size;
    
    // The size of one "pixel" in UV space
    vec2 texelSize = 1.0 / size;

    // 2. SAMPLING & EDGE DETECTION (SOBEL)
    // We sample neighbors to calculate gradients in depth and normals
    float depthCenter = texture2D(uDepthTexture, uv).r;
    vec3 normalCenter = texture2D(uNormalTexture, uv).rgb * 2.0 - 1.0;

    float depthEdge = 0.0;
    float normalEdge = 0.0;

    // Check 4 adjacent neighbors for edges
    vec2 offsets[4];
    offsets[0] = vec2(1.0, 0.0);
    offsets[1] = vec2(-1.0, 0.0);
    offsets[2] = vec2(0.0, 1.0);
    offsets[3] = vec2(0.0, -1.0);

    for(int i = 0; i < 4; i++) {
        vec2 neighborUV = uv + offsets[i] * texelSize;
        
        // Depth Edge: Difference in depth
        float depthNeighbor = texture2D(uDepthTexture, neighborUV).r;
        depthEdge += abs(depthCenter - depthNeighbor);

        // Normal Edge: Dot product difference (angle between surfaces)
        vec3 normalNeighbor = texture2D(uNormalTexture, neighborUV).rgb * 2.0 - 1.0;
        normalEdge += (1.0 - dot(normalCenter, normalNeighbor));
    }

    // Determine if this pixel is an edge
    float edge = 0.0;
    if (depthEdge > depthThreshold || normalEdge > normalThreshold) {
        edge = 1.0;
    }

    // 3. COLOR QUANTIZATION (POSTERIZATION)
    vec4 sceneColor = texture2D(uSceneTexture, uv);
    // Apply posterization to the RGB channels
    sceneColor.rgb = floor(sceneColor.rgb * uColorLevels) / uColorLevels;

    // 4. FINAL COMPOSITE
    // If it's an edge, darken it (outline). Otherwise, use quantized color.
    vec3 finalColor = sceneColor.rgb * (1.0 - edge);
    
    gl_FragColor = vec4(finalColor, 1.0);
}