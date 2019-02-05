
let role = "moderator";
switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderate User");
    break;

  default:
    console.log("Unknown User");
}
if (role === "guest") console.log("Guest User");
else if (role === "moderator") console.log("Moderate User");
else console.log("Unknown User");

for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}
// let i = 0;
// while(i <= 5) {
//   if ( i % 2 !== 0) console.log(i);
//   i++
// }

//Infinite Loops
// const person = {
//   name: 'Vivek',
//   age: 34
// }

// for (let key in person)
//   console.log(key, person[key])
//   console.log(person.name)

//   const colors = ['red', 'green', 'blue'];

// for (let color of colors)
// console.log(color);

// //break -- we jump out of the loop
//continue -- continue the iteration

// let i = 0;

// while (i <= 10) {
//   if (i === 5) break;

//   console.log(i)
//   i++;
// }
let x = 2;
let y = 3;

// function max(a, b) {
//   if (a > b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// }
function max(a, b) {
  return a > b ? a : b;
}
console.log(max(52, 53));

function isLandscape(width, height) {
  return width > height;
}
let picture = isLandscape(30, 30);
console.log(picture);

// const output = fizzbuzz();
// console.log(output);

function fizzbuzz(i) {
  if (typeof i !== "number") {
    console.log(NaN);
  } else {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    if (i % 5 === 0) console.log("Buzz");
    if (i % 3 === 0) console.log("Fizz");
    console.log(i);
  }
}

fizzbuzz("y");
// for every 5
// let limit = 50;
// let point = 0;

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoints = 5;
  if (speed < speedLimit + kmPerPoints) console.log("Ok");
  else {
    const points = Math.floor((speed - speedLimit) / kmPerPoints);
    if (points >= 12) console.log("Lisence Suspended");
    else console.log("Points:", points);
  }
}

checkSpeed(77);

function showNUmbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "Even" : "Odd";
    console.log(i, message);
  }
}
showNUmbers(4);

let testArray = [
  "1",
  "2",
  false,
  "Vivek",
  null,
  undefined,
  NaN,
  0,
  "",
  "Falsy"
];

function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    !value ? count++ : null;
  }
  return count;
}
console.log(countTruthy(testArray));

const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b"
};
// for (let value in movie) {
//   if (movie[value] == 'string') {
//     console.log (value, movie[value]);
//   }
// }

function showProperties(obj) {
  for (let value in obj) {
    if (typeof obj[value] === "string") {
      console.log(value, obj[value]);
    }
  }
}
showProperties(movie);

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

  return sum;
}
console.log(sum(10));

const array = [70, 80, 90, 100, 100, 100];

// function sumArray(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     return sum += array[i];
//   }
// }
// console.log(sumArray(marks));

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) sum += value;
  return sum / array.length;
}
// console.log(calculateAverage(array));

function calculateGrade(marks) {
  const average = calculateAverage(marks);

  if (average < 60) return "E";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}
// console.log(calculateGrade(array));

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
}
showStars(5);
// console.log(showStars(5))

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) 
    if (checkPrime(number)) console.log(number);
}

function checkPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}

// console.log(checkPrime(4))
showPrimes(20);
