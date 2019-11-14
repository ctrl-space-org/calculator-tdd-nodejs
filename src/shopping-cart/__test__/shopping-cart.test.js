const { create } = require('../shopping-cart')

describe('testando employee create', () => {
  it('com nome joao', done => {
    const joao = create('João')
    expect(joao).not.toBeNull()
    done()
  })
})
