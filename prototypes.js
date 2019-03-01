// Inheritence -- enables an object to take properties of another object
// reusable code

// Base/Super/Parent Class -- from which properties or methods are inherited

// Derived/Sub/Child Class

// Inheritence relationship -- is/a --

// But in js we don't have classes, we have objects and thats where the prototypical inheritence comes into play

// Classical vs Prototypical Inheritence

// Prototype is parent __proto__ / faded - deprecated syntax - you shouldn't directly access it -- only in console while debugging!

// Every object in js inherits properties from their prototypes(objectBase) directly or indirectly -- Prototypical Inheritence

// The ROOT OBJECT (objectBase) does not have any __proto__

// Protypical Inheritence in Action --
// child first looks for the method in its own properties if not got, goes upto root class(objectBase) checking required methods

// MULTILEVEL INHERITANCE

// array <-- arrayBase <-- objectBase(ROOT)

// Objects created by a given constructor will have the same prototype

// PROPERTY DESCRIPTORS

let person = { name: "Ishu" };
// let objectBase = Object.getPrototypeOf(person);

// let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
// console.log(descriptor);
// console.log(person.toString());

// By default All propertyDescriptors are true
Object.defineProperty(person, "name", {
  writable: false,
  enumerable: true,
  configurable: false
});

person.name = "jas";
delete person.name;
console.log(person);
console.log(Object.keys(person));

// CONSTRUCTOR PROTOTYPES

let Circle = function(radius) {
  // Instance Members
  this.radius = radius;

  this.move = () => { 
    //   this.draw();
      console.log('move')}
};

// Circle.prototype() === c1.__proto__ // circle base
const c1 = new Circle(1);

// Prototype Members             // Circular dependency
Circle.prototype.draw = function() {
  console.log("draw");
};
Circle.prototype.toString = function () { 
    return 'Circle with radius ' + this.radius;
 }

// Object.getPrototypeOf(myObj)
// myObj.__proto__ (parent of myObj)
// myObj.prototype

// console.log(Constructor.prototype(Circle))

// PROTOTYPES VS INSTANCE MEMBERS

// const c1 = new Circle(1);
// const c2 = new Circle(1);

// We can  overwrite the implementation of 'toString' method in the prototype of our Circle object


// How to Iterate over Prototype and Instance Members / Own Properties 

// Only Returns Instance (OWN) Members -- not Prototype ones
console.log(Object.keys(c1));

// Returns all members -- FOR..IN LOOP
for (let key in c1) console.log (key);

// SHOULD NOT MODIFY THE BUILT-IN OBJECTS IN JAVASCRIPT
// DON'T MODIFY THE OBJECTS YOU DON'T OWN



 function Stopwatch() {
   let startTime, endTime, running, duration = 0; 

   Object.defineProperty(this, 'duration', {
     get: function() {return duration},
     set: function(value) { duration = value; }
   })
   Object.defineProperty(this, 'startTime', {
     get: function() {return startTime}
   })
   Object.defineProperty(this, 'endTime', {
     get: function() {return endTime}
   })
   Object.defineProperty(this, 'running', {
     get: function() {return running}
   })
 }

 Stopwatch.prototype.start = function() {
  if (this.running)
      throw new Error('Stopwatch has already started');

      this.running = true;

      this.startTime = new Date()
 }
 Stopwatch.prototype.stop = function() {
  if (!this.running)
      throw new Error('Stopwatch is not started');

      this.running = false;

      this.endTime = new Date();

      const seconds = (this.endTime.getTime() - this.startTime.getTime())/1000;
      this.duration += seconds;
 }
 Stopwatch.prototype.reset = function() {
  this.startTime = null;
  this.endTime = null;
  this.duration = 0;
  this.running = false;
}

 
 

 let sw = new Stopwatch();

 console.log(Object.keys(sw))
 for ( let key in sw ) console.log(key)

 // Premature optimization is the root of all evils

 