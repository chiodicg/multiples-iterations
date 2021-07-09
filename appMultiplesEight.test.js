const appMultiplesEight = require('./appMultiplesEight')

test('Multiples of 8 from 100 until 200', () => {
  expect(appMultiplesEight()).toStrictEqual([104, 112, 120, 128, 136, 144, 152, 160, 168, 176, 184, 192]);
})