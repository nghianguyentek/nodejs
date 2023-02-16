const { Factorial } = require('./factorial')

test('factorial:success', () => {
  const n = 10,
    result = 3628800

  expect(Factorial.of(0)).toBe(1)
  expect(Factorial.of(1)).toBe(1)
  expect(Factorial.of(n)).toBe(result)
  expect(Factorial.of_v1(n)).toBe(result)

  const approximatedValue = Math.round(Factorial.approximate(n))
  if (approximatedValue > result)
    expect(approximatedValue/result).toBeCloseTo(1.005)
  else
    expect(result/approximatedValue).toBeCloseTo(1.005)
})

describe('factorial:invalid', () => {
  test('factorial:invalid:type', () => {
    expect(() => Factorial.of('abc')).toThrow(TypeError)
    expect(() => Factorial.of(6.2)).toThrow(TypeError)
  })

  test('factorial:invalid:value', () => {
    expect(() => Factorial.of(-2)).toThrow()
  })
})