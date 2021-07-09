const appMultiplesSeven = require('./appMultiplesSeven')

test('Multiples of 7 until 100', () => {
  expect(appMultiplesSeven()).toStrictEqual([0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98]);
})