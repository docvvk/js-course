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


let x = {}

let y = {}

console.log(Object.getPrototypeOf(x))

// MULTILEVEL INHERITANCE

// array <-- arrayBase <-- objectBase(ROOT)

// Objects created by a given constructor will have the same prototype

// PROPERTY DESCRIPTORS

let person = { name: 'Ishu'};
let objectBase = Object.getPrototypeOf(person);

