let multiplesOfNine = []

function appMultiplesNine() {
  for (let index = 200; index < 300; index++) {
    if (index % 9 === 0) {
    multiplesOfNine.push(index)
    }
  }
  return multiplesOfNine
}

module.exports = appMultiplesNine