const watch = require('node-watch');
const { exec } = require('child_process');

watch('./src',{ recursive: true },(event, filename) => {
    console.log(event, filename)
    exec('npm run build')
})