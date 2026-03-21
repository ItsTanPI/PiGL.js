/**
 * TimeManager is a singleton utility for tracking frame time and delta time.
 * 
 * @class TimeManager
 * @description Provides scaled and unscaled time values for frame-based animation and physics.
 * A single instance is exported as `Time` and should be updated each frame with the
 * requestAnimationFrame timestamp.
 */
class TimeManager {
    /**
     * Creates a new TimeManager instance.
     * @constructor
     */
    constructor() {
        /** @type {number} Total elapsed scaled time in seconds. */
        this.time = 0;
        /** @type {number} Time since last frame (scaled by timeScale) in seconds. */
        this.deltaTime = 0;
        /** @type {number} Total elapsed unscaled time in seconds. */
        this.unscaledTime = 0;
        /** @type {number} Time since last frame (unscaled) in seconds. */
        this.unscaledDeltaTime = 0;
        /** @type {number} Multiplier for time progression; 0 = paused, 2 = double speed. */
        this.timeScale = 1.0;
        /** @private */
        this._lastTime = 0;
        /** @private */
        this._initialized = false;
    }

    /**
     * Updates time tracking; call once per animation frame.
     * 
     * @method update
     * @param {number} now - The timestamp from requestAnimationFrame (in milliseconds).
     * @returns {void}
     * 
     */
    update(now) {
        // 'now' comes from requestAnimationFrame (in milliseconds)
        const nowInSeconds = now * 0.001;

        if (!this._initialized) {
            this._lastTime = nowInSeconds;
            this._initialized = true;
        }

        this.unscaledDeltaTime = nowInSeconds - this._lastTime;
        this.unscaledTime += this.unscaledDeltaTime;

        this.deltaTime = this.unscaledDeltaTime * this.timeScale;
        this.time += this.deltaTime;

        this._lastTime = nowInSeconds;
    }
}

/** @type {TimeManager} Singleton time instance; update each frame. */
export const Time = new TimeManager();
