const request = require('supertest')

const appStub = require('express')()

const { routes } = require('../post')

appStub.use(routes)

describe(`route /addition`, function() {
  it('empty request', async function() {
    expect.hasAssertions()
    await new Promise(done => {
      request(appStub)
        .post('/')
        .end(function(err, res) {
          expect(res.status).toBe(200)
          done()
        })
    })
  })

  it('dois números inteiros positivos', async function() {
    expect.hasAssertions()
    await new Promise(done => {
      request(appStub)
        .post('/')
        .send({ num1: 2, num2: 3 })
        .end(function(err, res) {
          expect(res.status).toBe(200)
          expect(res.body.result).toBe(4)
          done()
        })
    })
  })
})
