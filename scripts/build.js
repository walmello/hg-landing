const fs = require('fs')
const ejs = require('ejs')
const { findSeries } = require('async')

exports.build = () => ejs.renderFile('src/layout.ejs', (err, content) => {
    if (err) throw err
    fs.writeFileSync('index.html', content)
})