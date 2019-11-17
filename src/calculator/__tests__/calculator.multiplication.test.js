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
  })
})
