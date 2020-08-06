const { readFileSync , writeFileSync } = require('fs')
const { html_beautify } = require('js-beautify')
const style = [
    'media',
    'layout',
    'style',
]
.map(item => readFileSync('static/'+item+'.css','utf-8')).join('')

global.page = name => require(`../src/${name}`)
const layout = page('layout')(style)

const html = html_beautify(layout, {indent_size: 4 })
writeFileSync('index.html', html)