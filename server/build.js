const { writeFileSync } = require('fs')
global.page = name => reload(`../src/${name}.js`)

module.exports = () => {
    const content = page('layout')
    console.log('build alterado')
    writeFileSync('index.html', content)
}