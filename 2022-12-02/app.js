// Import values as string
let valuesString = document.getElementById(`inputs`).textContent.replace(/  /gm, ``);

// Split the string into an array
let valuesArray = valuesString.split(`\n`);

// Score the battles
let arraySum = 0
valuesArray.forEach(n => {
  switch (n) {
    case `A X`: arraySum += (3 + 1);
      break;
    case `A Y`: arraySum += (6 + 2);
      break;
    case `A Z`: arraySum += (0 + 3);
      break;
    case `B X`: arraySum += (0 + 1);
      break;
    case `B Y`: arraySum += (3 + 2);
      break;
    case `B Z`: arraySum += (6 + 3);
      break;
    case `C X`: arraySum += (6 + 1);
      break;
    case `C Y`: arraySum += (0 + 2);
      break;
    case `C Z`: arraySum += (3 + 3);
      break;
  }
})

// Score the battles
let arraySum1 = 0
valuesArray.forEach(n => {
  switch (n) {
    case `A X`: arraySum1 += (0 + 3);
      break;
    case `A Y`: arraySum1 += (3 + 1);
      break;
    case `A Z`: arraySum1 += (6 + 2);
      break;
    case `B X`: arraySum1 += (0 + 1);
      break;
    case `B Y`: arraySum1 += (3 + 2);
      break;
    case `B Z`: arraySum1 += (6 + 3);
      break;
    case `C X`: arraySum1 += (0 + 2);
      break;
    case `C Y`: arraySum1 += (3 + 3);
      break;
    case `C Z`: arraySum1 += (6 + 1);
      break;
  }
})

let results = arraySum
let results1 = arraySum1
document.getElementById(`results`).innerHTML += `<p class="return prompt">` + results + `</br>` + results1 + `</p>`;