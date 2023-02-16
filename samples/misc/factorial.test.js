const { Factorial } = require('./factorial')

test('factorial:success', () => {
  const n = 3,
    result = 6

  expect(Factorial.of(0)).toBe(1)
  expect(Factorial.of(1)).toBe(1)
  expect(Factorial.of(n)).toBe(result)
  expect(Factorial.of(n)).toBeCloseTo(Math.round(Factorial.approximate(n)))
})

describe('factorial:invalid', () => {
  test('factorial:invalid:type', () => {
    expect(() => Factorial.of('abc')).toThrow(TypeError)
  })

  test('factorial:invalid:value', () => {
    expect(() => Factorial.of(-2)).toThrow()
  })
})