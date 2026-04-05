import { GameObject } from './Engine/Core/GameObject.js';
import { ObjLoader } from './Engine/Loaders/ObjLoader.js';
import { FloatingObject } from './FloatingObject.js';
import { Ship } from './Ship.js';
import { Time } from './Engine/Core/TimeManager.js';

/**
 * Floating Object Spawner with Seed-based Procedural Generation
 * Generates reproducible random object placement and properties
 */
export class FloatingObjectSpawner {
    constructor(gl, renderer, material, scene, seed = 12345) {
        this.gl = gl;
        this.renderer = renderer;
        this.material = material;
        this.scene = scene;
        this.meshCache = {};
        this.seed = seed;
        this.currentState = seed;  // Current state of the PRNG
        
        // Model definitions with names and rotation behavior
        this.models = [
            // Barrels and containers (barrel: full 3D, others: Y-only)
            { file: 'barrel.obj', name: 'Barrel', type: 'container', rotationMode: '3d', scale: 1.0, yOffset: -0.2, probability: 0.25 },
            { file: 'crate.obj', name: 'Crate', type: 'container', rotationMode: 'y-only', scale: 1.0, yOffset: -0.2, probability: 0.15 },
            { file: 'chest.obj', name: 'Treasure Chest', type: 'container', rotationMode: 'y-only', scale: 1.0, yOffset: -0.3, probability: 0.10 },
            
            // Bottles (bottle: full 3D, large bottle: Y-only)
            { file: 'bottle.obj', name: 'Bottle', type: 'bottle', rotationMode: '3d', scale: 1.0, yOffset: -0.5, probability: 0.22 },
            { file: 'bottle-large.obj', name: 'Large Bottle', type: 'bottle', rotationMode: 'y-only', scale: 1.0, yOffset: -0.5, probability: 0.08 },
            
            // Ships (Y rotation only, low probability)
            { file: 'ship-large.obj', name: 'Ship Large', type: 'ship', rotationMode: 'y-only', scale: 1.0, yOffset: -1, probability: 0.06 },
            { file: 'ship-pirate-large.obj', name: 'Pirate Ship Large', type: 'ship', rotationMode: 'y-only', scale: 1.0, yOffset: -1, probability: 0.06 },
            { file: 'ship-pirate-medium.obj', name: 'Pirate Ship Medium', type: 'ship', rotationMode: 'y-only', scale: 1.0, yOffset: -1, probability: 0.07 },
            { file: 'ship-pirate-small.obj', name: 'Pirate Ship Small', type: 'ship', rotationMode: 'y-only', scale: 1.0, yOffset: -1, probability: 0.07 },
            
            // Boats (Y rotation only)
            { file: 'boat-row-large.obj', name: 'Rowboat Large', type: 'boat', rotationMode: 'y-only', scale: 1.0, yOffset: -0.2, probability: 0.05 },
            { file: 'boat-row-small.obj', name: 'Rowboat Small', type: 'boat', rotationMode: 'y-only', scale: 1.0, yOffset: -0.2, probability: 0.08 },
            
            // Platforms/Pallets (Y rotation only, high probability)
            { file: 'platform.obj', name: 'Platform', type: 'platform', rotationMode: 'y-only', scale: 1.0, yOffset: -0.2, probability: 0.20 },
            { file: 'platform-planks.obj', name: 'Platform Planks', type: 'platform', rotationMode: 'y-only', scale: 1.0, yOffset: -0.15, probability: 0.18 },            
        ];
        
        this.loadedMeshCount = 0;
    }
    
    /**
     * Seeded random number generator (Mulberry32)
     * Returns a value between 0 and 1
     */
    seededRandom() {
        this.currentState |= 0;
        this.currentState = (this.currentState + 0x6D2B79F5) | 0;
        let t = Math.imul(this.currentState ^ (this.currentState >>> 15), 1 | this.currentState);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
    
    /**
     * Set a new seed for reproducible generation
     */
    setSeed(seed) {
        this.seed = seed;
        this.currentState = seed;
    }
    
    /**
     * Load a mesh and cache it
     */
    async loadMesh(fileName) {
        if (this.meshCache[fileName]) {
            return this.meshCache[fileName];
        }
        
        try {
            const mesh = await ObjLoader.load(this.gl, `./Assets/3D/Floating/${fileName}`);
            this.meshCache[fileName] = mesh;
            this.loadedMeshCount++;
            return mesh;
        } catch (e) {
            console.error(`Failed to load ${fileName}:`, e);
            return null;
        }
    }
    
    /**
     * Get a random model definition weighted by probability
     */
    getRandomModel() {
        // Calculate total probability
        const totalProbability = this.models.reduce((sum, m) => sum + (m.probability || 0), 0);
        
        // Pick a random value between 0 and total
        let random = this.seededRandom() * totalProbability;
        
        // Find which model this falls into
        for (let model of this.models) {
            random -= (model.probability || 0);
            if (random <= 0) {
                return model;
            }
        }
        
        // Fallback (shouldn't happen)
        return this.models[0];
    }
    
    /**
     * Get a random position (seed-based)
     */
    getRandomPosition(minX, maxX, minZ, maxZ, yFixed) {
        return {
            x: minX + this.seededRandom() * (maxX - minX),
            y: yFixed,
            z: minZ + this.seededRandom() * (maxZ - minZ)
        };
    }
    
    /**
     * Get random rotation based on object type (seed-based)
     */
    getRandomRotation(rotationMode) {
        if (rotationMode === 'y-only') {
            // Only Y rotation (heading)
            return {
                x: 0,
                y: this.seededRandom() * Math.PI * 2,
                z: 0
            };
        } else if (rotationMode === '3d') {
            // Full 3D rotation for barrel and bottle
            return {
                x: this.seededRandom() * Math.PI * 2,
                y: this.seededRandom() * Math.PI * 2,
                z: this.seededRandom() * Math.PI * 2
            };
        } else {
            // Fallback
            return { x: 0, y: 0, z: 0 };
        }
    }
    
    /**
     * Spawn a single random floating object
     */
    async spawnRandomObject(position, objectIndex = null) {
        const modelDef = objectIndex !== null && objectIndex < this.models.length 
            ? this.models[objectIndex]
            : this.getRandomModel();
        
        const mesh = await this.loadMesh(modelDef.file);
        if (!mesh) return null;
        
        // Determine object type and create appropriate class
        const objectName = `${modelDef.name} [Floating]`;
        let obj;
        
        if (modelDef.type === 'ship' || modelDef.type === 'boat') {
            // Create ship with AI
            obj = new Ship(this.renderer, this.material, mesh, objectName);
            obj.speed = 0;//0.1 + this.seededRandom() * 0.5;  // Seed-based speed: 5-15 units/sec
            obj.heading = this.seededRandom() * Math.PI * 2;  // Random initial heading
        } else {
            // Create floating debris
            obj = new FloatingObject(this.renderer, this.material, mesh, objectName);
            obj.speed = 0.2 + this.seededRandom() * 0.3;  // Drift speed: 0.2-0.5 units/sec
            obj.avoidanceRadius = 2.0;
        }
        
        // Set position with custom Y offset
        obj.transform.position.set(
            position.x, 
            position.y + (modelDef.yOffset || 0), 
            position.z
        );
        
        // Set scale
        obj.transform.scale.set(modelDef.scale, modelDef.scale, modelDef.scale);
        
        // Set rotation based on model's rotationMode
        const rotation = this.getRandomRotation(modelDef.rotationMode);
        obj.transform.rotation.set(rotation.x, rotation.y, rotation.z);
        
        // Add to scene
        this.scene.push(obj);
        
        return obj;
    }
    
    /**
     * Spawn multiple random floating objects
     */
    async spawnMany(count, bounds, yFixed = -7) {
        const spawned = [];
        
        for (let i = 0; i < count; i++) {
            const position = this.getRandomPosition(
                bounds.minX, bounds.maxX,
                bounds.minZ, bounds.maxZ,
                yFixed
            );
            
            const obj = await this.spawnRandomObject(position);
            if (obj) spawned.push(obj);
        }
        
        return spawned;
    }
    
    /**
     * Get list of available models
     */
    getAvailableModels() {
        return this.models.map((m, idx) => ({
            index: idx,
            name: m.name,
            file: m.file,
            type: m.type,
            rotationMode: m.rotationMode,
            yOffset: m.yOffset,
            probability: m.probability
        }));
    }
    
    /**
     * Clear all spawned objects (optional)
     */
    clearAllSpawned() {
        // Note: This assumes spawned objects are the last N items in scene
        // A more robust approach would track spawned objects separately
    }
}
