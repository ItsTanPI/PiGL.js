import { EditorWindow } from './EditorWindow.js';

export class MaterialWindow extends EditorWindow {
    constructor(editor) {
        super(editor, 'Materials');
        this.refresh();
    }
    
    refresh() {
        while (this.folder.children.length > 0) {
            this.folder.children[0].destroy();
        }
        const materials = this.editor.game.materials || {};
        
        for (const [name, mat] of Object.entries(materials)) {
             const btn = { [name]: () => this.inspectMaterial(mat, name) };
             this.folder.add(btn, name);
        }
    }

    inspectMaterial(mat, name) {
        // Reuse Inspector window or verify usage?
        // User asked for material editor.
        // Let's create a dedicated properties sub-section or temporary window
        
        // For now, let's add a subfolder "Active Material" 
        if (this.activeMatFolder) this.activeMatFolder.destroy();
        this.activeMatFolder = this.folder.addFolder(name);
        
        const uniforms = mat.uniforms;
        for (const uName in uniforms) {
            const u = uniforms[uName];
            if (u.value instanceof WebGLTexture) continue;

            // Simplified logic from previous implementation
            const isColor = uName.toLowerCase().includes('color');
            
            if (isColor && (u.value instanceof Float32Array || Array.isArray(u.value))) {
                 const proxy = { color: Array.from(u.value) };
                 this.activeMatFolder.addColor(proxy, 'color').name(uName).onChange(v => {
                     for(let i=0; i<u.value.length; i++) {
                         if (i < v.length) u.value[i] = v[i];
                     }
                 });
            }
            else if (typeof u.value === 'number') {
                 // Float
                 const proxy = { val: u.value };
                 // Default range
                 this.activeMatFolder.add(proxy, 'val', 0, 10).name(uName).onChange(v => u.value = v);
            }
        }
        this.activeMatFolder.open();
    }
}
