// CLASSES IN ES6

// Syntactic sugar over Prototypical Inheritence

// Class Declaration
// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }

//     draw() {
//         console.log('draw')
//     }
// }

// const c = new Circle(1); //important to use new operator

// Hoisting -- moving to the top

// Function declaration - no semi-colon - Hoisted
// Function Expression requires semi-colon and they are not hoisted

// Classe Declaration are not hoisted as function declaration
// Class Expression
const Square = class {}

// 2 types of methods in classes
// STATIC METHODS // INSTANCE METHODS

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // INSTANCE METHOD - for specific Class Object Circle
    draw() {
        console.log(this)
    }

    // STATIC METHOD - to create utility functions that are not for this particular object
    static parse(str) {
        const radius = JSOM.parse(str).radius;
        return new Circle(radius)
    }
}

const c1 = new Circle();
const draw = c1.draw;
draw()

// THE THIS KEYWORD

const C = function () {
    this.draw = function() {
        console.log(this);
    }
}
const c = new C();
// Method call
c.draw()

// When we call method as stand alone function
// 'this' will bydefault point to global object i.e. window
// Function call - 'this' will point to window 

// But if we use 'strict mode' -- Function call for a method will be undefined
// reason is to prevent the mofification of global object accidentally

// In Classes the body of classes are automatically executed in strict mode whether we define it or not

// For using strict mode on top mention 'use strict'

// Private Members Using Symbols

// In ES6 new primitive type - Symbol
// Used to implement kind of private properties and methods
// Computed property names  

const _radius = Symbol(); 
const _draw = Symbol();

class Circle2 {
    constructor(radius) {
        this[_radius] = radius;
    }

    [_draw]() {

    }
}
const d = new Circle2(1);

// WEAKMAPS to implement private properties and methods
// Dictionary where keys are objects and value can be anything 
// called weakmaps as keys are weak, if not given reference goes down into garbage collecter

const _radius1 = new WeakMap(); 
const _move = new WeakMap();

class Circle3 {
    constructor(radius) {
        _radius1.set(this, radius);

        _move.set(this, () => {         // arrow functions use the this value of containing function
            console.log('move', this);  // 'this' will not be rebound - inherited in constructor function
        })
    }

    draw() {
        _move.get(this)();

        console.log('draw', this)
    }
}

const c3 = new Circle3(3);

const _dia = new WeakMap();

class Circle4 {
    constructor(dia) {
        _dia.set(this, dia);
    }
    get radius() {
        return _dia.get(this);
    }
    set radius(value) {
        if (value <= 0) throw new Error ('invalid radius property πøˆ¨¥');
         _dia.set(this, value);
    }
}

const c4 = new Circle4(4);

// Inheritence

class Shape {
    constructor(color) {
        this.color = color; 
    }
    move() {
        console.log('move');
    }
}

class Circle5 extends Shape  {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    draw() {
        console.log('draw');
    }
    move() {
        super.move()
        console.log('new move');
    }
}

const c5 = new Circle5('red',3);

// Method Overriding
 const _items = new WeakMap();

class Stack {
    constructor() {
        _items.set(this, []);
    }
    push(obj) {
        _items.get(this).push(obj)
    }
    pop(obj) {
        const items = _items.get(this);

        if (items.length === 0)
            throw new Error('Empty Stack')
        
        items.pop(obj);
    }
    peek() {
        const items = _items.get(this);

        if (items.length === 0)
            throw new Error('Empty Stack')
        
        return items[items.length - 1];    
    }

    get count() {
        return _items.get(this).length;
    }
}


const stack = new Stack();

stack.push('a');
stack.push('b');
stack.push('c');

console.log(stack);