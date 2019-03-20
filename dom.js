// DOM Document Object Model

// DOM is a structure that gives you access to all the content within a website

// You can target the dom with javascript and also with CSS rules

// Access target Nodes by js request returns arrays of nodes which you can modify with methods

// windows.getElementByID()

// Managing Nodes

// innerHTML
// createElement
// appendChild()
// addEventListener

$('.boxes').css('border', '2px solid red');
$('.boxes').add("<h1 id='new'>VIVEK</h1>").css('background-color', 'black')

let myNode = document.querySelector(".boxes");
console.log(myNode)

let colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "black",
  "pink",
  "lime",
  "aqua"
];

function makeBoxes(howmany) {
  let currColor = 0;
  let colorAmount = colors.length;
  let myElement;
  let myNode = document.querySelector(".boxes");

  for (let i = 0; i < howmany; i++) {
    // myElement = $('.boxes').add("div");
    myElement = ducument.createElement("div");
    myElement.className = "box";
    myElement.style = "background-color" + colors[currColor];
    myNode.appendChild(myElement);

    currColor === colorAmount - 1 ? (currColor = 0) : currColor++;
  }
}

// makeBoxes(3);
 
// makeBoxes(4);

// console.log
 