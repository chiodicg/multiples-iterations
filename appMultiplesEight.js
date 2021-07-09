let multiplesOfEight = []

function appMultiplesEight() {
  for (let index = 100; index < 200; index++) {
    if (index % 8 === 0) {
    multiplesOfEight.push(index)
    }
  }
  return multiplesOfEight
}

module.exports = appMultiplesEight