const { addition } = require('../')

describe('[ calculadora ]', () => {
  describe('[ adição ]', () => {
    it('números inteiros positivos iguais', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(addition(2, 2)).toBe(4)
        done()
      })
    })
    it('números inteiros positivos diferentes', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(addition(3, 2)).toBe(5)
        done()
      })
    })
    it('números inteiros, um positivo e outro negativo maior', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(addition(-3, 2)).toBe(-1)
        done()
      })
    })
    it('números inteiros negativos', async () => {
      expect.assertions(1)
      await new Promise(done => {
        expect(addition(-3, -2)).toBe(-5)
        done()
      })
    })
    it('números fracionários', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(addition(3.33, 3.33)).toBe(6.66)
        done()
      })
    })
    it('números fracionários, um negativo e outro positivo', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(addition(3.33, -3.33)).toBe(0)
        done()
      })
    })
    it('números ambos undefined', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(addition(undefined, undefined)).toBe(0)
        done()
      })
    })
  })
})
