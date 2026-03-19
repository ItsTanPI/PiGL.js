import GUI from 'lil-gui';

export class InspectorWindow {
    constructor(editor, container) {
        this.editor = editor;
        this.container = container;
        this.gui = new GUI({ 
            container: container, 
            title: 'Inspector', 
            touchEventTarget: container,
            autoPlace: false
        });

        // Ensure lil-gui fills the container
        this.gui.domElement.style.width = '100%';
        this.gui.domElement.style.height = 'auto';

        this.selectedObject = null;
        this.refresh();
    }

    inspect(object) {
        this.selectedObject = object;
        this.refresh();
    }

    refresh() {
        // Clear children
        const children = [...this.gui.children];
        children.forEach(c => c.destroy());

        if (!this.selectedObject) {
            this.gui.add({ status: 'No selection' }, 'status').name('Object').disable();
            return;
        }

        const obj = this.selectedObject;
        const name = obj.name || 'GameObject';

        // Transform folder
        if (obj.transform) {
            const t = obj.transform;
            const folder = this.gui.addFolder(`Transform: ${name}`);
            
            const pos = folder.addFolder('Position');
            pos.add(t.position, 'x').step(0.1).listen().name('X');
            pos.add(t.position, 'y').step(0.1).listen().name('Y');
            pos.add(t.position, 'z').step(0.1).listen().name('Z');
            
            const rot = folder.addFolder('Rotation');
            rot.add(t.rotation, 'x').step(0.1).listen().name('X');
            rot.add(t.rotation, 'y').step(0.1).listen().name('Y');
            rot.add(t.rotation, 'z').step(0.1).listen().name('Z');

            const sca = folder.addFolder('Scale');
            sca.add(t.scale, 'x').step(0.1).listen().name('X');
            sca.add(t.scale, 'y').step(0.1).listen().name('Y');
            sca.add(t.scale, 'z').step(0.1).listen().name('Z');
        }

        // Material properties
        if (obj.material) {
            const matFolder = this.gui.addFolder('Material');
            matFolder.add(obj.material, 'name').name('Material Name').disable().listen();
            
            matFolder.add({ select: () => {
                if (this.editor.windows.material) {
                    this.editor.windows.material.inspect(obj.material);
                    this.editor.windows.material.container.parentElement.style.display = 'flex'; // Open window
                }
            }}, 'select').name('Open in Material Editor');
        }
    }
}
