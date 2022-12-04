// Import values as string
let valuesString = document.getElementById(`inputs`).textContent.replace(/  /gm, ``);


valuesString = valuesString.replace(/A/g, "1")
  .replace(/B/g, "2")
  .replace(/C/g, "3")
  .replace(/X/g, "1")
  .replace(/Y/g, "2")
  .replace(/Z/g, "3");

// Split the string into an array
let valuesArray = valuesString.split(`\n`);

// Split array into separate arrays
let attackArray = valuesArray.map(arrayObject => arrayObject.substring(0, 1));
let defendArray = valuesArray.map(arrayObject => arrayObject.substring(2, 3));

function battleLoop() {
  let fightOutcome = 0
  let battleOutcome = 0

  // Comparing each element of array
  for (var i = 0; i < 2500; i++) {

    // Battle scoring
    if (attackArray[i] === defendArray[i]) {
      fightOutcome = parseInt(defendArray[i]) + 3;
      // console.log([`Tie`,fightOutcome,attackArray[i],defendArray[i]]);

    } else if ((attackArray[i] === '3') && (defendArray[i] === '1')) {
      fightOutcome = parseInt(defendArray[i]) + 6;
      // console.log([`Win:Underdog`,fightOutcome,attackArray[i],defendArray[i]]);

    } else if (attackArray[i] < defendArray[i]) {
      fightOutcome = parseInt(defendArray[i]) + 6;
      // console.log([`Win`,fightOutcome,attackArray[i],defendArray[i]]);

    } else {
      fightOutcome = parseInt(defendArray[i]) + 0;
      // console.log([`Loss`,fightOutcome,attackArray[i],defendArray[i]]);

    };
    battleOutcome = battleOutcome + fightOutcome
    // console.log([battleOutcome,fight]);
  }
  return battleOutcome
}

let results = battleLoop()
document.getElementById(`results`).innerHTML += `<p class="return prompt">` + results + `</p>`;