// ES6 TOOLING

// MODULES

// CommonJS(Node.js) and ES6 Modules(Browser)

// Maintainability // Reuse // Abstract

const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log(`Circle with radius ${_radius.get(this)}`);
    }

    get radius() {
        return _radius.get(this);
    }
}
const c = new Circle(2);

c.draw();

