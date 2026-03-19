import GUI from 'lil-gui';

export class HierarchyWindow {
    constructor(editor, container) {
        this.editor = editor;
        this.gui = new GUI({ 
            container: container, 
            title: 'Hierarchy', 
            touchEventTarget: container,
            autoPlace: false
        });
        
        // Ensure lil-gui fills the container
        this.gui.domElement.style.width = '100%';
        this.gui.domElement.style.height = 'auto';
        
        this.init();
        
        // Refresh periodically since objects load asynchronously
        setInterval(() => this.refresh(), 1000);
    }

    refresh() {
        const objects = this.editor.game.scene || [];
        // Only refresh if count changed or GUI is empty
        if (this.lastCount !== objects.length) {
             this.lastCount = objects.length;
             this.init();
        }
    }

    init() {
        const children = [...this.gui.children];
        children.forEach(c => c.destroy());

        const camera = this.editor.game.camera;
        if (camera) {
            this.gui.add({ select: () => this.editor.selectObject(camera) }, 'select').name('Main Camera');
        }
        
        const objects = this.editor.game.scene || [];
        objects.forEach((obj, index) => {
            const name = obj.name || `Object ${index}`;
            this.gui.add({ select: () => this.editor.selectObject(obj) }, 'select').name(name);
        });
    }
}
