const { subtraction } = require('../')

// # Think
describe('[ calculadora ]', () => {
  describe('[ subtração ]', () => {
    it('números inteiros iguais', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(subtraction(2, 2)).toBe(0)
        done()
      })
    })

    it('números inteiros iguais mas um negativo', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(subtraction(2, -2)).toBe(4)
        done()
      })
    })

    it('um número null e um número inteiro positivo', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(subtraction(null, 2)).toBe(-2)
        done()
      })
    })

    it('um número undefined e um número inteiro positivo', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(subtraction(2, undefined)).toBe(2)
        done()
      })
    })

    it('um número inteiro positivo e um valor undefined', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(subtraction(undefined, 2)).toBe(-2)
        done()
      })
    })

    it('dois números com valor undefined', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(subtraction(undefined, undefined)).toBe(0)
        done()
      })
    })

    it('um número undefined e outro null', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(subtraction(undefined, null)).toBe(0)
        done()
      })
    })
  })
})
