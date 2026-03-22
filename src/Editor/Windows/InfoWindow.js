import GUI from 'lil-gui';

export class InfoWindow {
    constructor(editor, container) {
        this.editor = editor;
        this.container = container;
        this.gui = new GUI({ 
            container: container, 
            title: 'Info & Credits', 
            touchEventTarget: container,
            autoPlace: false
        });

        // Ensure lil-gui fills the container
        this.gui.domElement.style.width = '100%';
        this.gui.domElement.style.height = 'auto';

        this.info = {
            engine: 'PiGL.js',
            version: '1.0.2',
        };

        this.init();
    }

    init() {
        this.gui.add(this.info, 'engine').name('Engine').disable();
        this.gui.add(this.info, 'version').name('Version').disable();
        
        const authorObj = {
            openGithub: () => {
                window.open('https://github.com/itsTanpi', '_blank');
            }
        };
        this.gui.add(authorObj, 'openGithub').name('Made by Tanpi');
        
        const helpFolder = this.gui.addFolder('Instructions');
        const instructions = {
            move: 'WASD to move',
            look: 'Right Mouse Button to look'
        };
        helpFolder.add(instructions, 'move').name('Movement').disable();
        helpFolder.add(instructions, 'look').name('Camera').disable();

        const folder = this.gui.addFolder('Asset Credits');
        
        const creditsObj = {
            openKenney: () => {
                window.open('https://www.kenney.nl', '_blank');
            },
            openWill: () =>
            {
                window.open('https://sketchfab.com/3d-models/lowpoly-island-0a514854b7164178a6c7a69961235197', '_blank');
            }
        };
        
        folder.add(creditsObj, 'openKenney').name('Kenney (kenney.nl)');
        folder.add(creditsObj, 'openWill').name('will.nsq (Sketchfab)');
    }
}
