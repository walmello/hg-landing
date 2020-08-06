const { readFileSync , writeFileSync } = require('fs')
const { html_beautify } = require('js-beautify')
style = readFileSync('static/style.css','utf-8')

global.page = name => require(`../src/${name}`)
const layout = page('layout')(style)

const html = html_beautify(layout, {indent_size: 4 })
writeFileSync('index.html', html)