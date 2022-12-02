// Import values as string
import { valuesString } from './values.js';
//console.log(valuesList);

// Split the string into an array
let valuesArray = valuesString.split(`\n\n`);
//console.log(valuesArray);

// Split the objects into arrays, convert to numbers, and sum each array
valuesArray.forEach(function (arrayObject) {
  arrayObject = arrayObject
    .split(`\n`)
    .map(Number)
    .reduce((a, b) => a + b);
  //console.log(arrayObject);
});

console.log(valuesArray);
