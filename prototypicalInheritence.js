// Creating your own Protypical Inheritence

function Shape(color) {
  this.color = color;
}
Shape.prototype.duplicate = function() {
  console.log("duplicate");
};

function Circle(radius, color) {
  Shape.call(this, color);  // Super Constructor

  this.radius = radius;
}

// Circle.prototype = Object.create(Object.prototype); // Before - Implicit relationship
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

extend(Circle, Shape); // Intermediate function inheritence

Circle.prototype.draw = function() {
  console.log("draw");
};

Circle.prototype.duplicate = function () { 
    console.log('duplicate circle');
 }

function Square(size) {
    this.size = size;
}

extend(Square, Shape);

Square.prototype.duplicate = function () { 
    Shape.prototype.duplicate.call(this); 
    console.log('duplicate square');
 }

// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;

const s = new Shape();
const c = new Circle(1, 'red');
const sq = new Square(10);
console.log(c);
console.log(sq);

// Resetting the constructor
// While resetting the prototype of Object its important
// to reset the constructor property of its prototype to maintain its constructor state

// Calling the Super Constructor

// Intermediate Function Inheritence

// Method Overriding -- reimplementing a method in child object

// Polymorphism - many forms

const shapes = [new Circle(), new Square()];

for ( let shape of shapes ) 
    shape.duplicate();

// When we encapsulate variables and functions into objects and use inheritence
// we can use many forms of methods using a single line of code ! Isn't that beautiful ?


// Don't use inheritence just for sake of using it in small projects

// Avoid creating inheritence hierarchies - bcoz they are very fragile - use inheritence just for one level

// Favor Composition over Inheritence

// Composition - "Mixins"

function mixin(target, ...sources) {  // rest operator - collects all arguments and converts them into array
    Object.assign(target, ...sources);  // spread operator - to spread an array into multiple objects  
 }

const canEat = {
    eat() {
        this.hunger--;
        console.log('eating');
    }
}

const canWalk = {
    walk() {
        console.log('walking');
    }
}

const canSwim = {
    swim() {
        console.log('swimming');
    }
}

function Person() {};
function Goldfish() {};

mixin(Person.prototype, canEat, canWalk);
mixin(Goldfish.prototype, canEat, canSwim);
const person = new Person();
const fish = new Goldfish();
console.log(person)
console.log(fish)

// Exercise - Prototypical Inheritence

function HtmlElement() {
    this.click = function() {  
        console.log('clicked');
    }
} 

HtmlElement.prototype.focus = function () {
    console.log('focused');
}

const e = new HtmlElement();
console.log(e)

function HtmlSelectElement(items, addItem, removeItem ) {
    this.items = [];
    this.addItem = function(item) {
        this.items.push(item)
        console.log('added ' + this.items);
    }
    this.removeItem = function(item) {
        this.items.pop(item);
        console.log('removed ' + this.items);
    }
}
HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

HtmlSelectElement.prototype.click = function() {
    HtmlElement.prototype.click.call(this);
    console.log('re-clicked');
}
const f = new HtmlSelectElement();

f.addItem('1');
f.addItem('2','3');


console.log(f);

