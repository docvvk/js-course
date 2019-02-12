// ARRAYS

// Adding new elements
// Finding elements
// Removing elements
// Splitting elements
// Combining elements

const numbers = [3, 4];

numbers.push(5); // end
numbers.unshift(2); // beginning
numbers.splice(2, 1, 66, 2, 3, 44, "a", "b"); // middle

console.log(numbers);

// Finding elements

const nmbrs = [3, 4, 88, 99, 77];

console.log(nmbrs.indexOf(3) !== -1);
console.log(nmbrs.includes(3));
console.log(nmbrs.indexOf(10));
console.log(nmbrs.toLocaleString());

const courses = [
  { id: 1, name: "c" },
  { id: 2, name: "a" },
  { id: 3, name: "b" }
];
// find method for reference types
let course = courses.find(course => course.name === "a");
console.log(course);

// Removing elements

// End
const last = nmbrs.pop();
console.log(last);
console.log(nmbrs);

// Beginning
const first = nmbrs.shift();
console.log(nmbrs);

// Middle
nmbrs.splice(2, 1, 101);
console.log(nmbrs);

// Emptying the array

// Solution 1
// nmbrs = [];

// Solution 2
// nmbrs.length = 0;
// console.log(nmbrs);
// Solution 3
// nmbrs.splice(0,nmbrs.length);
// Solution 4
// while (numbers.length > 0)
//     nmbrs.pop();

// Combining and Slicing the Array

const firs = [1, 2, 3];
const second = [4, 5, 6];

// const combined = firs.concat(second);

// const sliced = combined.slice(2);
// console.log(sliced);
// console.log(combi ned);

// In objects only reference is copied and concatenated
// Spread Operators

const combined = [...firs, "a", ...second, 7];
console.log(combined);

const copy = combined.slice();

// Iterating Arrays

for (let key of combined) console.log(key);

combined.forEach((n, i) => console.log(i, n));

// Joining Arrays

const joined = combined.join(",");
console.log(joined);

const msg = "This is my another message";
const parts = msg.split(" ");
console.log(parts);

const joined2 = parts.join("-");
console.log(joined2);

// Useful in building url-slug , all white spaces replaced by a hyphen

// Sorting Arrays

const nmbrs2 = [3, 5, 6,3, 8,3, 9, -2];

nmbrs2.sort();
console.log(nmbrs2);

nmbrs2.reverse();

courses.sort(function(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

console.log(courses);

// Testing the ELements in the Array

const allPositive = nmbrs2.every(value => value >= 0);
const somePositive = nmbrs2.some(value => value >= 0);
console.log(allPositive);
console.log(somePositive);

// Filtering an Array

const filtered = nmbrs2.filter(value => value >= 0);
console.log(filtered);

// Mapping an Array

// Chaining different methods in an array

const mapped = nmbrs2
  .map(n => ({ value: n }))
  .filter(obj => obj.value > 3)
  .map(obj => obj.value);
console.log(mapped);

// Reducing an Array

let sum = 0;
for (let n of nmbrs2) sum += n;

console.log(sum);

// const reduced = nmbrs2.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

const reduced = nmbrs2.reduce((pv, cv) => {
  return pv + cv;
}, 0);
console.log(reduced);

// Exercise 1 -- range

function arrayFromRange(min, max) {
  let output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}

const nmbrs3 = arrayFromRange(-10, -4);
console.log(nmbrs3);

// Exercise 2 -- includes

function includes(array, searchElement) {
  for (let i = 0; i < array.length; i++)
    if (array[i] === searchElement) return true;
  return false;
}

console.log(includes(nmbrs3, -5));

//  Exercise 3 -- except

function except(array, excluded) {
  const output = [];
  for (let key of array) if (!excluded.includes(key)) output.push(key);
  return output;
}
const o = except(nmbrs2, [3]);

console.log(o);

// Exercise 4 --  Moving an element 

function move(array, index, offset) {
    const position = index + offset;
    if ( position > array.length || position < 0) {
        console.error('Invalid Offset.');
        return;
    }
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
    
}
console.log(move(nmbrs2, 0, 4));

// Exercise 5 -- count occurrences


function countOccurrences(array, searchElement) {
    // let count = 0;
    // for ( let key of array) {
    //     if (key === searchElement)
    //         count++;
    // }
    // return count;

    return array.reduce((accumulator, current) => {
        const occurrence = ( current === searchElement ) ? 1 : 0;
            return accumulator + occurrence;
    }, 0);
}
console.log(countOccurrences(nmbrs2, 3));

// Exercise 6 -- Get Max

function getMax(array) {
    if (array.length === 0) return undefined;

    // let max = array[0];

    // for (let key of array)
    //     if (key > max)
    //         max = key;
    // return max;
    // return Math.max(key)

    return array.reduce((a,c) => a < c ? a : c);

    // return array.reduce((a,b) => (a > b) ? a : b);
}
 
console.log(getMax([1,2,3,-2,5]));

// Exercise 7 -- Movies
 
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2015, rating: 4.1 }
];

// All movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

function title(array) {
    for ( let movie of array ) {
        console.log(movie.title);
    }
}
title(movies);

function m2018(array, year) {
    let count = 0;
    for ( let movie of array ) {
        if ( movie.year === year)
            count++;
    }
    return `${count} movies in year ${year}`;
}
console.log(m2018(movies, 2015));

const titles = movies
    .filter(m => m.year === 2018 && m.rating > 4)
    .sort((a,b) => a.rating - b.rating )  // a < b => -1 / a=b => 0 / a>b => 1
    .reverse()
    .map(m => m.title)

console.log(titles)

