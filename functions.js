// Function Declaration // No semi-colon needed to terminate
// walk();
function walk() {
  console.log("walk");
}

// Anonymous Function Expression // SemiColon reqd to terminate the expression
let run = function() {
  console.log("run");
};
let move = run;
// run();
// move();

// Named Function Expression

// HOISTING

// We can call a function before its declaration because
// the js engine automatically moves all the function declarations
// to the top of the file while executing this code and
// this is called JS-HOISTING;

// ARGUMENTS  // PARAMETERS // Should be last formal paramater
// Thats why it is called rest operator

function sum(discount, ...prices) {
  // return args.reduce((a,b) => a + b);
  // console.log(prices.reduce((a,b) => a + b));

  // let count = 0;
  // for ( let key of args )

  //     count += key;

  // console.log (count);

  let total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}
console.log(sum(0.1, 20, 30));

// Rest Operator (...args) // used as parameter for varying number of arguments in the function

// Default parameters // should be the last parameter of only default parameters should follow

function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000));

// Getters & Setters

// getters => access properties
// setters => change (mutate) them

const person = {
  firstName: "Vivek",
  lastName: "Malhan",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string")
      // throw an exception and catch somewhere in try/catch
      throw new Error("Invalid string format!");

    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Enter first and last name");

    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

// Try and Catch // Defensive Programming

try {
  person.fullName = "23 33";
} catch (e) {
  alert(e);
}
console.log(person);

// Local and Global scope

// Let vs Var
// let & const -- block scoped // Var -- function scoped
function start() {
  for (var i = 0; i < 5; i++) console.log(i);

  console.log(i);
}
// start()

var color = "red";
let age = 30;

// The This Keyword
// method --> object
// function --> global (window, global)

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(tag => console.log(this.title, tag));
  }
};
// video.showTags();

// Changing the value of this

function playVideo() {
  console.log(this);
}

playVideo.call({ name: "Vivek" });
playVideo.apply({ name: "Vivek" });
playVideo.bind({ name: "Vivek" })();
playVideo();

// Exercise 1 -- Sum of arguments

let sum1 = function(...args) {
  if (args.length === 1 && Array.isArray(args[0])) args = [...args[0]];

  return args.reduce((a, b) => a + b);
};
console.log(sum1([1, 2, 3, 4]));

//  Exercise 2 -- Area of circle

const circle = {
  radius: 2,
  get area() {
    // read only property - Getter
    return Math.floor(Math.PI * this.radius * this.radius);
  }
};
circle.radius = 5;
console.log(circle.radius);
console.log(circle.area);

// Exercise 3 -- Error Handling

const numbers = [1,2,2,2,2,3,4,5];

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("Is not a valid array");
  }
  return array.reduce((accumulator, currentValue) => {
    const occurrence = searchElement === currentValue ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}

try {
    console.log(countOccurrences(NaN,2));
}
catch(e) {
    console.log(e)
} 
