import { GameObject } from './Engine/Core/GameObject.js';
import { Time } from './Engine/Core/TimeManager.js';

/**
 * Ship - AI-controlled vessel that moves forward and avoids obstacles
 * Steers within bounds and respects other ships' space
 */
export class Ship extends GameObject {
    constructor(renderer, material, mesh, name) {
        super(renderer, material, mesh, name);
        
        // Movement
        this.velocity = { x: 0, y: 0, z: 0 };
        this.forwardDirection = { x: 0, y: 0, z: 0 };  // Direction ship is heading
        this.speed = 0;  // Individual ship speed
        this.heading = 0;  // Rotation in radians (Y-axis)
        
        // Avoidance
        this.avoidanceRadius = 5.0;
        this.avoidanceForce = 1.0;
        this.viewRadius = 20.0;  // How far ahead ship looks for obstacles
        this.maxTurnSpeed = Math.PI * 0.5;  // Max radians per second
        
        // Steering
        this.targetHeading = Math.random() * Math.PI * 2;  // Initial random heading
        this.preferredDirection = { x: 0, y: 0, z: 1 };
        
        // Wandering behavior for realistic ship movement
        this.wanderHeading = this.targetHeading;  // Current wandering goal
        this.steeringInfluence = 0.0;  // Smoothly changes heading for natural curves
        this.boundsBuffer = 15.0;  // Distance from bounds to consider turning back
        
        // Flocking/schooling behavior
        this.centerAttraction = 0.3;  // Pull towards center (0,0)
        this.cohesionRadius = 30.0;  // Radius to detect nearby ships for grouping
        this.separationRadius = 8.0;  // Radius for keeping distance from other ships
        this.cohesionWeight = 0.4;  // Weight for ship grouping
        this.separationWeight = 0.4;  // Weight for ship separation
        
        // Turn speed is controlled by ship speed (faster ships turn faster)
        // Turn rate = (speed / 10.0) * PI radians per second
        // At speed 10: π radians/sec = 180° per second = one full rotation in 2 seconds
        // At speed 5: π/2 radians/sec = 90° per second = one full rotation in 4 seconds
    }
    
    /**
     * Update ship position and heading
     */
    update(deltaTime, bounds, allObjects) {
        // Update wandering behavior to add randomness
        this.updateWandering(deltaTime, bounds);
        
        // Calculate desired heading based on avoidance, bounds, and wandering
        this.updateSteering(allObjects, bounds);
        
        // Smoothly turn towards target heading - turn speed is based on ship speed
        // Faster ships turn faster, slower ships make gradual curves
        // Speed-based turn rate ensures natural movement at any velocity
        const speedBasedTurnRate = (this.speed / 10.0) * Math.PI;  // Radians per second
        this.heading = this.lerpAngle(this.heading, this.targetHeading, speedBasedTurnRate * deltaTime);
        
        // Update forward direction based on heading
        this.forwardDirection.x = Math.sin(this.heading);
        this.forwardDirection.z = Math.cos(this.heading);
        
        // Calculate velocity
        this.velocity.x = this.forwardDirection.x * this.speed;
        this.velocity.z = this.forwardDirection.z * this.speed;
        
        // Update position
        this.transform.position.x += this.velocity.x * deltaTime;
        this.transform.position.z += this.velocity.z * deltaTime;
        
        // Enforce strict bounds
        this.enforceBounds(bounds);
        
        // Update visual heading (Y rotation)
        this.transform.rotation.y = this.heading;
    }
    
    /**
     * Update wandering behavior - gradually drift the wander heading over time
     * This creates long, slow arcs rather than discrete direction changes
     * Uses Time.time for smooth continuous oscillation
     */
    updateWandering(deltaTime, bounds) {
        // Gradually change steering influence based on a slow sine wave
        // Uses Time.time for frame-rate independent smooth curves
        // Completes one full oscillation every ~10 seconds
        this.steeringInfluence = Math.sin(Time.time * 0.628) * 0.5;  // 2π/10 ≈ 0.628
        
        // Very slowly drift the wander heading (one full rotation over ~2 minutes)
        // Frame-rate independent via Time.time
        this.wanderHeading += (Math.random() - 0.5) * 0.001 * deltaTime;
    }
    
    /**
     * Calculate steering to avoid obstacles and stay in bounds
     * Uses speed-based turning arcs
     */
    updateSteering(allObjects, bounds) {
        // Check if there are nearby ships to avoid
        const shipNearby = this.isShipNearby(allObjects);
        
        if (shipNearby) {
            // Active collision avoidance: get heading to avoid the nearby ship
            const avoidanceHeading = this.calculateAvoidanceHeading(allObjects);
            this.targetHeading = avoidanceHeading;
        } else {
            // No immediate collision threat: blend multiple behaviors
            const centerHeading = this.calculateCenterAttraction();  // Pull towards (0,0)
            const cohesionHeading = this.calculateCohesion(allObjects);  // Move towards nearby ships
            const separationHeading = this.calculateSeparation(allObjects);  // Push away from others
            const boundsHeading = this.calculateBoundsHeading(bounds);  // Stay in bounds
            
            let targetHeading;
            
            // Priority: Bounds > Cohesion/Separation > Center > Wander
            if (boundsHeading !== null) {
                // Near bounds: steer towards center
                targetHeading = boundsHeading;
            } else if (cohesionHeading !== null || separationHeading !== null) {
                // Near other ships: blend cohesion and separation
                let blendX = 0;
                let blendZ = 0;
                
                if (cohesionHeading !== null) {
                    blendX += Math.sin(cohesionHeading) * this.cohesionWeight;
                    blendZ += Math.cos(cohesionHeading) * this.cohesionWeight;
                }
                if (separationHeading !== null) {
                    blendX += Math.sin(separationHeading) * this.separationWeight;
                    blendZ += Math.cos(separationHeading) * this.separationWeight;
                }
                
                // Add center attraction (weak)
                blendX += Math.sin(centerHeading) * 0.1;
                blendZ += Math.cos(centerHeading) * 0.1;
                
                targetHeading = Math.atan2(blendX, blendZ);
            } else {
                // Far from other ships: blend center attraction with wander
                const baseHeading = this.wanderHeading;
                const influenceAmount = this.steeringInfluence * 0.2;
                
                let blendX = Math.sin(baseHeading + influenceAmount) * 0.7;
                let blendZ = Math.cos(baseHeading + influenceAmount) * 0.7;
                
                blendX += Math.sin(centerHeading) * this.centerAttraction;
                blendZ += Math.cos(centerHeading) * this.centerAttraction;
                
                targetHeading = Math.atan2(blendX, blendZ);
            }
            
            this.targetHeading = targetHeading;
        }
    }
    
    /**
     * Check if any ship is nearby
     */
    isShipNearby(allObjects) {
        if (!allObjects || !Array.isArray(allObjects)) return false;
        
        const detectionRadius = this.viewRadius * 1.5;
        
        for (let other of allObjects) {
            if (other === this || !other.transform) continue;
            if (other.constructor.name !== 'Ship') continue;  // Only avoid other ships
            
            const dx = other.transform.position.x - this.transform.position.x;
            const dz = other.transform.position.z - this.transform.position.z;
            const distSq = dx * dx + dz * dz;
            
            if (distSq < detectionRadius * detectionRadius) {
                return true;
            }
        }
        return false;
    }
    
    /**
     * Calculate heading towards center (0, 0)
     * Prevents ships from drifting too far away
     */
    calculateCenterAttraction() {
        const pos = this.transform.position;
        const toCenter = { x: -pos.x, z: -pos.z };
        const distToCenter = Math.sqrt(toCenter.x * toCenter.x + toCenter.z * toCenter.z);
        
        if (distToCenter < 0.1) return Math.atan2(0, 1);
        
        return Math.atan2(toCenter.x / distToCenter, toCenter.z / distToCenter);
    }
    
    /**
     * Calculate cohesion heading - move towards nearby ships
     * Returns null if no nearby ships
     */
    calculateCohesion(allObjects) {
        if (!allObjects || !Array.isArray(allObjects)) return null;
        
        let nearbyShips = [];
        const pos = this.transform.position;
        
        for (let other of allObjects) {
            if (other === this || !other.transform) continue;
            if (other.constructor.name !== 'Ship') continue;
            
            const dx = other.transform.position.x - pos.x;
            const dz = other.transform.position.z - pos.z;
            const distSq = dx * dx + dz * dz;
            
            if (distSq < this.cohesionRadius * this.cohesionRadius && distSq > 0.01) {
                nearbyShips.push({ dx, dz, dist: Math.sqrt(distSq) });
            }
        }
        
        if (nearbyShips.length === 0) return null;
        
        // Calculate average direction to all nearby ships
        let avgX = 0;
        let avgZ = 0;
        for (let ship of nearbyShips) {
            avgX += ship.dx / ship.dist;
            avgZ += ship.dz / ship.dist;
        }
        avgX /= nearbyShips.length;
        avgZ /= nearbyShips.length;
        
        const avgDist = Math.sqrt(avgX * avgX + avgZ * avgZ);
        if (avgDist < 0.1) return null;
        
        return Math.atan2(avgX / avgDist, avgZ / avgDist);
    }
    
    /**
     * Calculate separation heading - push away from nearby ships
     * Returns null if no nearby ships to separate from
     */
    calculateSeparation(allObjects) {
        if (!allObjects || !Array.isArray(allObjects)) return null;
        
        let separationForce = { x: 0, z: 0 };
        const pos = this.transform.position;
        let hasNearby = false;
        
        for (let other of allObjects) {
            if (other === this || !other.transform) continue;
            if (other.constructor.name !== 'Ship') continue;
            
            const dx = pos.x - other.transform.position.x;
            const dz = pos.z - other.transform.position.z;
            const distSq = dx * dx + dz * dz;
            
            if (distSq < this.separationRadius * this.separationRadius && distSq > 0.01) {
                const dist = Math.sqrt(distSq);
                const strength = (this.separationRadius - dist) / this.separationRadius;
                separationForce.x += (dx / dist) * strength;
                separationForce.z += (dz / dist) * strength;
                hasNearby = true;
            }
        }
        
        if (!hasNearby) return null;
        
        const forceMag = Math.sqrt(separationForce.x * separationForce.x + separationForce.z * separationForce.z);
        if (forceMag < 0.1) return null;
        
        return Math.atan2(separationForce.x / forceMag, separationForce.z / forceMag);
    }
    
    /**
     * Calculate heading to avoid nearby objects
     */
    calculateAvoidanceHeading(allObjects) {
        let avoidX = 0;
        let avoidZ = 0;
        
        // Check objects ahead
        if (!allObjects || !Array.isArray(allObjects)) {
            return Math.atan2(this.forwardDirection.x, this.forwardDirection.z);
        }
        
        for (let other of allObjects) {
            if (other === this || !other.transform) continue;
            
            const dx = other.transform.position.x - this.transform.position.x;
            const dz = other.transform.position.z - this.transform.position.z;
            const distSq = dx * dx + dz * dz;
            
            // Only consider objects in front and within view radius
            const dotForward = dx * this.forwardDirection.x + dz * this.forwardDirection.z;
            if (dotForward < 0 || distSq > this.viewRadius * this.viewRadius) continue;
            
            const distMin = this.avoidanceRadius + (other.avoidanceRadius || 1.0);
            
            if (distSq < distMin * distMin && distSq > 0.01) {
                const dist = Math.sqrt(distSq);
                const force = this.avoidanceForce / (dist + 0.1);
                avoidX -= (dx / dist) * force;  // Avoid = move away
                avoidZ -= (dz / dist) * force;
            }
        }
        
        // Blend avoidance with current direction
        const blendX = this.forwardDirection.x * 0.7 + avoidX * 0.3;
        const blendZ = this.forwardDirection.z * 0.7 + avoidZ * 0.3;
        
        return Math.atan2(blendX, blendZ);
    }
    
    /**
     * Calculate heading to stay within bounds - turn away from edges
     * Returns null if not near bounds (allowing free wandering)
     */
    calculateBoundsHeading(bounds) {
        const pos = this.transform.position;
        
        let repelX = 0;
        let repelZ = 0;
        let isNearBound = false;
        
        // Create repulsive forces from boundaries
        const distFromMinX = pos.x - bounds.minX;
        const distFromMaxX = bounds.maxX - pos.x;
        const distFromMinZ = pos.z - bounds.minZ;
        const distFromMaxZ = bounds.maxZ - pos.z;
        
        // Push away from nearby boundaries
        if (distFromMinX < this.boundsBuffer) {
            repelX += (this.boundsBuffer - distFromMinX) / this.boundsBuffer;
            isNearBound = true;
        }
        if (distFromMaxX < this.boundsBuffer) {
            repelX -= (this.boundsBuffer - distFromMaxX) / this.boundsBuffer;
            isNearBound = true;
        }
        if (distFromMinZ < this.boundsBuffer) {
            repelZ += (this.boundsBuffer - distFromMinZ) / this.boundsBuffer;
            isNearBound = true;
        }
        if (distFromMaxZ < this.boundsBuffer) {
            repelZ -= (this.boundsBuffer - distFromMaxZ) / this.boundsBuffer;
            isNearBound = true;
        }
        
        // Only return a heading if near bounds
        if (isNearBound && (repelX !== 0 || repelZ !== 0)) {
            return Math.atan2(repelX, repelZ);
        }
        
        return null;  // Not near bounds, allow free movement
    }
    
    /**
     * Enforce bounds - wrap ships to opposite side when leaving box
     * Creates seamless toroidal space where ships never escape
     */
    enforceBounds(bounds, bounceDistance = 2.0) {
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
    
    /**
     * Linearly interpolate between two angles
     */
    lerpAngle(from, to, maxDelta) {
        let delta = this.normalizeAngle(to - from);
        delta = Math.max(-maxDelta, Math.min(maxDelta, delta));
        return from + delta;
    }
    
    /**
     * Normalize angle to -PI to PI range
     */
    normalizeAngle(angle) {
        while (angle > Math.PI) angle -= Math.PI * 2;
        while (angle < -Math.PI) angle += Math.PI * 2;
        return angle;
    }
}
