// ARRAYS

// Adding new elements
// Finding elements
// Removing elements
// Splitting elements
// Combining elements

const numbers = [3,4];
  
numbers.push(5) // end
numbers.unshift(2) // beginning
numbers.splice(2,1,66,2,3,44,'a','b') // middle

console.log(numbers);

// Finding elements

const nmbrs = [3, 4, 88, 99, 77];


console.log(nmbrs.indexOf(3) !== -1);
console.log(nmbrs.includes(3));
console.log(nmbrs.indexOf(10));
console.log(nmbrs.toLocaleString())  

const courses = [
    { id: 1, name: 'c' },
    { id: 2, name: 'a' },
    { id: 3, name: 'b' },
];
// find method for reference types
let course = courses.find(course => course.name === 'a');
console.log(course) 

// Removing elements

// End 
const last = nmbrs.pop();
console.log(last);
console.log(nmbrs);

// Beginning
const first = nmbrs.shift();
console.log(nmbrs);


// Middle
nmbrs.splice(2,1,101);
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

const firs = [1,2,3];
const second = [4,5,6];

// const combined = firs.concat(second);


// const sliced = combined.slice(2);
// console.log(sliced);
// console.log(combi ned);

// In objects only reference is copied and concatenated
// Spread Operators

const combined = [...firs, 'a', ...second, 7]
console.log(combined)

const copy = combined.slice()

// Iterating Arrays

for (let key in combined)
    console.log(key);

combined.forEach((n, i) => console.log(i, n));

// Joining Arrays

 const joined = combined.join(',');
 console.log(joined);

 const msg = 'This is my another message';
 const parts = msg.split(' ');
 console.log(parts);
 
 const joined2 = parts.join('-');
 console.log(joined2);

 // Useful in building url-slug , all white spaces replaced by a hyphen

// Sorting Arrays

 const nmbrs2 = [3,5, 6, 8, 9, -2];

 nmbrs2.sort();
 console.log(nmbrs2);

 nmbrs2.reverse();
 
 courses.sort(function(a,b) {
     if (a.name < b.name) return -1;
     if (a.name > b.name) return 1;
     return 0; 
 })
 
 console.log(courses)

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
    .map(obj => obj.value)
console.log(mapped);

// Reducing an Array

let sum = 0;
for  (let n of nmbrs2)
    sum += n;

console.log(sum);

const reduced = nmbrs2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(reduced);




 



 