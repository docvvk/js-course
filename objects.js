// Opbject Oriented Programming OOP 

// Factory Functions -- camelNotation

function createCircle(radius, location) { 
    return {
        radius,
        location,
        draw() {
            console.log('Draw')
        }
    };
}

const circle1 = createCircle(1,22);
console.log(circle1);

// Constructor Functions -- Pascal Notation: First letter uppercase

function Circle(radius, location) {
    this.radius = radius;
    this.location = location;
    this.draw = () => console.log('Draw')
}

const circle2 = new Circle(1,22);
console.log(circle2);

//Dynamic nature of Objects
// You can add or delete properties to the objects

// Constructor Property

console.log(Circle.call({}, 2, 4))

// Primitives vs References
// Primitives are copied by their value while
// Objects are copied by their reference

let number = {value: 10};
function increase(obj) {
    obj.value++;
}
increase(number);
console.log(number);

// Enumerating Properties of an Object

const triangle = {
    sides: 3,
    draw() {
        console.log('draw');
    }
}
for (let key in triangle) {
    console.log(key, triangle[key])
}
for (let key of Object.keys(triangle)) {
    console.log(key, triangle[key])
}
for ( let entry of Object.entries(triangle) ) {
    console.log(entry)
}
if ('sides' in triangle) console.log('yes') 

// Cloning an Object
const another = {...triangle};

Object.assign({color: 'red'}, triangle) //copies one or more properties from source to target objects
// for (let key in triangle) {
//     another[key] = triangle[key]
// }
console.log(triangle);

// Garbage Collection -- Aotomatic in javascript objects -- frees up unallocated memory

// Built In Javascript Objects
// 1. MATH OBJECT - MDN - Comprehensive Documentatiion

let findRandom = (a,b) => Math.floor(Math.random() * (b - a) + a);
console.log(findRandom(3,33))

 // 2. String 2 kinds in JS 

// String primitive
const m = 
'this is my\n\'first\' msg';
const n = m.replace('this', 'This');

console.log(n);



// String object
const another2 = new String('hi');

// Escape characters
// back slash  /n -- newline

// Object Literals {}
// Boolean Literals true, false
// String Literals '', " "
// Template Literals `` 
    // Add a placeholder ${} for any expression
    // mathametical, function or any expression

const m2 = 
`This is my ${m}  
'first' message`; 
console.log(m2);

// 3. Date

const now = new Date()
const date1 = new Date();
now.toISOString();

// EXERCISE 1

const address = {
    street: 'Model Town',
    city: 'Hsp',
    zipCode: 146001
}
function showAddress(arr) {
    for (let key in arr) console.log(key, arr[key]);
}
showAddress(address);

 // EXERCISE 2
// Constructor function -- Pascal notation
class Add {
    constructor(street, city, zipCode) {
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
    }
}

const add1 = new Add('Model', 'Hsp', '146001');
console.log(add1);

// Factory function
const add = function(street, city, zipCode) { 
    return {
        street,
        city,
        zipCode
    }
 }
 
 const add2 = add('a','b','c')
 const add3 = add2
 
 console.log(add2)
 console.log(add3)



 function areEqual(a,b) {
     for (let key in a,b) {
         if (a[key] === b[key]) return true
            return false;
     }
 }
 console.log(areEqual(add3,add2));

 function areSame(a,b) {
    return a === b;
 }
console.log(areSame(add2,add3));

// BlogPost Object

let post = {
    title: 'Vivek',
    body: 'Developer',
    author: 'Shaurya',
    views: 200,
    comments: [
        { author: 'a', body: 'b'},
        { author: 'c', body: 'd'}
    ],
    isLive: true
}

// more the parameters harder to use the function
function Post(title,body,author) {
    this.title = title;
    this.body = body;
    this.author= author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let post1 = new Post('Vvk', 'Dev', 'Shaurya');
console.log(post1);

function Price(tooltip,limit,label) {
    this.tooltip = tooltip;
    this.limit = limit;
    this.display = label;
     
}
const price1 = new Price('Cheaper', 300, '$$');
const price2 = new Price('Moderate', 600, '$$$');
const price3 = new Price('Expensive', 900, '$$$$');

console.log(price1)

