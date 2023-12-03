// Import values as string
let valuesString = document.getElementById(`inputs`).textContent.replace(/ /gm,``);

// Split the string into an array
let valuesArray = valuesString.split(`\n\n`);

// Function to sort numbers by size
const sortNumerically = (a, b) => {
  return a - b;
}

// Split the objects into arrays, convert to numbers, and sum each array
valuesArray = valuesArray.map(
  arrayObject => arrayObject.split(`\n`).map(Number).reduce((a, b) => a + b)
).sort(sortNumerically).reverse();

// Select desired values from the array
let results1 = valuesArray[0];
let results2 = valuesArray.slice(0, 3).reduce(function (accumVariable, curValue) {
  return accumVariable + curValue
}, 0);

document.getElementById(`results`).innerHTML += `<p class="return prompt">` + results1 + `</br>` + results2 + `</p>`;