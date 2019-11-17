const calculator = require('../')

describe('calculator module', () => {
  it('routes exported', async () => {
    expect.hasAssertions()
    await new Promise(done => {
      expect(calculator.routes).toBeDefined()
      done()
    })
  })
})
