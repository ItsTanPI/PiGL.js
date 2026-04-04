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

        const lightCamera = this.editor.game.lightCamera;
        if (lightCamera) {
            this.gui.add({ select: () => this.editor.selectObject(lightCamera) }, 'select').name('Light Camera');
        }
        
        // Recursive function to add object and its children
        const addObjectAndChildren = (obj, parentFolder = null) => {
            // Skip null objects
            if (!obj) return;
            
            const folder = parentFolder || this.gui;
            const name = obj.name || `Object`;
            
            // Add select button for this object
            folder.add({ select: () => this.editor.selectObject(obj) }, 'select').name(name);
            
            // Add children recursively
            if (obj.transform && obj.transform.children && obj.transform.children.length > 0) {
                const childFolder = folder.addFolder(`${name} Children`);
                for (const childTransform of obj.transform.children) {
                    if (childTransform.gameObject) {
                        addObjectAndChildren(childTransform.gameObject, childFolder);
                    }
                }
            }
        };
        
        const objects = this.editor.game.scene || [];
        objects.forEach((obj, index) => {
            if (obj) {  // Only process non-null objects
                addObjectAndChildren(obj);
            }
        });
}
}
