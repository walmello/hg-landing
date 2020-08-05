const watch = require('node-watch');
global.reload = module => {
    delete require.cache[require.resolve(module)];
    try {
        return require(module);
    } catch{
        console.log(`${module}, não existe`)
    }
}

build = () => reload('./build')()
build()

watch('./src',{ recursive: true },(event, filename) => {
    console.log(event, filename)
    build()
})