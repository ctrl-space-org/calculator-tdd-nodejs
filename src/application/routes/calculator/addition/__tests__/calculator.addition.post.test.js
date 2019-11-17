const request = require('supertest')
const { routes } = require('../post')

const app = require('../../../../../../server')
app.use(routes)

describe(`route /addition`, function() {
  it('request vazio', async function() {
    expect.hasAssertions()
    await new Promise(done => {
      request(app)
        .post('/')
        .end(function(err, res) {
          expect(res.status).toBe(200)
          expect(res.body.result).toBe(0)
          done()
        })
    })
  })

  it('dois números inteiros positivos', async function() {
    expect.hasAssertions()
    await new Promise(done => {
      request(app)
        .post('/')
        .send({ num1: 2, num2: 3 })
        .end(function(err, res) {
          expect(res.status).toBe(200)
          expect(res.body.result).toBe(5)
          done()
        })
    })
  })

  it('dois números inteiros negativos', async function() {
    expect.hasAssertions()
    await new Promise(done => {
      request(app)
        .post('/')
        .send({ num1: -12, num2: -3 })
        .end(function(err, res) {
          expect(res.status).toBe(200)
          expect(res.body.result).toBe(-15)
          done()
        })
    })
  })

  it('dois números formato string', async function() {
    expect.hasAssertions()
    await new Promise(done => {
      request(app)
        .post('/')
        .send({ num1: '2', num2: '3' })
        .end(function(err, res) {
          expect(res.status).toBe(200)
          expect(res.body.result).toBe(5)
          done()
        })
    })
  })
})
