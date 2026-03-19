import GUI from 'lil-gui';

export class MaterialWindow {
    constructor(editor, container) {
        this.editor = editor;
        this.container = container;
        this.gui = new GUI({ 
            container: container, 
            title: 'Material Editor', 
            touchEventTarget: container,
            autoPlace: false
        });

        // Ensure lil-gui fills the container
        this.gui.domElement.style.width = '100%';
        this.gui.domElement.style.height = 'auto';

        this.selectedMaterial = null;
        this.init();
    }

    init() {
        this.refreshList();
    }

    refreshList() {
        // Clear all
        const children = [...this.gui.children];
        children.forEach(c => c.destroy());
        this.propertyFolder = null; // Important: Clear reference to destroyed folder

        const materials = this.editor.game.materials || {};
        const matFolder = this.gui.addFolder('Project Materials');
        
        for (const name in materials) {
            const mat = materials[name];
            matFolder.add({ select: () => this.inspect(mat) }, 'select').name(name);
        }

        if (this.selectedMaterial) {
            this.drawMaterialProperties(this.selectedMaterial);
        } else {
            this.gui.add({ info: 'Select a material' }, 'info').name('Status').disable();
        }
    }

    inspect(material) {
        this.selectedMaterial = material;
        this.refreshList();
    }

    drawMaterialProperties(material) {
        let folder;
        if (!this.propertyFolder) {
            folder = this.gui.addFolder(`Properties: ${material.name || 'Unnamed'}`);
            this.propertyFolder = folder;
        } else {
            folder = this.propertyFolder;
            const children = [...folder.children];
            children.forEach(c => c.destroy());
            folder.title(`Properties: ${material.name || 'Unnamed'}`);
        }
        
        if (!material.uniforms) return;

        for (const name in material.uniforms) {
            const uniform = material.uniforms[name];
            const value = uniform.value;
            const type = uniform.type; // Access type if needed

            // Handle Arrays (Vectors/Colors)
            if (Array.isArray(value) || value instanceof Float32Array) {
                // Color Helper (heuristic: name contains "Color" or length 3/4)
                const isColor = name.toLowerCase().includes('color');
                
                if (isColor && (value.length === 3 || value.length === 4)) {
                    // Bind directly to the uniform object's 'value' property
                    // This ensures lil-gui mutates the actual Float32Array used by the renderer
                    folder.addColor(uniform, 'value').name(name).listen();
                } else {
                    // Vector Breakdown
                    const vecFolder = folder.addFolder(name);
                    const labels = ['x', 'y', 'z', 'w'];
                    for (let i = 0; i < value.length; i++) {
                        // Use a proxy to bind directly to the index
                        const proxy = {
                            get val() { return value[i]; },
                            set val(v) { value[i] = v; }
                        };
                        vecFolder.add(proxy, 'val').step(0.01).name(labels[i] || `[${i}]`).listen();
                    }
                }
            } 
            // Handle Single Numbers (Floats)
            else if (typeof value === 'number') {
                const proxy = {
                    get val() { return uniform.value; }, // Access from source object
                    set val(v) { uniform.value = v; }
                };
                
                // Try to guess range based on name
                let controller = folder.add(proxy, 'val').name(name);
                
                // Heuristics for sliders
                if (name.toLowerCase().includes('threshold') || name.toLowerCase().includes('factor')) {
                    controller = controller.min(0).max(1).step(0.01);
                } else {
                    controller = controller.step(0.01);
                }
                
                controller.listen();
            } 
            // Handle Textures
            else if (value instanceof WebGLTexture) {
                folder.add({ info: 'Texture' }, 'info').name(name).disable();
            }
        }
    }
}
