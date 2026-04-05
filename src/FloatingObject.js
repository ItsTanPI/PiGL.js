import { GameObject } from './Engine/Core/GameObject.js';
import { Time } from './Engine/Core/TimeManager.js';

/**
 * FloatingObject - Debris that drifts with ocean current
 * Rotates and bobs naturally with waves
 */
export class FloatingObject extends GameObject {
    constructor(renderer, material, mesh, name) {
        super(renderer, material, mesh, name);
        
        // Movement
        this.velocity = { x: 0, y: 0, z: 0 };
        this.currentDirection = { x: 1, y: 0, z: 0 };  // Ocean drift direction
        this.speed = 0;  // Base drift speed
        
        // Avoidance
        this.avoidanceRadius = 3.0;
        this.avoidanceForce = 0.5;
    }
    
    /**
     * Update floating object position based on ocean current
     */
    update(deltaTime, oceanDirection, oceanSpeed, bounds, allObjects) {
        // Apply ocean current drift
        const driftForce = {
            x: oceanDirection.x * oceanSpeed * this.speed,
            y: 0,
            z: oceanDirection.z * oceanSpeed * this.speed
        };
        
        // Apply avoidance from other objects
        const avoidForce = this.calculateAvoidance(allObjects);
        
        // Combine forces
        this.velocity.x = driftForce.x + avoidForce.x;
        this.velocity.z = driftForce.z + avoidForce.z;
        
        // Update position
        this.transform.position.x += this.velocity.x * deltaTime;
        this.transform.position.z += this.velocity.z * deltaTime;
        
        // Wrap around bounds if needed
        this.wrapBounds(bounds);
    }
    
    /**
     * Calculate avoidance forces from nearby objects
     */
    calculateAvoidance(allObjects) {
        const avoidForce = { x: 0, z: 0 };
        
        if (!allObjects || !Array.isArray(allObjects)) {
            return avoidForce;
        }
        
        for (let other of allObjects) {
            if (other === this || !other.transform) continue;
            
            const dx = this.transform.position.x - other.transform.position.x;
            const dz = this.transform.position.z - other.transform.position.z;
            const distSq = dx * dx + dz * dz;
            const distMin = this.avoidanceRadius + (other.avoidanceRadius || 1.0);
            
            if (distSq < distMin * distMin && distSq > 0.01) {
                const dist = Math.sqrt(distSq);
                const force = this.avoidanceForce / (dist + 0.1);
                avoidForce.x += (dx / dist) * force;
                avoidForce.z += (dz / dist) * force;
            }
        }
        
        return avoidForce;
    }
    
    /**
     * Wrap object around bounds - teleport to opposite side when leaving box
     * This keeps debris constantly inside the spawn area
     */
    wrapBounds(bounds) {
        const pos = this.transform.position;
        const width = bounds.maxX - bounds.minX;
        const depth = bounds.maxZ - bounds.minZ;
        
        // Wrap X axis: teleport to opposite side when crossing boundary
        if (pos.x > bounds.maxX) {
            pos.x = bounds.minX + (pos.x - bounds.maxX);
        } else if (pos.x < bounds.minX) {
            pos.x = bounds.maxX + (pos.x - bounds.minX);
        }
        
        // Wrap Z axis: teleport to opposite side when crossing boundary
        if (pos.z > bounds.maxZ) {
            pos.z = bounds.minZ + (pos.z - bounds.maxZ);
        } else if (pos.z < bounds.minZ) {
            pos.z = bounds.maxZ + (pos.z - bounds.minZ);
        }
    }
}
