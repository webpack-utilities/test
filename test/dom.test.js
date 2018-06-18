const { webpack, dom } = require('../src/index.js')

describe('DOM', () => {
  test('Default', async () => {
    const config = {}
     
    const stats = await webpack('fixture.js', config)
    const { assets } = stats.compilation
    
    const scripts = {
      main: assets['main.js'].source(),
      runtime: assets['runtime~main.js'].source()
    }

    const { window } = dom([ scripts.runtime, scripts.main ])

    expect(window.document.body.innerHTML).toMatchSnapshot()
  })
})