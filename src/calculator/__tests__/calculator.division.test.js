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
        expect(division(2, 2)).toBe(1)
        done()
      })
    })
  })
})
