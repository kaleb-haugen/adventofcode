// Import values as string
import { valuesString } from './values.js';
//console.log(valuesList);

// Split the string into an array
let valuesArray = valuesString.split(`\n`);
console.log(valuesArray);

// Split array objects into nested arrays
valuesArray.forEach(function (arrayObject) {
  arrayObject = arrayObject
    .split(`\n`)
    .map(Number)
    .reduce((a, b) => a + b);
  console.log(arrayObject);
});
