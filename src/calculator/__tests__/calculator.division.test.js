const { division } = require('../')

describe('[ Calculator ]', function() {
  it('divisio method exists', async () => {
    expect.hasAssertions()
    await new Promise(done => {
      expect(division).toBeDefined()
      done()
    })
  })
  describe('[ division method ]', function() {
    it('dois números inteiros', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(division(4, 2)).toBe(2)
        done()
      })
    })
    it('dois números inteiros, primeiro negativo', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(division(-2, 2)).toBe(-1)
        done()
      })
    })
    it('dois números inteiros, segundo negativo', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(division(2, -2)).toBe(-1)
        done()
      })
    })
    it('dois números inteiros, ambos negativos', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(division(-2, -2)).toBe(1)
        done()
      })
    })
    it('dois números inteiros, num1 > num2', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(division(4, -2)).toBe(-2)
        done()
      })
    })
    it('dois números inteiros, num1 < num2', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(division(2, 4)).toBe(0.5)
        done()
      })
    })
    it('num1 undefined e num2 inteiro positivo', async () => {
      expect.hasAssertions()
      await new Promise(done => {
        expect(division(undefined, 4)).toBe(0)
        done()
      })
    })
  })
})
