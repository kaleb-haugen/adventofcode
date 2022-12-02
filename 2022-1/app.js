// Import values as string
import {valuesList} from './values.js';

// Parse values string
//console.log(valuesList);

// Split the string into an array
let valuesArray = valuesList.split(`\n\n`);

//console.log(valuesArray);

// Split the objects into arrays, convert to numbers, and sum each array
valuesArray.forEach(function (arrayObject) {
  arrayObject = arrayObject
    .split(`\n`)
    .map(Number)
    .reduce((a, b) => a + b);
  console.log(arrayObject);
});

//valuesArray.sort(function(a, b){return a - b});

console.log(valuesArray);
