
const background = name => "url('static/img/bg/header.jpg')"

const header = {
    background: background('header'),
    color: 'white',
    'background-size': '200%'   
}  

const apply = tag => element =>  `${tag} ` + '{\n' +
    Object.keys(element).map(i => `  ${i}: ${element[i]}`).join(';\n')
+ "\n}\n"

console.log(apply('header')(header))

global.cssGroup = {
    navbar: 'h-4 bg-dark-t fixed w-100 p-0 m-0 top'
}

const elements = {
    h: /*css*/`
        .h-4 {
            height: 4rem;
        }
    `,
    w: /*css*/`
        .w-100 {
            width: 100vw;
        }
    `,
    bg: /*css*/`
        .bg-dark-t {
            background-color: var(--darkt);
        }        
    `,
    m: /*css*/`
        .m-0 {
            margin: 0;
        }
    `,
    p: /*css*/`
        .p-0 {
            padding: 0;
        }
    `,
    pos: /*css*/`
        .fixed {
            position: fixed;
        }

        .top {
            top: 0;
        } 
    `
}

module.exports = `
    ${Object.keys(elements).map(el => elements[el]).join(' ')}
`