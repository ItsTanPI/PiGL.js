export class WindowManager {
    constructor() {
        this.container = document.createElement('div');
        this.container.id = 'editor-ui-root';
        Object.assign(this.container.style, {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: '9999',
            fontFamily: 'sans-serif'
        });
        document.body.appendChild(this.container);

        this.initNavBar();
    }

    initNavBar() {
        this.navBar = document.createElement('div');
        this.navBar.id = 'editor-navbar';
        Object.assign(this.navBar.style, {
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '5px',
            background: 'rgba(26, 26, 26, 0.9)',
            padding: '5px 10px',
            borderRadius: '20px',
            border: '1px solid #333',
            pointerEvents: 'auto',
            boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
            zIndex: '10001'
        });
        this.container.appendChild(this.navBar);
        this.addDragLogic(this.navBar, this.navBar); // Make navbar itself draggable
    }

    addNavItem(title, win) {
        const btn = document.createElement('button');
        btn.innerText = title;
        Object.assign(btn.style, {
            background: '#252525',
            color: '#ccc',
            border: '1px solid #444',
            padding: '4px 12px',
            borderRadius: '15px',
            fontSize: '10px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background 0.2s',
            outline: 'none'
        });
        btn.onclick = () => {
            const isHidden = win.style.display === 'none';
            win.style.display = isHidden ? 'flex' : 'none';
            btn.style.background = isHidden ? '#444' : '#252525';
        };
        btn.onmouseover = () => { if (win.style.display === 'none') btn.style.background = '#333'; };
        btn.onmouseout = () => { if (win.style.display === 'none') btn.style.background = '#252525'; };
        
        // Initial state
        btn.style.background = win.style.display === 'none' ? '#252525' : '#444';

        this.navBar.appendChild(btn);
    }

    addNavSelect(options, onChange) {
        const select = document.createElement('select');
        Object.assign(select.style, {
            background: '#252525',
            color: '#ccc',
            border: '1px solid #444',
            padding: '4px 8px',
            borderRadius: '15px',
            fontSize: '10px',
            fontWeight: 'bold',
            cursor: 'pointer',
            outline: 'none',
            marginLeft: '10px'
        });

        options.forEach(opt => {
            const el = document.createElement('option');
            el.value = opt;
            el.text = opt;
            select.appendChild(el);
        });

        select.onchange = (e) => onChange(e.target.value);
        this.navBar.appendChild(select);
    }

    toggleVisibility() {
        const isHidden = this.container.style.display === 'none';
        this.container.style.display = isHidden ? 'block' : 'none';
    }

    createWindow(title, x, y, width, height) {
        const win = document.createElement('div');
        Object.assign(win.style, {
            position: 'absolute',
            left: `${x}px`,
            top: `${y}px`,
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: '#1a1a1a',
            border: '1px solid #333',
            display: 'flex',
            flexDirection: 'column',
            pointerEvents: 'auto',
            overflow: 'hidden',
            boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
        });

        const header = document.createElement('div');
        header.innerText = title;
        Object.assign(header.style, {
            padding: '6px 10px',
            background: '#252525',
            color: '#ccc',
            fontSize: '11px',
            fontWeight: 'bold',
            cursor: 'move',
            userSelect: 'none',
            borderBottom: '1px solid #333',
            textTransform: 'uppercase',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        });

        const closeBtn = document.createElement('span');
        closeBtn.innerHTML = '×';
        Object.assign(closeBtn.style, {
            cursor: 'pointer',
            fontSize: '16px',
            lineHeight: '1',
            padding: '0 4px',
            color: '#888'
        });
        closeBtn.onclick = () => { win.style.display = 'none'; };
        closeBtn.onmouseover = () => { closeBtn.style.color = '#fff'; };
        closeBtn.onmouseout = () => { closeBtn.style.color = '#888'; };
        header.appendChild(closeBtn);

        const content = document.createElement('div');
        content.classList.add('window-content');
        Object.assign(content.style, {
            flex: '1',
            overflow: 'auto',
            background: '#111',
            position: 'relative',
            width: '100%',
            height: '100%'
        });

        const resizer = document.createElement('div');
        Object.assign(resizer.style, {
            width: '10px',
            height: '10px',
            background: '#444',
            position: 'absolute',
            right: '0',
            bottom: '0',
            cursor: 'nwse-resize',
            zIndex: '10'
        });

        win.appendChild(header);
        win.appendChild(content);
        win.appendChild(resizer);
        this.container.appendChild(win);

        this.addDragLogic(win, header);
        this.addResizeLogic(win, resizer);
        
        return { content, window: win };
    }

    addResizeLogic(win, resizer) {
        let isResizing = false;
        let startWidth, startHeight, startX, startY;

        resizer.addEventListener('mousedown', (e) => {
            e.preventDefault();
            e.stopPropagation();
            isResizing = true;
            startX = e.clientX;
            startY = e.clientY;
            startWidth = win.offsetWidth;
            startHeight = win.offsetHeight;
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
        });

        const onMove = (e) => {
            if (!isResizing) return;
            const nw = startWidth + (e.clientX - startX);
            const nh = startHeight + (e.clientY - startY);
            if (nw > 100) win.style.width = nw + 'px';
            if (nh > 100) win.style.height = nh + 'px';
        };

        const onUp = () => {
            isResizing = false;
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
        };
    }

    addDragLogic(win, header) {
        let isDragging = false;
        let startX, startY, initialLeft, initialTop;

        header.addEventListener('mousedown', (e) => {
            if (e.target.tagName === 'BUTTON') return; // Don't drag if clicking a button (for navbar)
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            initialLeft = win.offsetLeft;
            initialTop = win.offsetTop;
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
            win.style.zIndex = '10000';
            
            if (win === this.navBar) win.style.zIndex = '10001';
            if (win !== this.navBar) {
                // Keep navbar on top but bring this window to front of other windows
                this.container.querySelectorAll('.window').forEach(w => w.style.zIndex = '9999');
                win.style.zIndex = '10000';
            }
        });

        const onMove = (e) => {
            if (!isDragging) return;
            let nx = initialLeft + (e.clientX - startX);
            let ny = initialTop + (e.clientY - startY);
            
            // Simple snapping for docking simulation
            const snap = 20;
            if (nx < snap) nx = 0;
            if (ny < snap) ny = 0;
            if (Math.abs(window.innerWidth - (nx + win.offsetWidth)) < snap) nx = window.innerWidth - win.offsetWidth;
            if (Math.abs(window.innerHeight - (ny + win.offsetHeight)) < snap) ny = window.innerHeight - win.offsetHeight;

            win.style.left = nx + 'px';
            win.style.top = ny + 'px';
        };

        const onUp = () => {
            isDragging = false;
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
        };
    }
}
