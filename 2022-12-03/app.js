// Import values as string
let valuesString = document.getElementById(`inputs`).textContent.replace(/  /gm, ``);

// Split the string into an array
let valuesArray = valuesString.split(`\n`);

// Split array objects into nested arrays
for (i = 0; i < valuesArray.length; i++) {
  let position = RegExp(`(.{1,` + (valuesArray[i].length / 2) + `})`, `g`);
  valuesArray[i] = valuesArray[i].split(position).filter(c => c !== '');
  // Remove duplicate characters in the array values
  valuesArray[i][0] = Object.values(valuesArray[i][0]).filter((v, i, a) => a.indexOf(v) === i).join(``);
  valuesArray[i][1] = Object.values(valuesArray[i][1]).filter((v, i, a) => a.indexOf(v) === i).join(``);
};

// Search nested array objects for shared characters
let resultsArray = []
for (a = 0; a < valuesArray.length; a++) {
  for (s = 0; s < valuesArray[a][1].length; s++) {
    let charReference = (valuesArray[a][1].charAt(s));
    resultsArray.push(valuesArray[a][0].search(charReference) >= 0 ? charReference : null);
  }
}
// Remove null results
resultsArray = Object.values(resultsArray).filter(x => x);

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