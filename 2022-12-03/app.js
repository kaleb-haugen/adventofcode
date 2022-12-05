// Split the string into an array
splitByLine = (str, delim) =>
  (str.split(delim));

// Remove duplicate characters in the array values
removeDupChar = (arr, index) =>
  (Object.values(arr[index]).filter((v, w, x) => x.indexOf(v) === w).join(``));

// Search nested array objects for shared characters
findSharedChar = (arr, index, subindex) => {
  for (n = 0; n < 128; n++) { // I was too lazy to check the actual length of the objects
    let charReference = (arr[index][subindex + 1].charAt(n));
    resultsArray.push(arr[index][subindex].search(charReference) >= 0 ? charReference : null);
  }
}

// Import values as string
let valuesString = document.getElementById(`inputs`).textContent.replace(/  /gm, ``);

// // Part 1 /////////////////////////////////////////////////////////////////////////////////////////
let valuesArray = [];
let resultsArray = [];
let position = 0;
// // Split the string into an array
// valuesArray = splitByLine(valuesString, `\n`);
// // Split array objects into nested arrays and remove duplicate characters within array objects
// for (i = 0; i < valuesArray.length; i++) {
//   position = RegExp(`(.{1,` + (valuesArray[i].length / 2) + `})`, `g`);
//   valuesArray[i] = valuesArray[i].split(position).filter(c => c !== ``);
//   // Remove duplicate characters in the array values
//   valuesArray[i][0] = removeDupChar(valuesArray, i, 0);
//   valuesArray[i][1] = removeDupChar(valuesArray, i, 1);
// };
// // Search nested array objects for shared characters
// for (a = 0; a < valuesArray.length; a++) {
//   findSharedChar(valuesArray, a, 0)
// };
// // Remove null results
// resultsArray = Object.values(resultsArray).filter(x => x);

// Part 2 /////////////////////////////////////////////////////////////////////////////////////////
let valuesArray1 = []
let resultsArray1 = []
let position1 = 0
// Split the string into an array
valuesArray1 = splitByLine(valuesString, `\n`);
// Remove duplicate characters
for (i = 0; i < valuesArray1.length; i++) {
  console.log(eval(valuesArray1 + `[` + i + `]`));
  valuesArray1[i] = removeDupChar(valuesArray1,i);// `[` + i + `]`);
  console.log(eval(valuesArray1 + `[` + i + `]`));
};
// console.log(valuesArray1);
// let resultsArray1 = []
// valuesArray1.forEach(i => {
//   // Remove duplicate characters in the array values
//   valuesArray[i] = Object.values(valuesArray1[i]).filter((v, i, a) => a.indexOf(v) === i).join(``);
// });
// console.log(valuesArray1)

// // Split the string into an array of objects each containing 3 lines
// function modify(str, n, delim) {
//   return str.split(delim).reduce(function (output, item, i) {
//     if (!(i % n)) {
//       output.push(item);
//     } else {
//       output[i / n | 0] += delim + item;
//     };
//     return output;
//   }, []);
// };
// // let valuesArray1 = modify(valuesString, 3, `\n`)
// // Split array objects into nested arrays of 3 objects each
// for (i = 0; i < valuesArray1.length; i++) {
//   valuesString[i].split(`\n`);
// };
// console.log(valuesArray1)


// Draw a map
let valuesMap = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52
}
let mapValues = 0
let mapSum = 0

// Sum the mapped values
resultsArray.forEach(n => {
  mapValues = valuesMap[n];
  mapSum += mapValues
});

let results = mapSum
let results1 = null
document.getElementById(`results`).innerHTML += `<p class="return prompt">` + results + `</br>` + results1 + `</p>`;