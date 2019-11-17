const routes = require('..')
const request = require('supertest')
const jp = require('jsonpath')
const app = require('../../../../server')

app.use(routes)

describe('[ Testing Application Routes Summary ]', () => {
  it('route /status registrada.', async () => {
    expect.hasAssertions()
    await new Promise(done => {
      expect(
        routes.stack.filter(r => r.route).map(r => r.route.path)
      ).toContain('/status')
      done()
    })
  })

  it('[post] /status', async () => {
    expect.hasAssertions()
    await new Promise(done => {
      request(app)
        .get('/status')
        .end(function(err, res) {
          expect(res.status).toBe(200)
          expect(jp.query(res.body, '$.status')).toContainEqual('ok')
          done()
        })
    })
  })

  // how do this?
  it.todo('route /calculator registrada.')
})
