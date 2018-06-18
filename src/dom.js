const { JSDOM, VirtualConsole } = require('jsdom')

const html = (scripts) => `
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <div id="root"></div>
    ${scripts.map((script) => `<script>${script}</script>`).join('\n')}
  </body>
</html>`;

const virtualConsole = new VirtualConsole().sendTo(console)

function dom (scripts) {
  return new JSDOM(html(scripts), {
    runScripts: 'dangerously',
    virtualConsole,
  })
}

module.exports = dom