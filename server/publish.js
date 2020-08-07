const { exec } = require('child_process')

const commit = process.argv[2]
if(commit){
    const build = 'npm run build'
    const message = `git add . && git commit -m "${process.argv[2]}" && git push`
    exec(message)
} else {
    console.log('name the commit')
}

