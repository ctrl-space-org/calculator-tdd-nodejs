const calculadora = require('../')

// # Think
describe('Módulo: [ calculator ]', () => {
  describe('Funcionalidade: [ somar ]', () => {
    it('Cenario 1: 2 + 2 = 4', done => {
      expect(calculadora.somar(2, 2)).toBe(4)
      done()
    })
    it('Cenario 2: 3 + 2 = 5', done => {
      expect(calculadora.somar(3, 2)).toBe(5)
      done()
    })
    it('Cenario 3: -3 + 2 = -1', done => {
      expect(calculadora.somar(-3, 2)).toBe(-1)
      done()
    })
    it('Cenario 4: -3 + -2 = -5', done => {
      expect(calculadora.somar(-3, -2)).toBe(-5)
      done()
    })
    it('Cenario 5: 3.33 + 3.33 = 6.66', done => {
      expect(calculadora.somar(3.33, 3.33)).toBe(6.66)
      done()
    })
    it('Cenario 6: -3.33 + 3.33 = 0', done => {
      expect(calculadora.somar(3.33, -3.33)).toBe(0)
      done()
    })
  })

  describe('Funcionalidade: [ subtrair ]', () => {
    it('Cenario 1: 2 - 2 = 0', done => {
      expect(calculadora.subtrair(2, 2)).toBe(0)
      done()
    })
  })
})
