/*

const { writeFileSync } = require('fs')
global.page = name => reload(`../src/${name}.js`)

module.exports = () => {
    const { style, template } = page('layout')
    console.log('build alterado')
    writeFileSync('index.html', template)
}

*/

const { writeFileSync } = require('fs')
const { style } = require('../src/layout')
const { html_beautify } = require('js-beautify')

global.page = name => require(`../src/${name}`)
const layout = page('layout')(page('index'))

const html = html_beautify(layout, {indent_size: 4 })
writeFileSync('index.html', html)