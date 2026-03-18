export class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
        this.data = new Float32Array([x, y, z]);
    }

    get x() { return this.data[0]; }
    set x(v) { this.data[0] = v; }

    get y() { return this.data[1]; }
    set y(v) { this.data[1] = v; }

    get z() { return this.data[2]; }
    set z(v) { this.data[2] = v; }

    set(x, y, z) {
        this.data[0] = x;
        this.data[1] = y;
        this.data[2] = z;
        return this;
    }

    copy(v) {
        this.data[0] = v.x;
        this.data[1] = v.y;
        this.data[2] = v.z;
        return this;
    }

    toArray() {
        return [this.data[0], this.data[1], this.data[2]];
    }
}
