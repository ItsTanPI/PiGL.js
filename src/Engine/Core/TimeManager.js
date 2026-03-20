class TimeManager {
    constructor() {
        this.time = 0;              // Total elapsed time scaled
        this.deltaTime = 0;         // Time since last frame scaled
        this.unscaledTime = 0;      // Total elapsed time unscaled
        this.unscaledDeltaTime = 0; // Time since last frame unscaled
        this.timeScale = 1.0;       // Multiplier for time progression
        this._lastTime = 0;
        this._initialized = false;
    }

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

// Export a single instance to act as a Singleton
export const Time = new TimeManager();
