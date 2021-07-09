const appMultiplesNine = require('./appMultiplesNine')

test('Multiples of 9 from 200 until 300', () => {
  expect(appMultiplesNine()).toStrictEqual([207, 216, 225, 234, 243, 252, 261, 270, 279, 288, 297]);
})