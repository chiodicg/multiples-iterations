//Iterates in multiples of 7 up until 100
let multiplesOfSeven = []

function appMultiplesSeven() {
  for (let index = 0; index < 100; index++) {
    if (index % 7 === 0) {
    multiplesOfSeven.push(index)
    }
  }
  return multiplesOfSeven
}

module.exports = appMultiplesSeven