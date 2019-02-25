// OBJECT ORIENTED PROGRAMMING
// Programming paradigm or style of programming centered
// around objects rather than functions !
// Not a programming language or tool

// 4 Pillars of Object Oriented Programming

// 1 . Encapsulation

// Group related properties and methods in a unit called Object
// and this is called Encapsulation.
// Reduce complexity + increase reusability
// Best are the functions with fewer parameters
// better to maintain the function - Uncle Bob - Robert C Martin

// 2. Abstraction

// All that complexity is hidden from you -- only essentials are shown
// Reduce complexity + isolates the impact of change of code
// Simpler interface
// Reduce the impact of change

// 3. Inheritance

// Mechanism that allows you to eliminate redundant code

// 4. Polymosphism == many forms

// Allows you to refactor long & ugly if/else or switch/case statements

// ------------------------------------------------------------------------ //
// ------------------------------------------------------------------------ //

// Objects // Prototypes // Prototypical Inheritence // ES6 Classes // Modules

// Classes are syntactical sugars over prototypes and prototyipical inheritence

// Object Literal Index -- Key/Value pairs

// Factory functions

let createCircle = function(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    }
  };
};
// const circle1 = createCircle(2);
// console.log(circle);

// Constructor Functions -- creates an empty object and this refers to its properties & methods

function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x : 0, y : 0}; // Private members of circle object

    this.draw = () => {
      
      defaultLocation;
      computeOptimumLocation();
      console.log('draw')
    }

    // Getters and Setters

    Object.defineProperty(this, 'defaultLocation', {
      get: function() {
        return defaultLocation;
      },
      set: function (value) {
        // if ( !value.x || !value.y) 
        //   throw new Error('Invalid Location');

        defaultLocation = value;
      }
    })
}

// in Circle object the two variables defaultLoaction and computeOptimumLocation
// are in scope of parent Circle function but in ''closure'' of draw function
// inner function has access to the variables defined inside as well as outside within parent function -- This is called CLOSURE
// Scope is temporary and dies after function executes after calling
// Closure stays there, variables continue to stay in memory, they preserve their state
// because they are in closure of inner 'draw' function 



// const Circle1 = new Function('radius',`
// this.radius = radius;
// this.draw = () => console.log('draw')
// `)
// Circle1.call({}, 3)
// Circle1.toString();
const circle = new Circle(3);

// Circle.call({}, 1)
// Circle.apply({}, [1,2,3]) 
circle.location = { x : 3 };
circle['location'] = { y : 4 }

const propertyName = 'center';
circle[propertyName] = { z : 5}

delete circle.center;

circle.defaultLocation = 1;

console.log(circle); 




// Constructor Property -- Every obj has constructor property that
// references the function that was used to create that object

// Functions are objects

// for ( let key in Circle1) {
//     console.log(key, circle[key])
// }



const keys = Object.keys(circle)
// console.log(keys)

let n = { value : 22 };
function increase(n) {
   n.value++;
}
increase(n)
console.log(n)

// user.token = 'asasas';

// We can add properties and methods to all the objects anytime and 
// that makes this javascript so beautifully dynamic
// Generate on the fly on the server makes it so powerful

// Enumerating the properties of an object use 'for..in' loop
 
for ( let key in circle ) {
  if (typeof circle[key] !== 'object')
    console.log(key, circle[key])
} 

// Accessing all the keys in an array form use

const keyss = Object.keys(circle);
console.log(keyss);

// For checking if any property is available use 'in' operator

if ( 'radius' in circle )
  console.log('aho');

  // EXERCISE 1 --  STOPWATCH

  function Stopwatch() {
    let startTime, endTime, running, duration = 0;



    this.start = function() { 
      if (running)
        throw new Error('Stopwatch has already started');

      running = true;
      
      startTime = new Date();
    };
    this.stop = function() { 
      if (!running)
        throw new Error('Stopwatch is not started');

      running = false;

      endTime = new Date();

      const seconds = (endTime.getSeconds() - startTime.getSeconds());
      duration += seconds;
     };
    this.reset = function() { 
      startTime = null;
      endTime = null;
      running = false;
      duration = 0;
     };
    Object.defineProperty(this, 'duration', {
      get: function() { return duration; }
    })
  }

  let sw = new Stopwatch()
  sw.start()
 