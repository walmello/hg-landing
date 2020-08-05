const fs = require('fs')
const { build } = require('./build')
build()

fs.watch('./src',(event, filename) => {
    build()
    console.log(event, filename)
})