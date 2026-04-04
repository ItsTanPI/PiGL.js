/**
 * Profiler collects frame timing and render pipeline metrics.
 * 
 * @class Profiler
 * @description Tracks frame time, CPU time, per-pass durations, and draw call counts.
 * Maintains a history of metrics for averaging/analysis. Enable/disable to control collection.
 */
export class Profiler {
    /**
     * Creates a new Profiler instance.
     * @constructor
     * @param {Object} [gameContext] - Optional game context for memory tracking
     */
    constructor(gameContext = null) {
        /** @type {Object|null} Game context for accessing render queue and textures */
        this.gameContext = gameContext;
        /** @type {boolean} Is profiling currently enabled? */
        this.enabled = false;
        /** @type {boolean} Are DevTools markers enabled? */
        this.devToolsEnabled = false;
        /** @type {Object} Current frame metrics. */
        this.metrics = {
            startTime: 0,
            endTime: 0,
            frameTime: 0,
            cpuTime: 0,
            passes: [],
            memory: {
                vertices: 0,
                renderTargets: 0,
                textures: 0,
                total: 0
            }
        };
        /** @type {number} Timestamp of last frame start (for FPS calculation). */
        this.lastFrameStart = 0;
        /** @type {number} Calculated frames per second. */
        this.fps = 0;
        
        /** @type {number[]} History of FPS for averaging. */
        this.fpsHistory = [];

        /** @type {number[]} History of frametimes (delta) for graphs. */
        this.frameTimeHistory = [];

        /** @type {number[]} History of CPU times for averaging. */
        this.history = [];
        /** @type {number} Maximum entries to keep in history. */
        this.maxHistory = 300;
        /** @type {Object|null} Currently active pass being profiled. */
        this.currentPass = null;
    }

    /**
     * Enables profiling data collection.
     * @method enable
     * @returns {void}
     */
    enable() {
        this.enabled = true;
    }

    /**
     * Disables profiling and clears collected data.
     * @method disable
     * @returns {void}
     */
    disable() {
        this.enabled = false;
        this.metrics.passes = [];
    }

    /**
     * Marks the beginning of a frame. Call once per animation frame.
     * @method beginFrame
     * @returns {void}
     * @description Updates FPS calculation based on elapsed time since last beginFrame.
     */
    beginFrame() {
        if (!this.enabled) return;        
        const now = performance.now();
        if (this.lastFrameStart > 0) {
            const delta = now - this.lastFrameStart;
            this.fps = 1000 / delta;
            
            this.fpsHistory.push(this.fps);
            if (this.fpsHistory.length > 300) {
                this.fpsHistory.shift();
            }

            this.frameTimeHistory.push(delta);
            if (this.frameTimeHistory.length > 300) {
                this.frameTimeHistory.shift();
            }
        }
        this.lastFrameStart = now;
        this.metrics.startTime = now;
        this.metrics.passes = [];
    }

    /**
     * Marks the end of a frame and records CPU time.
     * @method endFrame
     * @returns {void}
     */
    endFrame() {
        console.log();
        
        if (!this.enabled) return;
        this.metrics.endTime = performance.now();
        this.metrics.cpuTime = this.metrics.endTime - this.metrics.startTime;
        this.addToHistory(this.metrics.cpuTime);
    }

    /**
     * Marks the beginning of a render pass.
     * @method beginPass
     * @param {string} passName - Name/label for the pass (e.g., 'ObjectPass', 'LightingPass').
     * @returns {void}
     */
    beginPass(passName) {
        
        if (!this.enabled) return;
        const passMetric = {
            id: this.metrics.passes.length,
            name: passName,
            startTime: performance.now(),
            endTime: 0,
            duration: 0,
            drawCalls: []
        };
        this.metrics.passes.push(passMetric);
        this.currentPass = passMetric;
    }

    /**
     * Marks the end of the current render pass.
     * @method endPass
     * @returns {void}
     */
    endPass() {
        if (!this.enabled || !this.currentPass) return;
        this.currentPass.endTime = performance.now();
        this.currentPass.duration = this.currentPass.endTime - this.currentPass.startTime;
        this.addPassToHistory(this.currentPass.name, this.currentPass.duration);
        this.currentPass = null;
    }

    addPassToHistory(passName, duration) {
        if (!this.passHistory) this.passHistory = {};
        if (!this.passHistory[passName]) {
            this.passHistory[passName] = [];
        }
        this.passHistory[passName].push(duration);
        // Keep up to 300 to allow smooth zooming to higher averages
        if (this.passHistory[passName].length > 300) {
            this.passHistory[passName].shift();
        }
    }

    /**
     * Records a single draw call in the current pass.
     * @method recordDrawCall
     * @param {string} objectName - Name of the drawn object.
     * @param {string} materialName - Name of the material used.
     * @param {number} shaderNum - Identifier for the shader program.
     * @param {number} startTime - Draw start timestamp (ms).
     * @param {number} endTime - Draw end timestamp (ms).
     * @returns {void}
     */
    recordDrawCall(objectName, materialName, shaderNum, startTime, endTime, vertices = 0) {
        if (!this.enabled || !this.currentPass) return;
        this.currentPass.drawCalls.push({
            object: objectName,
            material: materialName,
            shader: shaderNum,
            duration: endTime - startTime,
            vertices: vertices
        });
    }

    addToHistory(time) {
        this.history.push(time);
        if (this.history.length > this.maxHistory) {
            this.history.shift();
        }
    }

    /**
     * Calculate total GPU memory usage from game assets.
     * @returns {Object} Memory breakdown { vertices, renderTargets, textures, total }
     */
    updateMemoryMetrics() {
        let vertexMemory = 0;
        let renderTargetMemory = 0;
        let textureMemory = 0;

        // Vertex mesh memory from draw calls
        if (this.metrics && this.metrics.passes) {
            this.metrics.passes.forEach(pass => {
                pass.drawCalls.forEach(dc => {
                    vertexMemory += (dc.vertices || 0) * 32; // 32 bytes per vertex
                });
            });
        }

        // RenderTarget memory
        if (this.gameContext && this.gameContext.renderQueue && this.gameContext.renderQueue.passes) {
            this.gameContext.renderQueue.passes.forEach(pass => {
                if (pass.renderTarget && pass.renderTarget.getMemorySize) {
                    const rtMem = pass.renderTarget.getMemorySize();
                    renderTargetMemory += rtMem;
                }
            });
        }

        // Texture memory - check multiple possible texture storage locations
        if (this.gameContext) {
            // Try game.textures
            if (this.gameContext.textures) {
                for (const key in this.gameContext.textures) {
                    const texture = this.gameContext.textures[key];
                    if (texture && texture.getMemorySize) {
                        const texMem = texture.getMemorySize();
                        if (texMem > 0) {
                            textureMemory += texMem;
                        }
                    }
                }
            }
            // Try game.textureCache
            if (this.gameContext.textureCache) {
                for (const key in this.gameContext.textureCache) {
                    const texture = this.gameContext.textureCache[key];
                    if (texture && texture.getMemorySize) {
                        const texMem = texture.getMemorySize();
                        if (texMem > 0) {
                            textureMemory += texMem;
                        }
                    }
                }
            }
            // Also try game.assets.textures
            if (this.gameContext.assets && this.gameContext.assets.textures) {
                for (const key in this.gameContext.assets.textures) {
                    const texture = this.gameContext.assets.textures[key];
                    if (texture && texture.getMemorySize) {
                        const texMem = texture.getMemorySize();
                        if (texMem > 0) {
                            textureMemory += texMem;
                        }
                    }
                }
            }
        }

        const totalMemory = vertexMemory + renderTargetMemory + textureMemory;

        this.metrics.memory = {
            vertices: vertexMemory,
            renderTargets: renderTargetMemory,
            textures: textureMemory,
            total: totalMemory
        };

        return this.metrics.memory;
    }
}

export class ProfilerInstrumenter {
    static attach(renderQueue, renderer, gameContext = null) {
        const profiler = new Profiler(gameContext);
        
        // 1. Queue Instrumentation
        const originalExecute = renderQueue.execute.bind(renderQueue);
        renderQueue.execute = function(rendererCtx, scene, camera) {
            if (profiler.enabled) profiler.beginFrame();
            
            // Loop passes to instrument them if new
            // We check this every frame to catch new dynamic passes
            const passes = renderQueue.passes || [];
            for (let i = 0; i < passes.length; i++) {
                const pass = passes[i];
                if (!pass.__profilerInstrumented) {
                    const originalPassExecute = pass.execute.bind(pass);
                    
                    pass.execute = function(r, s, c) {
                        const passName = pass.name || 'Unnamed Pass';
                        if (profiler.enabled) {
                            profiler.beginPass(passName);
                            r.currentPassName = passName;
                            if (profiler.devToolsEnabled) {
                                performance.mark(`PassStart-${passName}`);
                            }
                        }
                        originalPassExecute(r, s, c);
                        if (profiler.enabled) {
                            profiler.endPass();
                            r.currentPassName = null;
                            if (profiler.devToolsEnabled) {
                                performance.mark(`PassEnd-${passName}`);
                                performance.measure(`Pass: ${passName}`, `PassStart-${passName}`, `PassEnd-${passName}`);
                                performance.clearMarks(`PassStart-${passName}`);
                                performance.clearMarks(`PassEnd-${passName}`);
                            }
                        }
                    };
                    
                    pass.__profilerInstrumented = true;
                }
            }
            
            originalExecute(rendererCtx, scene, camera);
            
            if (profiler.enabled) {
                profiler.endFrame();
                profiler.updateMemoryMetrics();
            }
        };

        // 2. Renderer Draw Instrumentation
        const originalDraw = renderer.draw.bind(renderer);
        renderer.draw = function(gameObject, camera, target, material) {
            if (!profiler.enabled) {
                originalDraw(gameObject, camera, target, material);
                return;
            }

            const objName = gameObject ? gameObject.name : 'Unknown';
            const matName = material ? material.name : 'Unknown';
            
            if (profiler.devToolsEnabled) {
                performance.mark(`DrawStart-${objName}`);
            }

            const t0 = performance.now();
            originalDraw(gameObject, camera, target, material);
            const t1 = performance.now();

            if (profiler.devToolsEnabled) {
                performance.mark(`DrawEnd-${objName}`);
                performance.measure(`Draw: ${objName} [${matName}]`, `DrawStart-${objName}`, `DrawEnd-${objName}`);
                performance.clearMarks(`DrawStart-${objName}`);
                performance.clearMarks(`DrawEnd-${objName}`);
            }

            const vCount = (gameObject && gameObject.mesh) ? gameObject.mesh.count : 6;
            profiler.recordDrawCall(objName, matName, 0, t0, t1, vCount);
        };

        // Default disabled to save performance
        profiler.disable();
        return profiler;
    }
}
