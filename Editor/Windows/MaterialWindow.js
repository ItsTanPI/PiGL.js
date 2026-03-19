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
        const propFolder = this.gui.addFolder(`Properties: ${material.name || 'Unnamed'}`);
        
        if (!material.uniforms) return;

        for (const name in material.uniforms) {
            const uniform = material.uniforms[name];
            const value = uniform.value;
            const type = uniform.type;

            // Simple logic to determine how to show the uniform
            if (Array.isArray(value) || value instanceof Float32Array) {
                if (value.length === 3 || value.length === 4) {
                    // Likely a color or vector
                    const proxy = {
                        get color() { return [value[0], value[1], value[2]]; },
                        set color(v) { 
                            value[0] = v[0]; 
                            value[1] = v[1]; 
                            value[2] = v[2]; 
                        }
                    };
                    propFolder.addColor(proxy, 'color').name(name);
                } else {
                    // Generic array/vector
                    const vecFolder = propFolder.addFolder(name);
                    for (let i = 0; i < value.length; i++) {
                        vecFolder.add(value, i).step(0.01).name(`[${i}]`);
                    }
                }
            } else if (typeof value === 'number') {
                propFolder.add(material.uniforms[name], 'value').step(0.01).name(name);
            } else if (value instanceof WebGLTexture) {
                propFolder.add({ info: 'Texture Bound' }, 'info').name(name).disable();
            }
        }
    }
}
