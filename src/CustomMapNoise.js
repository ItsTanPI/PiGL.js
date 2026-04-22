/*! CONTINENT - Optimized Noise Generator */
/* Built with bundled NoiseLib - Automatically loaded from noise-lib.js */

/**
 * Noise Library - Comprehensive noise generation functions
 * Organized by region with self-contained sub-functions
 * All functions follow signature: (x, y, z, seed, params) => [0, 1]
 */

const NoiseLib = (function() {
  'use strict';

  // ============================================================================
  // REGION: Permutation & Hash Functions (Shared Utilities)
  // ============================================================================
  
  const permCache = {};
  
  /**
   * Generate seeded permutation table for Perlin noise
   */
  function seededPerm(seed) {
    const key = 'p_' + seed;
    if (permCache[key]) return permCache[key];
    
    let s = seed ^ 0x12345678;
    function rand() {
      s = ((s * 1664525 + 1013904223) >>> 0);
      return s / 4294967296;
    }
    
    const base = new Array(256);
    for (let i = 0; i < 256; i++) base[i] = i;
    
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      const t = base[i];
      base[i] = base[j];
      base[j] = t;
    }
    
    const p = new Uint8Array(512);
    for (let i = 0; i < 512; i++) p[i] = base[i & 255];
    permCache[key] = p;
    return p;
  }

  /**
   * Hash function for integer coordinates (used in Voronoi/Worley)
   */
  function hash(x, y, seed) {
    let h = seed;
    h ^= (x * 73856093) ^ (y * 19349663);
    h = (h ^ (h >>> 16)) * 0x85ebca6b;
    h = h ^ (h >>> 13);
    return h;
  }

  /**
   * Pseudo-random number from hash
   */
  function hashFloat(h) {
    return (h & 0x7fffffff) / 2147483647;
  }

  // ============================================================================
  // REGION: Perlin Noise & Variations
  // ============================================================================

  /**
   * Fade function for smooth interpolation
   */
  function fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  /**
   * Linear interpolation
   */
  function lerp(a, b, t) {
    return a + t * (b - a);
  }

  /**
   * Perlin gradient function
   */
  function grad(h, x, y, z) {
    h &= 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : (h === 12 || h === 14 ? x : z);
    return ((h & 1) ? -u : u) + ((h & 2) ? -v : v);
  }

  /**
   * 3D Perlin noise function
   */
  function pnoise(P, x, y, z) {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);
    
    const u = fade(x);
    const v = fade(y);
    const w = fade(z);
    const A = P[X] + Y;
    const B = P[X + 1] + Y;
    const AA = P[A] + Z;
    const AB = P[A + 1] + Z;
    const BA = P[B] + Z;
    const BB = P[B + 1] + Z;
    
    return lerp(
      lerp(
        lerp(grad(P[AA], x, y, z), grad(P[BA], x - 1, y, z), u),
        lerp(grad(P[AB], x, y - 1, z), grad(P[BB], x - 1, y - 1, z), u),
        v
      ),
      lerp(
        lerp(grad(P[AA + 1], x, y, z - 1), grad(P[BA + 1], x - 1, y, z - 1), u),
        lerp(grad(P[AB + 1], x, y - 1, z - 1), grad(P[BB + 1], x - 1, y - 1, z - 1), u),
        v
      ),
      w
    ) * 0.5 + 0.5;
  }

  /**
   * Fractional Brownian Motion (fBm) - base for Perlin
   */
  function fbm(P, x, y, z, octaves, falloff) {
    let n = 0;
    let a = 1;
    let f = 1;
    let mx = 0;
    for (let i = 0; i < octaves; i++) {
      n += pnoise(P, x * f, y * f, z) * a;
      mx += a;
      a *= falloff;
      f *= 2;
    }
    return n / mx;
  }

  /**
   * Standard Perlin Noise
   */
  function perlin(x, y, z, seed, params = { scale: 60, octaves: 4, falloff: 0.5, contrast: 1, threshold: 0 }) {
    const { scale = 60, octaves = 4, falloff = 0.5 } = params;
    const P = seededPerm(seed);
    const nx = x / scale;
    const ny = y / scale;
    const n = fbm(P, nx, ny, z, octaves, falloff);
    return applyPost(n, params);
  }

  /**
   * Ridged Perlin - Creates ridge-like patterns
   */
  function ridged(x, y, z, seed, params = { scale: 60, octaves: 4, falloff: 0.5, contrast: 1, threshold: 0 }) {
    const { scale = 60, octaves = 4, falloff = 0.5 } = params;
    const P = seededPerm(seed);
    const nx = x / scale;
    const ny = y / scale;
    
    let n = 0, a = 1, f = 1, mx = 0;
    for (let i = 0; i < octaves; i++) {
      const p = pnoise(P, nx * f, ny * f, z);
      n += (1 - Math.abs(p * 2 - 1)) * a;
      mx += a;
      a *= falloff;
      f *= 2;
    }
    return applyPost(n / mx, params);
  }

  /**
   * Billowy Perlin - Creates cloud-like patterns
   */
  function billowy(x, y, z, seed, params = { scale: 60, octaves: 4, falloff: 0.5, contrast: 1, threshold: 0 }) {
    const { scale = 60, octaves = 4, falloff = 0.5 } = params;
    const P = seededPerm(seed);
    const nx = x / scale;
    const ny = y / scale;
    
    let n = 0, a = 1, f = 1, mx = 0;
    for (let i = 0; i < octaves; i++) {
      const p = pnoise(P, nx * f, ny * f, z);
      n += Math.abs(p * 2 - 1) * a;
      mx += a;
      a *= falloff;
      f *= 2;
    }
    return applyPost(n / mx, params);
  }

  // ============================================================================
// REGION: Fixed Voronoi & Cellular Noise
// ============================================================================

/**
 * Internal Helper: Hash function to get a "random" 2D point for a cell
 * Returns [x, y] offsets between 0 and 1
 */
function _getHashPoint(cx, cy, seed, angle = 0) {
  const h1 = Math.sin(cx * 127.1 + cy * 311.7 + seed * 41.3) * 43758.5453;
  const h2 = Math.sin(cx * 269.5 + cy * 183.3 + seed * 41.3) * 43758.5453;
  let px = h1 - Math.floor(h1);
  let py = h2 - Math.floor(h2);

  const r = _rotate2D(px - 0.5, py - 0.5, angle);
  px = r.x + 0.5;
  py = r.y + 0.5;

  return [px, py];
}

/**
 * Core Cellular Calculation
 * Returns { d1: closest, d2: second_closest }
 */
function _calculateCellular(x, y, scale, seed, angleMax = 0) {
  const cx = Math.floor(x / scale);
  const cy = Math.floor(y / scale);
  const lx = x / scale - cx; // Local x (0 to 1)
  const ly = y / scale - cy; // Local y (0 to 1)

  let d1 = 2.0; // F1
  let d2 = 2.0; // F2
  let c1x = cx;
  let c1y = cy;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const ncx = cx + i;
      const ncy = cy + j;
      const point = _getHashPoint(ncx, ncy, seed, angleMax);
      
      // Calculate distance from local position to the neighbor's point
      // We add the neighbor offset (i, j) to the random point position
      const dx = i + point[0] - lx;
      const dy = j + point[1] - ly;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < d1) {
        d2 = d1;
        d1 = dist;
        c1x = ncx;
        c1y = ncy;
      } else if (dist < d2) {
        d2 = dist;
      }
    }
  }
  return { d1, d2, cx: c1x, cy: c1y };
}

/**
 * Rotate 2D point by degrees
 */
function _rotate2D(x, y, angleDeg) {
  if (!angleDeg) return { x, y };
  const rad = (angleDeg * Math.PI) / 180;
  const c = Math.cos(rad);
  const s = Math.sin(rad);
  return { x: x * c - y * s, y: x * s + y * c };
}

/**
 * Voronoi - Standard cell centers
 */
  function voronoiRaw(x, y, seed, scale, angle) {
    const res = _calculateCellular(x, y, scale, seed, angle);
    return Math.min(1, res.d1);
  }

  function voronoi(x, y, z, seed, params = { scale: 60, angle: 0, contrast: 1, threshold: 0 }) {
    const { scale = 60, angle = 0 } = params;
    const n = voronoiRaw(x, y, seed, scale, angle);
    return applyPost(n, params);
  }

/**
 * Worley / Cellular - Multi-octave distance noise
 */
  function worleyRaw(x, y, z, seed, scale, angle, octaves, falloff) {
    let n = 0;
    
    let amp = 1;
    let maxAmp = 0;
    let currentScale = scale;

    for (let i = 0; i < octaves; i++) {
      n += voronoiRaw(x, y, seed + i, currentScale, angle) * amp;
      maxAmp += amp;
      amp *= falloff;
      currentScale *= 0.5;
    }
    return n / maxAmp;
  }

  function worley(x, y, z, seed, params = { scale: 60, angle: 0, octaves: 4, falloff: 0.5, contrast: 1, threshold: 0 }) {
    const { scale = 60, angle = 0, octaves = 4, falloff = 0.5 } = params;
    const n = worleyRaw(x, y, z, seed, scale, angle, octaves, falloff);
    return applyPost(n, params);
  }

/**
 * Voronoi Cracks (F2 - F1)
 * This creates the "stained glass" or "cracked earth" edge lines
 */
  function voronoiCracks(x, y, z, seed, params = { scale: 60, angle: 0, contrast: 1, threshold: 0 }) {
    const { scale = 60, angle = 0 } = params;
    const res = _calculateCellular(x, y, scale, seed, angle);
    // The closer F2 and F1 are, the closer we are to a boundary
    const diff = res.d2 - res.d1;
    const n = Math.min(1, diff * 2.0); // Multiply by 2 to sharpen the cracks
    return applyPost(n, params);
  }

/**
 * Voronoi Edge - Inverted distance
 */
  function voronoiEdge(x, y, z, seed, params = { scale: 60, angle: 0, contrast: 1, threshold: 0 }) {
    const { scale = 60, angle = 0 } = params;
    const n = 1 - voronoiRaw(x, y, seed, scale, angle);
    return applyPost(n, params);
  }

/**
 * Worley Edge - Inverted Worley
 */
  function worleyEdge(x, y, z, seed, params = { scale: 60, angle: 0, octaves: 4, falloff: 0.5, contrast: 1, threshold: 0 }) {
    const { scale = 60, angle = 0, octaves = 4, falloff = 0.5 } = params;
    const n = 1 - worleyRaw(x, y, z, seed, scale, angle, octaves, falloff);
    return applyPost(n, params);
  }

  // ============================================================================
  // REGION: Simple Patterns
  // ============================================================================

  /**
   * Sine Wave - X-axis (seed-based)
   */
  function sineX(x, y, z, seed, params = { scale: 60, contrast: 1, threshold: 0 }) {
    const { scale = 60 } = params;
    const n = (Math.sin(x / scale * 6.28 + z * 5 + seed * 0.01) + 1) / 2;
    return applyPost(n, params);
  }

  /**
   * Sine Wave - Y-axis (seed-based)
   */
  function sineY(x, y, z, seed, params = { scale: 60, contrast: 1, threshold: 0 }) {
    const { scale = 60 } = params;
    const n = (Math.sin(y / scale * 6.28 + z * 5 + seed * 0.01) + 1) / 2;
    return applyPost(n, params);
  }

  /**
   * Sine Wave - Radial (seed-based)
   */
  function sineRadial(x, y, z, seed, params = { scale: 60, contrast: 1, threshold: 0 }) {
    const { scale = 60 } = params;
    const r = Math.sqrt(x * x + y * y) / scale;
    const n = (Math.sin(r * 6.28 + z * 5 + seed * 0.01) + 1) / 2;
    return applyPost(n, params);
  }

  /**
   * Checkerboard pattern (seed-based)
   */
  function checkerboard(x, y, z, seed, params = { scale: 60, contrast: 1, threshold: 0 }) {
    const { scale = 60 } = params;
    // Use seed to create offset in checkerboard pattern
    const offset = ((seed % 2) === 0) ? 0 : 1;
    const n = ((Math.floor(x / scale) + Math.floor(y / scale) + offset) % 2 === 0) ? 1 : 0;
    return applyPost(n, params);
  }

  /**
   * Domain Warped Perlin (seed-based)
   */
  function domainWarp(x, y, z, seed, params = { scale: 60, octaves: 4, falloff: 0.5, warpStrength: 0.8, contrast: 1, threshold: 0 }) {
    const { scale = 60, octaves = 4, falloff = 0.5, warpStrength = 0.8 } = params;
    const P = seededPerm(seed);
    const nx = x / scale;
    const ny = y / scale;
    // Use different seed offsets for independent warp components
    const P2 = seededPerm(seed + 12345);
    const P3 = seededPerm(seed + 54321);
    const wx = pnoise(P2, nx, ny, z) * scale * warpStrength;
    const wy = pnoise(P3, nx + 5.2, ny + 1.3, z) * scale * warpStrength;
    const n = fbm(P, (x + wx) / scale, (y + wy) / scale, z + 0.5, octaves, falloff);
    return applyPost(n, params);
  }

  /**
   * Voronoi Cell Value - each cell has its own 0..1 value
   */
  function voronoiCell(x, y, z, seed, params = { scale: 60, angle: 0, contrast: 1, threshold: 0 }) {
    const { scale = 60, angle = 0 } = params;
    const res = _calculateCellular(x, y, scale, seed, angle);
    const v = hashFloat(hash(res.cx, res.cy, seed + 9001));
    return applyPost(v, params);
  }

  // ============================================================================
  // REGION: Utility Functions
  // ============================================================================

  /**
   * Clamp value to [0, 1]
   */
  function clamp01(v) {
    return v < 0 ? 0 : v > 1 ? 1 : v;
  }

  /**
   * Apply post-processing controls (contrast & threshold)
   */
  function applyPost(n, params) {
    const p = params || {};
    const contrast = typeof p.contrast === 'number' ? p.contrast : 1;
    const threshold = typeof p.threshold === 'number' ? p.threshold : 0;
    if (contrast !== 1) n = (n - 0.5) * contrast + 0.5;
    n = clamp01(n);
    if (threshold > 0) n = n >= threshold ? 1 : 0;
    return clamp01(n);
  }

  /**
   * Create noise function from type name
   */
  function getNoiseFunction(type) {
    return NOISE_FUNCTIONS[type] || perlin;
  }

  // ============================================================================
  // NOISE FUNCTIONS REGISTRY - Single source of truth
  // ============================================================================
  
  const NOISE_FUNCTIONS = {
    'perlin': perlin,
    'ridged': ridged,
    'billowy': billowy,
    'voronoi': voronoi,
    'voronoi_edge': voronoiEdge,
    'voronoi_cracks': voronoiCracks,
    'voronoi_cell': voronoiCell,
    'worley': worley,
    'worley_edge': worleyEdge,
    'sine_x': sineX,
    'sine_y': sineY,
    'sine_radial': sineRadial,
    'checkerboard': checkerboard,
    'domain_warp': domainWarp
  };

  // ============================================================================
  // PUBLIC API
  // ============================================================================

  return {
    // Core Perlin functions
    perlin,
    ridged,
    billowy,
    
    // Voronoi & Cellular
    voronoi,
    voronoiEdge,
    voronoiCracks,
    voronoiCell,
    worley,
    worleyEdge,
    
    // Simple patterns
    sineX,
    sineY,
    sineRadial,
    checkerboard,
    domainWarp,
    
    // Utilities
    getNoiseFunction,
    clamp01,
    seededPerm,
    pnoise,
    fbm,
    
    // Available types - Auto-generated from NOISE_FUNCTIONS
    types: Object.keys(NOISE_FUNCTIONS)
  };
})();

// For Node.js compatibility (optional)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = NoiseLib;
}


// ============================================================================
// CUSTOM INJECTED FUNCTIONS
// ============================================================================

  /**
   * Custom injected function: FBMPerlin
   */
  function FBMPerlin(x, y, z, seed, params = {
  scale: 60,
  contrast: 1,
  threshold: 0,
  octaves: 6,
  lacunarity: 2.0,
  persistence: 0.5,
}) {
  const scale       = params.scale       ?? 60;
  const contrast    = params.contrast    ?? 1;
  const threshold   = params.threshold   ?? 0;
  const octaves     = params.octaves     ?? 6;
  const lacunarity  = params.lacunarity  ?? 2.0;
  const persistence = params.persistence ?? 0.5;

  // --- Helpers ---

  function fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  function lerp(a, b, t) {
    return a + t * (b - a);
  }

  function grad(hash, gx, gy, gz) {
    const h = hash & 15;
    const u = h < 8 ? gx : gy;
    const v = h < 4 ? gy : (h === 12 || h === 14 ? gx : gz);
    return ((h & 1) ? -u : u) + ((h & 2) ? -v : v);
  }

  function buildPerm(s) {
    // LCG shuffle seeded by 's'
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    let rng = (s >>> 0) || 1;
    for (let i = 255; i > 0; i--) {
      rng = (rng * 1664525 + 1013904223) >>> 0;
      const j = rng % (i + 1);
      [p[i], p[j]] = [p[j], p[i]];
    }
    return p;
  }

  function perlin(px, py, pz, perm) {
    const X = Math.floor(px) & 255;
    const Y = Math.floor(py) & 255;
    const Z = Math.floor(pz) & 255;

    const dx = px - Math.floor(px);
    const dy = py - Math.floor(py);
    const dz = pz - Math.floor(pz);

    const u = fade(dx), v = fade(dy), w = fade(dz);

    const p = (i) => perm[i & 255];

    const A  = p(X) + Y,     AA = p(A) + Z, AB = p(A + 1) + Z;
    const B  = p(X + 1) + Y, BA = p(B) + Z, BB = p(B + 1) + Z;

    return lerp(
      lerp(
        lerp(grad(p(AA),     dx,     dy,     dz    ),
             grad(p(BA),     dx - 1, dy,     dz    ), u),
        lerp(grad(p(AB),     dx,     dy - 1, dz    ),
             grad(p(BB),     dx - 1, dy - 1, dz    ), u), v),
      lerp(
        lerp(grad(p(AA + 1), dx,     dy,     dz - 1),
             grad(p(BA + 1), dx - 1, dy,     dz - 1), u),
        lerp(grad(p(AB + 1), dx,     dy - 1, dz - 1),
             grad(p(BB + 1), dx - 1, dy - 1, dz - 1), u), v), w);
  }

  // --- FBM ---

  const perm = buildPerm(seed);

  let value     = 0;
  let amplitude = 1;
  let frequency = 1;
  let maxValue  = 0;

  for (let i = 0; i < octaves; i++) {
    value    += perlin(
      x / scale * frequency,
      y / scale * frequency,
      z        * frequency,
      perm
    ) * amplitude;

    maxValue  += amplitude;
    amplitude *= persistence;
    frequency *= lacunarity;
  }

  // Normalize to [0, 1]
  let n = (value / maxValue + 1) / 2;

  // Apply contrast (pivot at 0.5)
  n = (n - 0.5) * contrast + 0.5;

  // Apply threshold
  n = Math.max(0, n - threshold) / (1 - threshold);

  return Math.min(1, Math.max(0, n));
}

  /**
   * Custom injected function: FallOffNoise
   */
  function FallOffNoise(x, y, z, seed, params = {
  centerX: 250,
  centerY: 250,
  radius: 100,
  jaggedness: 0.5,
  seed: 0,
  power: 2,
  steepness: 1
}) {

  const centerX = params.centerX ?? 250;
  const centerY = params.centerY ?? 250;
  const radius = params.radius ?? 100;
  const jaggedness = params.jaggedness ?? 0.5;
  const s = params.seed ?? seed;
  
  const power = params.power ?? 2;
  const steepness = params.steepness ?? 1;

  const dx = x - centerX;
  const dy = y - centerY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx);
  
  const warp = Math.sin(angle * 4 + s) * 0.5 + 
               Math.sin(angle * 7 - s * 2) * 0.3 + 
               Math.sin(angle * 12 + s * 0.5) * 0.2;
               
  const organicRadius = radius * (1 + warp * jaggedness);
  
  let d = Math.min(1, distance / organicRadius);
  
  let falloff = Math.pow(1 - Math.pow(d, steepness), power);
  
  return falloff;
}


// ============================================================================
// CUSTOM BLEND FUNCTIONS
// ============================================================================

  /**
   * Custom blend function: StrengthBased
   */
  function StrengthBased(base, layer, ctx) {
  const strength = 1.0; 
  let v = layer * base;
  v = v * (1 + strength * base);
  return Math.max(0, Math.min(1, v));
}


// ============================================================================
// CONFIGURATION & RENDERING ENGINE (OPTIMIZED)
// ============================================================================

const CONTINENT = (function() {
  const globalState = {"res":4,"color":"terrain","offsetX":-220,"offsetY":-190,"zoom":1.5};
  const layers = [{"id":1,"type":"FBMPerlin","scale":400,"octaves":3,"falloff":0.5,"seed":0,"weight":1,"contrast":2.7,"threshold":0,"z":0,"offsetX":0,"offsetY":0,"blend":"StrengthBased","visible":true,"collapsed":false,"paramsMeta":{"scale":{"type":"number"},"octaves":{"type":"number"},"falloff":{"type":"number"},"contrast":{"type":"number"},"threshold":{"type":"number"},"lacunarity":{"type":"number"},"persistence":{"type":"number"}},"params":{"scale":600,"octaves":3,"falloff":0.5,"contrast":0.8,"threshold":0,"lacunarity":2,"persistence":5},"fixedMeta":{"offsetX":{"type":"number","step":0.01},"offsetY":{"type":"number","step":0.01},"z":{"type":"number","step":0.01},"seed":{"type":"range","min":0,"max":9999,"step":1}}},{"id":2,"type":"domain_warp","seed":0,"z":0,"offsetX":0,"offsetY":0,"blend":"StrengthBased","visible":true,"collapsed":false,"params":{"scale":60,"octaves":4,"falloff":0.5,"warpStrength":0.8,"contrast":0.8,"threshold":0},"paramsMeta":{"scale":{"type":"number"},"octaves":{"type":"number"},"falloff":{"type":"number"},"warpStrength":{"type":"number"},"contrast":{"type":"number"},"threshold":{"type":"number"}},"fixedMeta":{},"scale":60},{"id":3,"type":"FallOffNoise","seed":0,"z":-0.03,"offsetX":0,"offsetY":0,"blend":"StrengthBased","visible":true,"collapsed":false,"params":{"centerX":0,"centerY":0,"radius":800,"jaggedness":0.2,"seed":19.9,"power":5,"steepness":1.5,"scale":60},"paramsMeta":{"centerX":{"type":"range","min":-10000,"max":10000,"step":0.01},"centerY":{"type":"range","min":-10000,"max":10000,"step":0.01},"radius":{"type":"number","step":0.01},"jaggedness":{"type":"number","step":0.01},"seed":{"type":"number","step":0.01},"power":{"type":"number","step":0.01},"steepness":{"type":"number","step":0.01},"scale":{"type":"number","step":0.01}},"fixedMeta":{"offsetX":{"type":"number","step":0.01},"offsetY":{"type":"number","step":0.01},"z":{"type":"number","step":0.01},"seed":{"type":"number","step":0.01}},"scale":60}];
  const customParamDefaults = {"singleCellNoise":{"centerX":240,"centerY":180,"radius":60,"thickness":0.1,"contrast":1},"customNoise":{"centerX":250,"centerY":250,"radius":100,"fuzziness":0.8},"FallOffNoise":{"centerX":250,"centerY":250,"radius":100,"jaggedness":0.5,"seed":0,"power":2,"steepness":1},"FBMPerlin":{"scale":60,"contrast":1,"threshold":0,"octaves":6,"lacunarity":2,"persistence":0.5}};
  const customParamMeta = {"FBMPerlin":{"scale":{"type":"number"},"contrast":{"type":"number"},"threshold":{"type":"number"},"octaves":{"type":"number"},"lacunarity":{"type":"number"},"persistence":{"type":"number"}},"singleCellNoise":{"centerX":{"type":"number"},"centerY":{"type":"number"},"radius":{"type":"number"},"thickness":{"type":"number"},"contrast":{"type":"number"}},"customNoise":{"centerX":{"type":"number"},"centerY":{"type":"number"},"radius":{"type":"number"},"fuzziness":{"type":"number"}},"FallOffNoise":{"centerX":{"type":"number"},"centerY":{"type":"number"},"radius":{"type":"number"},"jaggedness":{"type":"number"},"seed":{"type":"number"},"power":{"type":"number"},"steepness":{"type":"number"}}};

  const customFunctions = {
    'FBMPerlin': FBMPerlin,
    'FallOffNoise': FallOffNoise,

  };

  const blendFns = {
    avg: (a, b) => (a + b) / 2,
    add: (a, b) => Math.min(1, a + b),
    mul: (a, b) => a * b,
    max: (a, b) => Math.max(a, b),
    min: (a, b) => Math.min(a, b),
    diff: (a, b) => Math.abs(a - b),
    'StrengthBased': StrengthBased,

  };

  function clamp01(v) {
    if (!Number.isFinite(v)) return 0;
    return v < 0 ? 0 : v > 1 ? 1 : v;
  }

  function applyBlend(base, layerValue, blend, ctx) {
    const fn = blendFns[blend];
    if (!fn) return base;
    const v = fn(base, layerValue, ctx);
    return clamp01(+v);
  }

  function getValue(x, y, z = 0) {
    let final = 0;

    const params0 = {"scale":600,"octaves":3,"falloff":0.5,"contrast":0.8,"threshold":0,"lacunarity":2,"persistence":5};
    const noiseFn0 = customFunctions['FBMPerlin'] || NoiseLib.getNoiseFunction('FBMPerlin');
    const nx0 = (x + globalState.offsetX) * globalState.zoom + 0;
    const ny0 = (y + globalState.offsetY) * globalState.zoom + 0;
    let n0 = noiseFn0(nx0, ny0, z + 0, 0, params0);
    n0 = n0 < 0 ? 0 : n0 > 1 ? 1 : n0;
    final = n0;
    const params1 = {"scale":60,"octaves":4,"falloff":0.5,"warpStrength":0.8,"contrast":0.8,"threshold":0};
    const noiseFn1 = customFunctions['domain_warp'] || NoiseLib.getNoiseFunction('domain_warp');
    const nx1 = (x + globalState.offsetX) * globalState.zoom + 0;
    const ny1 = (y + globalState.offsetY) * globalState.zoom + 0;
    let n1 = noiseFn1(nx1, ny1, z + 0, 0, params1);
    n1 = n1 < 0 ? 0 : n1 > 1 ? 1 : n1;
    final = applyBlend(final, n1, 'StrengthBased', { layerIndex: 1 });
    const params2 = {"centerX":(220 + globalState.offsetX ) * globalState.zoom,"centerY":(190 + globalState.offsetY)  * globalState.zoom,"radius":800,"jaggedness":0.2,"seed":0,"power":5,"steepness":1.5,"scale":60};
    const noiseFn2 = customFunctions['FallOffNoise'] || NoiseLib.getNoiseFunction('FallOffNoise');
    const nx2 = (x + globalState.offsetX) * globalState.zoom + 0;
    const ny2 = (y + globalState.offsetY) * globalState.zoom + 0;
    let n2 = noiseFn2(nx2, ny2, z + -0.03, 0, params2);
    n2 = n2 < 0 ? 0 : n2 > 1 ? 1 : n2;
    final = applyBlend(final, n2, 'StrengthBased', { layerIndex: 2 });
    if (globalState.invert) final = 1 - final;
    return final;
  }

  return {
    getValue,
    setOffsets: (offsetX, offsetY) => {
      globalState.offsetX = offsetX;
      globalState.offsetY = offsetY;
    },
    getState: () => ({...globalState}),
    getLayers: () => [...layers],
    getParamDefaults: () => ({...customParamDefaults}),
    getParamMeta: () => ({...customParamMeta}),
    NoiseLib,
    customFunctions,
    projectName: 'CONTINENT'
  };
})();

if (typeof window !== 'undefined') {
  window['CONTINENT'] = CONTINENT;
}

// Usage: CustomMapNoise.getValue(x, y) or CustomMapNoise.getValue(x, y, z)
// Export for ES6 modules
export default CONTINENT;

// Usage: CustomMapNoise.getValue(x, y) or CustomMapNoise.getValue(x, y, z)