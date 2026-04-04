import GUI from 'lil-gui';
import { Camera } from '../../Engine/Rendering/Camera.js';

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

        // Basic Info
        const infoFolder = this.gui.addFolder('Object Settings');
        infoFolder.add(obj, 'name').name('Name').listen();
        if (typeof obj.active !== 'undefined') {
            infoFolder.add(obj, 'active').name('Active').listen();
        }

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

        // Camera properties (FOV, Ortho, etc.)
        if (obj instanceof Camera) {
            const camFolder = this.gui.addFolder('Camera Settings');
            
            camFolder.add(obj, 'orthographic').name('Orthographic').onChange(() => obj.updateProjection());
            
            const perspFolder = camFolder.addFolder('Perspective');
            perspFolder.add(obj, 'fov', 0.1, 3.14).step(0.01).name('FOV').onChange(() => obj.updateProjection());
            
            const orthoFolder = camFolder.addFolder('Orthographic');
            orthoFolder.add(obj, 'orthoSize', 0.1, 100.0).step(1.0).name('Size (Half Height)').onChange(() => obj.updateProjection());

            camFolder.add(obj, 'near', 0.01, 10.0).step(0.01).name('Near Plane').onChange(() => obj.updateProjection());
            camFolder.add(obj, 'far', 10.1, 1000.0).step(1.0).name('Far Plane').onChange(() => obj.updateProjection());
            
            perspFolder.open();
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
        
        // Children list
        if (obj.transform && obj.transform.children && obj.transform.children.length > 0) {
            const childFolder = this.gui.addFolder('Children');
            obj.transform.children.forEach((childTransform, index) => {
                if (childTransform.gameObject) {
                    const child = childTransform.gameObject;
                    const childName = child.name || `Child ${index}`;
                    childFolder.add({ select: () => this.editor.selectObject(child) }, 'select').name(childName);
                }
            });
            childFolder.open();
        }
    }
}
