const { webpack } = require('../src/index.js')

describe('Compiler', () => {
  test('Default', async () => {
    const config = {}

    const stats = await webpack('fixture.js', config)
    const { source } = stats.toJson().modules[0]
    
    expect(source).toMatchSnapshot()
  })
})