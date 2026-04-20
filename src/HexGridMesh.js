import { Mesh } from './Engine/Rendering/Mesh.js';
import CONTINENT from "./CustomMapNoise.js";

export class HexGridMesh extends Mesh {
    /**
     * Generates a flat hex-grid triangulated mesh and uploads to GPU.
     *
     * @param {WebGLRenderingContext} gl
     * @param {number} [cols=20]   - Number of hex columns
     * @param {number} [rows=15]   - Number of hex rows
     * @param {number} [radius=1]  - Hex cell radius (center to vertex)
     */
    
    /**
     * Helper function to get terrain color based on normalized height
     */
    static terrainColor(v) {
        if (v <= 0.3)  return [14/255,  54/255,  124/255];
        if (v <= 0.35) return [30/255,  80/255,  200/255];
        // if (v <= 0.4)  return [54/255,  130/255, 220/255];
        if (v <= 0.4)  return [242/255, 151/255, 106/255]; // Beach color from image
        return [234/255, 191/255, 145/255];
    }

    static terrainValue(v) {
        if (v <= 0.3)  return  37/255;
        if (v <= 0.35) return  73/255;
        if (v <= 0.4)  return  142/255;
        if (v <= 0.7)  return  181/255;
        return 1;
    }



    constructor(gl, cols = 20, rows = 15, radius = 1.0, isTer = false) {
        const hSpacing = radius * Math.sqrt(3);
        const vSpacing = radius * 1.5;

        const totalW = cols * hSpacing;   // 255 * 1.732 = 441.67
        const totalH = rows * vSpacing;   // 255 * 1.5   = 382.5
        // ── 1. Build vertex grid ─────────────────────────────────────────
        // vert_map[(row, col)] = index into vertPos array
        const vertPos = [];   // [x, y, z,  x, y, z, ...]
        const vertMap = {};   // key: "row_col" -> index
        const vertCol = [];   // [r, g, b,  r, g, b, ...]
        
        // Create noise instance for height mapping
        const noise = CONTINENT;
        let minHeight = Infinity, maxHeight = -Infinity;
        let y = 0;
        // First pass: collect heights to find min/max
        const heightMap = {};
        for (let row = 0; row <= rows; row++) {
            const xOffset = (row % 2 !== 0) ? hSpacing / 2 : 0;
            for (let col = 0; col <= cols; col++) {
                const x = col * hSpacing + xOffset;
                const z = row * vSpacing;
                const noiseValue = noise.getValue(x, z, 0);
                if(isTer)
                {
                   y = (HexGridMesh.terrainValue(noiseValue)) * 20;
                }   
    
                heightMap[`${row}_${col}`] = y;
                minHeight = Math.min(minHeight, y);
                maxHeight = Math.max(maxHeight, y);
            }
        }

        // Second pass: create vertices with colors based on normalized height
        for (let row = 0; row <= rows; row++) {
            const xOffset = (row % 2 !== 0) ? hSpacing / 2 : 0;
            for (let col = 0; col <= cols; col++) {
                const x = col * hSpacing + xOffset;
                const z = row * vSpacing;
                y = heightMap[`${row}_${col}`];
                
                // Normalize height to 0-1 range
                const heightRange = maxHeight - minHeight || 1;
                const normalizedHeight = (y - minHeight) / heightRange;
                
                // Get color based on height
                const noiseValue = noise.getValue(x, z, 0);
                
                const color = HexGridMesh.terrainColor(noiseValue);
                
                vertMap[`${row}_${col}`] = vertPos.length / 3;
                vertPos.push(x, y, z);                
                vertCol.push(color[0], color[1], color[2]);
            }
        }

        // ── 2. Build triangle index list ─────────────────────────────────
        const indices = [];

        function idx(row, col) {
            return vertMap[`${row}_${col}`] ?? -1;
        }

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const tL = idx(row,     col);
                const tR = idx(row,     col + 1);

                const bMcol = (row % 2 === 0) ? col     : col + 1;
                const bLcol = (row % 2 === 0) ? col - 1 : col;

                const bM = idx(row + 1, bMcol);
                const bL = idx(row + 1, bLcol);

                // Triangle 1: upper triangle (tL, tR, bM)
                // Even rows:  tL top-left, tR top-right, bM bottom-center → CW = tL, bM, tR
                // Odd rows:   offset shifts bM right → CW = tL, tR, bM
                if (tL !== -1 && tR !== -1 && bM !== -1) {
                    indices.push(tL, bM, tR);
                }

                // Triangle 2: lower triangle (tL, bL, bM)
                // Even rows:  bL is col-1 so bM is to the right of bL → CW = tL, bL, bM
                // Odd rows:   bL is col so bM is to the right → CW = tL, bM, bL
                if (tL !== -1 && bL !== -1 && bM !== -1) {
                    indices.push(tL, bL, bM);
                }
            }
        }
        // ── 3. UVs ───────────────────────────────────────────────────────
        const uvs = [];
        for (let i = 0; i < vertPos.length / 3; i++) {
            const x = vertPos[i * 3];
            const z = vertPos[i * 3 + 2];
            uvs.push(x / totalW, z / totalH);
        }

        // ── 4. Normals ───────────────────────────────────────────────────
        // Compute per-vertex normals from the displaced geometry
        const normals = new Float32Array(vertPos.length);
        
        // Accumulate face normals at each vertex
        for (let i = 0; i < indices.length; i += 3) {
            const iA = indices[i],     iB = indices[i + 1], iC = indices[i + 2];

            const ax = vertPos[iA*3],   ay = vertPos[iA*3+1], az = vertPos[iA*3+2];
            const bx = vertPos[iB*3],   by = vertPos[iB*3+1], bz = vertPos[iB*3+2];
            const cx = vertPos[iC*3],   cy = vertPos[iC*3+1], cz = vertPos[iC*3+2];

            // Edge vectors AB, AC
            const abx = bx - ax, aby = by - ay, abz = bz - az;
            const acx = cx - ax, acy = cy - ay, acz = cz - az;

            // Cross product AB × AC = face normal (order matters for direction!)
            const nx = aby * acz - abz * acy;
            const ny = abz * acx - abx * acz;
            const nz = abx * acy - aby * acx;

            // Accumulate (unnormalized) at each vertex of this face
            normals[iA*3]   += nx;  normals[iA*3+1] += ny;  normals[iA*3+2] += nz;
            normals[iB*3]   += nx;  normals[iB*3+1] += ny;  normals[iB*3+2] += nz;
            normals[iC*3]   += nx;  normals[iC*3+1] += ny;  normals[iC*3+2] += nz;
        }

        // Normalize each vertex normal
        for (let i = 0; i < vertPos.length / 3; i++) {
            const x  = normals[i*3], y = normals[i*3+1], z = normals[i*3+2];
            const len = Math.sqrt(x*x + y*y + z*z) || 1;
            normals[i*3]   = x / len;
            normals[i*3+1] = y / len;
            normals[i*3+2] = z / len;
        }

        // ── 5. Hand off to parent Mesh ───────────────────────────────────
        super(
            gl,
            new Float32Array(vertPos),
            new Float32Array(uvs),
            normals,
            new Uint16Array(indices)
        );

        // Store and upload vertex colors
        this.colors = new Float32Array(vertCol);
        this.colorBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.colors, gl.STATIC_DRAW);

        // Store meta in case caller needs it
        this.cols      = cols;
        this.rows      = rows;
        this.radius    = radius;
        this.hSpacing  = hSpacing;
        this.vSpacing  = vSpacing;
        this.totalW    = totalW;
        this.totalH    = totalH;
    }

    /**
     * Recomputes per-vertex normals from actual geometry.
     * Call this after you displace the vertices (e.g. noise-based terrain).
     * Updates the normalBuffer on the GPU.
     *
     * @param {Float32Array} displacedVerts - Updated vertex positions [x,y,z, ...]
     */
    recomputeNormals(displacedVerts) {
        const gl      = this.gl;
        const count   = displacedVerts.length / 3;
        const normals = new Float32Array(count * 3);  // zero-initialized

        const idxArr = this.indices;

        // Accumulate face normals at each vertex
        for (let i = 0; i < idxArr.length; i += 3) {
            const iA = idxArr[i],     iB = idxArr[i + 1], iC = idxArr[i + 2];

            const ax = displacedVerts[iA*3],   ay = displacedVerts[iA*3+1], az = displacedVerts[iA*3+2];
            const bx = displacedVerts[iB*3],   by = displacedVerts[iB*3+1], bz = displacedVerts[iB*3+2];
            const cx = displacedVerts[iC*3],   cy = displacedVerts[iC*3+1], cz = displacedVerts[iC*3+2];

            // Edge vectors AB, AC
            const abx = bx - ax, aby = by - ay, abz = bz - az;
            const acx = cx - ax, acy = cy - ay, acz = cz - az;

            // Cross product AB × AC = face normal
            const nx = acy * abz - acz * aby;
            const ny = acz * abx - acx * abz;
            const nz = acx * aby - acy * abx;

            // Accumulate (unnormalized) at each vertex of this face
            normals[iA*3]   += nx;  normals[iA*3+1] += ny;  normals[iA*3+2] += nz;
            normals[iB*3]   += nx;  normals[iB*3+1] += ny;  normals[iB*3+2] += nz;
            normals[iC*3]   += nx;  normals[iC*3+1] += ny;  normals[iC*3+2] += nz;
        }

        // Normalize each vertex normal
        for (let i = 0; i < count; i++) {
            const x  = normals[i*3], y = normals[i*3+1], z = normals[i*3+2];
            const len = Math.sqrt(x*x + y*y + z*z) || 1;
            normals[i*3]   = x / len;
            normals[i*3+1] = y / len;
            normals[i*3+2] = z / len;
        }

        // Upload updated normals to GPU
        gl.bindBuffer(gl.ARRAY_BUFFER, this.normalBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, normals, gl.DYNAMIC_DRAW);

        this.normals = normals;
    }
}