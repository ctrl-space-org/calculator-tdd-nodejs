const { multiplication } = require('../')

describe('[ Calculator ]', function() {
  it('multiplication é uma função', () => {
    expect.hasAssertions()
    expect(multiplication).toBeDefined()
  })
  describe('multiplication method', () => {
    it('números positivos inteiros', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(multiplication(2, 2)).toBe(4)
        done()
      })
    })

    it('números inteiros, num1 positivo, num2 negativo', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(multiplication(2, -2)).toBe(-4)
        done()
      })
    })

    it('números inteiros, num1 negativo, num2 negativo', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(multiplication(-2, -2)).toBe(4)
        done()
      })
    })

    it('números inteiros, num1 undefined, num2 negativo', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(multiplication(undefined, -2)).toBe(-0)
        done()
      })
    })

    it('números inteiros, num1 negativo, num2 undefined', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(multiplication(-2, undefined)).toBe(-0)
        done()
      })
    })

    it('números inteiros, num1 undefined, num2 undefined', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(multiplication(undefined, undefined)).toBe(0)
        done()
      })
    })

    it('números fracionários, num1, num2 ambos positivos', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(multiplication(3.33, 3)).toBe(9.99)
        done()
      })
    })
  })
})
