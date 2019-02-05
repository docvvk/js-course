// import axios from "axios";

let myData = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

// async function fetchData(dataSet) {
//   for (entry of dataSet) {
//     const result = await axios.get(
//       `https://ironhack-pokeapi.herokuapp.com/pokemon/${entry.id}`
//     );
//     const newData = redult.data;
//     updateData(newData);
//     console.log(myData);
//   }
// }

async function fetchData(dataSet) {
  let pP = dataSet.map(entry => {
    return axios.get('https://ironhack-pokeapi.herokuapp.com/pokemon/${entry.id}');
  })
  const results = Promise.all(pP);

  results.forEach(element => {
    updateData(element.data)
  });
  console.log(myData);
}


// function updateData(newData) {
//   myData = myData.map(d => {
//     if (d.id === newData.id) return newData;
//     return d;
//   });
// }
// updateData();

console.log('Hey node');
console.log(process.argv);
console.log(parseFloat(process.argv[2]) + parseFloat(process.argv[3]));

const { id = 5 } = {}
console.log(id)
