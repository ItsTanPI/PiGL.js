import GUI from 'lil-gui';

export class WorldWindow {
    constructor(editor, container) {
        this.editor = editor;
        this.container = container;
        this.gui = new GUI({
            container: container,
            title: 'World',
            touchEventTarget: container,
            autoPlace: false
        });

        this.gui.domElement.style.width = '100%';
        this.gui.domElement.style.height = 'auto';

        const seedValue = (this.editor.game && this.editor.game.floatingSpawnConfig)
            ? this.editor.game.floatingSpawnConfig.seed
            : 0;

        this.state = {
            seed: Number.isFinite(seedValue) ? seedValue : 0,
            respawn: () => this.respawnWithSeed(this.state.seed),
            randomize: () => {
                const randomSeed = Math.floor(Math.random() * 1000000);
                this.state.seed = randomSeed;
                this.seedController && this.seedController.updateDisplay();
                this.respawnWithSeed(randomSeed);
            }
        };

        this.init();
    }

    init() {
        this.seedController = this.gui.add(this.state, 'seed', 0, 1000000, 1).name('Seed');
        this.seedController.listen();

        // Movement speed control (syncs with cameraController if available)
        const initialMoveSpeed = (this.editor.game && this.editor.game.cameraController)
            ? this.editor.game.cameraController.moveSpeed
            : 10.0;
        this.state.moveSpeed = initialMoveSpeed;
        this.moveSpeedController = this.gui.add(this.state, 'moveSpeed', 1, 100, 0.5).name('Move Speed');
        this.moveSpeedController.onChange((v) => {
            try {
                if (this.editor.game && this.editor.game.cameraController) {
                    this.editor.game.cameraController.moveSpeed = v;
                }
            } catch (err) {
                console.warn('Failed to set camera moveSpeed', err);
            }
        });

        this.gui.add(this.state, 'respawn').name('Respawn');
        this.gui.add(this.state, 'randomize').name('Random Seed');
        const instructions = {
            Random: 'Random reroll',
        };
        this.gui.add(instructions, 'Random').name('Random').disable();
    }

    async respawnWithSeed(seed) {
        if (!this.editor.game || typeof this.editor.game.respawnWithSeed !== 'function') return;
        await this.editor.game.respawnWithSeed(seed);
    }
}
