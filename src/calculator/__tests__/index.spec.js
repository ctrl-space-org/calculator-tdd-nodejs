const calculadora = require('../')
describe('Testando calculator', () => {
  it('soma', done => {
    expect(calculadora.somar(2, 2)).toBe(4)
  })
})
