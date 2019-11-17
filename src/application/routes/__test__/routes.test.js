const routes = require('..')

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

  it.todo('route /calculator registrada.')
})
