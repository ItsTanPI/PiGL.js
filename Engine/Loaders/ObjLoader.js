import { Mesh } from '../Rendering/Mesh.js';

export class ObjLoader {
    static async load(gl, url) {
        const response = await fetch(url);
        const text = await response.text();
        const data = this.parse(gl, text);
        return new Mesh(gl, data.positions, data.uvs, data.normals);
    }

    static parse(gl, text) {
        const positions = [];
        const uvs = [];
        const normals = [];

        // Temporary arrays to hold raw OBJ data
        const objPositions = [];
        const objUVs = [];
        const objNormals = [];

        // Final arrays for WebGL buffers
        const webglPositions = [];
        const webglUVs = [];
        const webglNormals = [];

        const lines = text.split('\n');
        for (let line of lines) {
            line = line.trim();
            if (line.startsWith('#') || line === '') continue;

            const parts = line.split(/\s+/);
            const type = parts[0];

            if (type === 'v') {
                objPositions.push([
                    parseFloat(parts[1]),
                    parseFloat(parts[2]),
                    parseFloat(parts[3])
                ]);
            } else if (type === 'vt') {
                objUVs.push([
                    parseFloat(parts[1]),
                    parseFloat(parts[2])
                ]);
            } else if (type === 'vn') {
                objNormals.push([
                    parseFloat(parts[1]),
                    parseFloat(parts[2]),
                    parseFloat(parts[3])
                ]);
            } else if (type === 'f') {
                // Triangulate faces (fan triangulation for polygons > 3 vertices)
                const faceVertices = parts.slice(1);
                for (let i = 1; i < faceVertices.length - 1; i++) {
                    const v1 = faceVertices[0];
                    const v2 = faceVertices[i];
                    const v3 = faceVertices[i + 1];

                    this.processVertex(v1, objPositions, objUVs, objNormals, webglPositions, webglUVs, webglNormals);
                    this.processVertex(v2, objPositions, objUVs, objNormals, webglPositions, webglUVs, webglNormals);
                    this.processVertex(v3, objPositions, objUVs, objNormals, webglPositions, webglUVs, webglNormals);
                }
            }
        }

        return {
            positions: new Float32Array(webglPositions),
            uvs: new Float32Array(webglUVs),
            normals: new Float32Array(webglNormals),
            vertexCount: webglPositions.length / 3
        };
    }

    static processVertex(faceToken, objPos, objUV, objNorm, outPos, outUV, outNorm) {
        // Token format: v/vt/vn or v//vn or v/vt
        const bits = faceToken.split('/');
        
        // OBJ indices are 1-based, convert to 0-based
        const vIdx = parseInt(bits[0]) - 1;
        const vtIdx = bits[1] ? parseInt(bits[1]) - 1 : -1;
        const vnIdx = bits[2] ? parseInt(bits[2]) - 1 : -1;

        // Position
        const pos = objPos[vIdx];
        outPos.push(pos[0], pos[1], pos[2]);

        // UV
        if (vtIdx >= 0) {
            const uv = objUV[vtIdx];
            outUV.push(uv[0], uv[1]); // Often OBJ V is flipped relative to WebGL, but usually handled in texture logic or shader
        } else {
            outUV.push(0, 0);
        }

        // Normal
        if (vnIdx >= 0) {
            const norm = objNorm[vnIdx];
            outNorm.push(norm[0], norm[1], norm[2]);
        } else {
            outNorm.push(0, 1, 0); // Default up normal
        }
    }
}
