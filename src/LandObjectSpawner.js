import { GameObject } from './Engine/Core/GameObject.js';
import { ObjLoader } from './Engine/Loaders/ObjLoader.js';
import CONTINENT from './CustomMapNoise.js';
import { HexGridMesh } from './HexGridMesh.js';

/**
 * LandObjectSpawner
 * Places static land objects (trees, rocks, etc.) from public/Assets/3D/Land
 * only on positions where the terrain noise value exceeds a threshold.
 *
 * Usage:
 * const spawner = new LandObjectSpawner(gl, renderer, material, scene, ["tree.obj","rock.obj"]);
 * spawner.setSeed(123);
 * await spawner.spawnMany(100, bounds);
 */
export class LandObjectSpawner {
    constructor(gl, renderer, material, scene, modelFiles = [], options = {}) {
        this.gl = gl;
        this.renderer = renderer;
        this.material = material;
        this.scene = scene;
        this.meshCache = {};
        // Backward-compatible arguments:
        // - modelFiles can be an array, a path string, or omitted.
        // - if modelFiles is an object, treat it as options.
        if (modelFiles && typeof modelFiles === 'object' && !Array.isArray(modelFiles)) {
            options = modelFiles;
            modelFiles = [];
        }

        this.seed = options.seed || 12345;
        this.currentState = this.seed;
        this.noise = CONTINENT;
        this.threshold = options.threshold ?? 0.45;

        // Threshold callback functions: determine if object spawns based on noise value
        const palmThreshold = (rawValue) => rawValue >= 0.42;  // Palms on land (noise > 0.45)
        const grassThreshold = (rawValue) => rawValue >= 0.45;  // Grass on land (noise > 0.45)
        const rocksThreshold = (rawValue) => rawValue > 0.5;  // Rocks on higher land (noise > 0.5)
        const rocksThresholdIsland = (rawValue) => rawValue <= 0.2;  // Rocks on higher land (noise > 0.5)

        const structureThreshold = (rawValue) => rawValue >= 0.43 && rawValue <= 0.45;  // Structures on land (noise > 0.45)
        const defaultThreshold = (rawValue) => rawValue > this.threshold;  // Default land threshold

        // Catalog in FloatingObjectSpawner-style with weighted probabilities.
        this.modelCatalog = [
            // Palms (trees) - spawn on land > 0.45
            { file: 'palm-detailed-straight.obj', name: 'Palm Detailed Straight', rotationMode: 'y-only', scale: 1.0, yOffset: 0.0, probability: 0.12, thresholdCallback: palmThreshold },
            { file: 'palm-detailed-bend.obj', name: 'Palm Detailed Bend', rotationMode: 'y-only', scale: 1.0, yOffset: 0.0, probability: 0.15, thresholdCallback: palmThreshold },
            { file: 'palm-straight.obj', name: 'Palm Straight', rotationMode: 'y-only', scale: 1.0, yOffset: 0.0, probability: 0.12, thresholdCallback: palmThreshold },
            { file: 'palm-bend.obj', name: 'Palm Bend', rotationMode: 'y-only', scale: 1.0, yOffset: 0.0, probability: 0.15, thresholdCallback: palmThreshold },

            // Grass - spawn on land > 0.45
            { file: 'grass.obj', name: 'Grass', rotationMode: 'y-only', scale: 1.0, scaleRange: [0.75, 1.35], yOffset: 0.0, probability: 0.1, thresholdCallback: grassThreshold },
            { file: 'grass-patch.obj', name: 'Grass Patch', rotationMode: 'y-only', scale: 1.0, scaleRange: [0.75, 1.30], yOffset: 0.0, probability: 0.05, thresholdCallback: grassThreshold },
            { file: 'grass-plant.obj', name: 'Grass Plant', rotationMode: 'y-only', scale: 1.0, scaleRange: [0.80, 1.40], yOffset: 0.0, probability: 0.05, thresholdCallback: grassThreshold },
            { file: 'patch-grass.obj', name: 'Patch Grass', rotationMode: 'y-only', scale: 1.0, scaleRange: [0.80, 1.25], yOffset: 0.0, probability: 0.05, thresholdCallback: grassThreshold },
            { file: 'patch-grass-foliage.obj', name: 'Patch Grass Foliage', rotationMode: 'y-only', scale: 1.0, scaleRange: [0.80, 1.25], yOffset: 0.0, probability: 0.05, thresholdCallback: grassThreshold },
            { file: 'patch-sand.obj', name: 'Patch Sand', rotationMode: 'y-only', scale: 1.0, scaleRange: [0.85, 1.20], yOffset: 0.0, probability: 0.05, thresholdCallback: grassThreshold },
            { file: 'patch-sand-foliage.obj', name: 'Patch Sand Foliage', rotationMode: 'y-only', scale: 1.0, scaleRange: [0.80, 1.20], yOffset: 0.0, probability: 0.05, thresholdCallback: rocksThreshold },

            // Rocks - spawn on higher land > 0.5
            { file: 'rocks-a.obj', name: 'Rocks A', rotationMode: 'y-only', scale: 1.0, scaleRange: [0.75, 3.45], yOffset: 0.0, probability: 0.02, thresholdCallback: rocksThreshold },
            { file: 'rocks-b.obj', name: 'Rocks B', rotationMode: 'y-only', scale: 1.0, scaleRange: [0.75, 3.45], yOffset: 0.0, probability: 0.02, thresholdCallback: rocksThreshold },
            { file: 'rocks-c.obj', name: 'Rocks C', rotationMode: 'y-only', scale: 1.0, scaleRange: [0.75, 3.50], yOffset: 0.0, probability: 0.02, thresholdCallback: rocksThreshold },
            { file: 'rocks-sand-a.obj', name: 'Rocks Sand A', rotationMode: 'y-only', scale: 1.0, scaleRange: [0.80, 3.40], yOffset: 0.0, probability: 0.017, thresholdCallback: rocksThreshold },
            { file: 'rocks-sand-b.obj', name: 'Rocks Sand B', rotationMode: 'y-only', scale: 1.0, scaleRange: [0.80, 3.40], yOffset: 0.0, probability: 0.017, thresholdCallback: rocksThreshold },
            { file: 'rocks-sand-c.obj', name: 'Rocks Sand C', rotationMode: 'y-only', scale: 1.0, scaleRange: [0.80, 3.40], yOffset: 0.0, probability: 0.017, thresholdCallback: rocksThreshold },


            { file: 'rocks-a.obj', name: 'Rocks A Island', rotationMode: 'y-only', scale: 1.0, scaleRange: [3.75, 10.45], yOffset: 0.0, probability: 0.001, thresholdCallback: rocksThresholdIsland },
            { file: 'rocks-b.obj', name: 'Rocks B Island', rotationMode: 'y-only', scale: 1.0, scaleRange: [3.75, 10.45], yOffset: 0.0, probability: 0.001, thresholdCallback: rocksThresholdIsland },
            { file: 'rocks-c.obj', name: 'Rocks C Island', rotationMode: 'y-only', scale: 1.0, scaleRange: [3.75, 10.50], yOffset: 0.0, probability: 0.001, thresholdCallback: rocksThresholdIsland },
            { file: 'rocks-sand-a.obj', name: 'Rocks Sand A Island', rotationMode: 'y-only', scale: 1.0, scaleRange: [3.80, 10.40], yOffset: 0.0, probability: 0.001, thresholdCallback: rocksThresholdIsland },
            { file: 'rocks-sand-b.obj', name: 'Rocks Sand B Island', rotationMode: 'y-only', scale: 1.0, scaleRange: [3.80, 10.40], yOffset: 0.0, probability: 0.001, thresholdCallback: rocksThresholdIsland },
            { file: 'rocks-sand-c.obj', name: 'Rocks Sand C Island', rotationMode: 'y-only', scale: 1.0, scaleRange: [3.80, 10.40], yOffset: 0.0, probability: 0.001, thresholdCallback: rocksThresholdIsland },

            // Structures - spawn on land > 0.45
            { file: 'platform-planks.obj', name: 'Platform Planks', rotationMode: 'y-only', scale: 1.0, yOffset: 0.0, probability: 0.07, thresholdCallback: defaultThreshold },
            { file: 'ship-wreck.obj', name: 'Ship Wreck', rotationMode: '3d', scale: 1.0, yOffset: -1.0, probability: 0.1, thresholdCallback: structureThreshold },
            { file: 'tower-complete-small.obj', name: 'Tower Complete Small', rotationMode: 'y-only', scale: 1.0, yOffset: 0.0, probability: 0.06, thresholdCallback: structureThreshold },
            { file: 'tower-complete-large.obj', name: 'Tower Complete Large', rotationMode: 'y-only', scale: 1.0, yOffset: 0.0, probability: 0.06, thresholdCallback: structureThreshold },
            { file: 'structure-roof.obj', name: 'Structure Roof', rotationMode: 'y-only', scale: 1.0, yOffset: 0.0, probability: 0.1, thresholdCallback: defaultThreshold },
            { file: 'cannon-mobile.obj', name: 'Cannon Mobile', rotationMode: 'y-only', scale: 1.0, yOffset: 0.0, probability: 0.05, thresholdCallback: defaultThreshold },
            { file: 'house.obj', name: 'House', rotationMode: 'y-only', scale: 1.0, yOffset: 0.0, probability: 0.06, thresholdCallback: defaultThreshold },


            // Misc
            { file: 'hole.obj', name: 'Hole', rotationMode: 'y-only', scale: 1.0, yOffset: 0.0, probability: 0.1, thresholdCallback: defaultThreshold },
            // { file: 'mast.obj', name: 'Mast', rotationMode: 'y-only', scale: 1.0, yOffset: 0.0, probability: 0.3, thresholdCallback: defaultThreshold },
            // { file: 'mast-ropes.obj', name: 'Mast Ropes', rotationMode: 'y-only', scale: 1.0, yOffset: 0.0, probability: 0.3, thresholdCallback: defaultThreshold }
        ];

        // If modelFiles is not an array (e.g. a string path), auto-use full catalog.
        // If it's an array, build from catalog defaults where possible.
        if (!Array.isArray(modelFiles) || modelFiles.length === 0) {
            this.models = this.modelCatalog.map((m) => ({ ...m }));
        } else {
            const catalogByFile = new Map(this.modelCatalog.map((m) => [m.file, m]));
            this.models = modelFiles.map((fileName) => {
                const fromCatalog = catalogByFile.get(fileName);
                if (fromCatalog) return { ...fromCatalog };

                return {
                    file: fileName,
                    name: fileName.replace('.obj', ''),
                    rotationMode: 'y-only',
                    scale: 1.0,
                    yOffset: 0.0,
                    probability: 1.0
                };
            });
        }
    }

    setSeed(seed) {
        this.seed = seed;
        this.currentState = seed;
    }

    // Mulberry32-like PRNG (same as FloatingObjectSpawner style)
    seededRandom() {
        this.currentState |= 0;
        this.currentState = (this.currentState + 0x6D2B79F5) | 0;
        let t = Math.imul(this.currentState ^ (this.currentState >>> 15), 1 | this.currentState);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }

    async loadMesh(fileName) {
        if (this.meshCache[fileName]) return this.meshCache[fileName];
        try {
            const mesh = await ObjLoader.load(this.gl, `./Assets/3D/Land/${fileName}`);
            this.meshCache[fileName] = mesh;
            return mesh;
        } catch (e) {
            console.warn(`LandObjectSpawner: failed to load ${fileName}`, e);
            return null;
        }
    }

    /**
     * Get a random model definition weighted by probability.
     */
    getRandomModel() {
        if (!this.models.length) return null;

        const totalProbability = this.models.reduce((sum, m) => sum + (m.probability || 0), 0);
        let random = this.seededRandom() * totalProbability;

        for (let model of this.models) {
            random -= (model.probability || 0);
            if (random <= 0) return model;
        }

        return this.models[0];
    }

    /**
     * Get random position (seed-based).
     */
    getRandomPosition(minX, maxX, minZ, maxZ, yFixed = 0) {
        return {
            x: minX + this.seededRandom() * (maxX - minX),
            y: yFixed,
            z: minZ + this.seededRandom() * (maxZ - minZ)
        };
    }

    /**
     * Get random rotation by mode (seed-based).
     */
    getRandomRotation(rotationMode = 'y-only') {
        // Accepts: 'y-only', 'x-only', 'z-only', '3d' / 'all',
        // or combined tokens like 'x-only|z-only' (order-insensitive).
        if (!rotationMode) rotationMode = 'y-only';

        // Normalize arrays to token list
        let tokens = Array.isArray(rotationMode) ? rotationMode : String(rotationMode).split('|').map(s => s.trim().toLowerCase());

        // Fast path for full 3D
        if (tokens.includes('3d') || tokens.includes('all') || tokens.includes('x-y-z') || tokens.includes('xyz')) {
            return {
                x: this.seededRandom() * Math.PI * 0.15,
                y: this.seededRandom() * Math.PI * 2,
                z: this.seededRandom() * Math.PI * 0.15
            };
        }

        const out = { x: 0, y: 0, z: 0 };
        for (const t of tokens) {
            if (!t) continue;
            if (t.includes('x')) out.x = this.seededRandom() * Math.PI * 2;
            if (t.includes('y')) out.y = this.seededRandom() * Math.PI * 2;
            if (t.includes('z')) out.z = this.seededRandom() * Math.PI * 2;
        }

        // If none selected (e.g. unknown token), default to Y rotation
        if (out.x === 0 && out.y === 0 && out.z === 0) {
            out.y = this.seededRandom() * Math.PI * 2;
        }

        return out;
    }

    /**
     * Spawn a single random land object.
     */
    async spawnRandomObject(position, noiseValue, objectIndex = null) {
        const modelDef = objectIndex !== null && objectIndex < this.models.length
            ? this.models[objectIndex]
            : this.getRandomModel();

        if (!modelDef) return null;

        const mesh = await this.loadMesh(modelDef.file);
        if (!mesh) return null;

        const objectName = `${modelDef.name} [Land]`;
        const obj = new GameObject(this.renderer, this.material, mesh, objectName);

        let y = position.y + (modelDef.yOffset || 0);
        y += (HexGridMesh.terrainValue(noiseValue)) * 20 * 0.4;

        obj.transform.position.set(position.x, y, position.z);

        // Seed-based random scale for models that provide scaleRange.
        let scale = modelDef.scale ?? 1.0;
        if (Array.isArray(modelDef.scaleRange) && modelDef.scaleRange.length === 2) {
            const minS = modelDef.scaleRange[0];
            const maxS = modelDef.scaleRange[1];
            scale = minS + this.seededRandom() * (maxS - minS);
        }
        obj.transform.scale.set(scale, scale, scale);

        const rotation = this.getRandomRotation(modelDef.rotationMode);
        obj.transform.rotation.set(rotation.x, rotation.y, rotation.z);

        this.scene.push(obj);
        return obj;
    }

    /**
     * Spawn many random land objects.
     * Uses the same noise coordinate mapping as FloatingObjectSpawner,
     * but only accepts land points where noise passes the model's threshold callback.
     */
    async spawnMany(count, bounds, yFixed = 0) {
        const spawned = [];
        if (!this.models.length) {
            console.warn('LandObjectSpawner.spawnMany: no model files provided');
            return spawned;
        }

        for (let i = 0; i < count; i++) {
            let position;
            let rawValue;
            let modelDef;
            let thresholdCheck;

            do {
                position = this.getRandomPosition(
                    bounds.minX, bounds.maxX,
                    bounds.minZ, bounds.maxZ,
                    yFixed
                );

                const posxx = position.x + (255 * Math.sqrt(3) / 2);
                const posyy = position.z + (255 * 1.5 / 2);
                rawValue = this.noise.getValue(posxx, posyy, 0);

                // Get random model and check its threshold callback
                modelDef = this.getRandomModel();
                thresholdCheck = modelDef.thresholdCallback ? modelDef.thresholdCallback(rawValue) : true;
            } while (!thresholdCheck);

            // Use the already picked model
            const index = this.models.indexOf(modelDef);
            const obj = await this.spawnRandomObject(position, rawValue, index);
            if (obj) spawned.push(obj);
        }

        return spawned;
    }

    getAvailableModels() {
        return this.models.map((m, idx) => ({
            index: idx,
            name: m.name,
            file: m.file,
            rotationMode: m.rotationMode,
            yOffset: m.yOffset,
            probability: m.probability
        }));
    }
}
