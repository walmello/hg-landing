global.button = 'bg-white p-1rem tx-1rem br-rad-1rem c-dark tx-d-none tx-bold w-15rem inline-block'

const elements = {
    h: /*css*/`
        .h-4rem {
            height: 4rem;
        }
        .h-100 {
            height: 100%;
        }
        .h-100v {
            height: 100vh;
        }
        .h-85v {
            height: 85vh;
        }
        @media(min-width: 1000px){
            .h-85vLG {
                height: 85vh;
                background-color: red;
            }
        }
    `,
    w: /*css*/`
        .w-100v {
            width: 100vw;
        }
        .w-100 {
            width: 100%;
        }
        .w-1rem {
            width: 1rem;
        }
        .w-2rem {
            width: 2rem;
        }
        .w-3rem {
            width: 3rem;
        }
        .w-4rem {
            width: 4rem;
        }
        .w-5rem {
            width: 5rem;
        }
        .w-8rem {
            width: 8rem;
        }
        .w-10rem {
            width: 10rem;
        }
        .w-15rem {
            width: 15rem;
        }
        .w-20rem {
            width: 20rem;
        }
        .w-auto {
            width: auto;
        }
    `,
    bg: /*css*/`
        .bg-dark-t {
            background-color: var(--darkt);
        }        
        .bg-dark {
            background-color: var(--dark);
        }
        .bg-white {
            background-color: white;
        }
        .bg-red {
            background-color: red;
        }
        .bg-header {
            background: url('static/img/bg/header.jpg');
            background-size: 300vw;
            background-position: 65%;
        }
        .bg-primary {
            background-color: var(--pink);
        }
        @media(min-width: 500px){
            .bg-header {
                background-size: 150vw;
                background-position: 50%;
            }    
        }

        @media(min-width: 1000px){
            .bg-header {
                background-size: 120vw;
                background-position: 0;
            }    
        }
    `,
    c: /*css*/`
        .c-primary {
            color: var(--pink);
        }
        .c-white {
            color: white;
        }
    `,
    tx: /*css*/`
        .tx-center {
            text-align: center;
        }
        .tx-left {
            text-align: left;
        }
        .tx-1rem {
            font-size: 1rem;
        }
        .tx-2rem {
            font-size: 2rem;
        }
        .tx-3rem {
            font-size: 3rem;
        }
        @media(min-width: 1000px){
            .tx-3remLG {
                font-size: 3rem;
            }
        }
        .tx-4rem {
            font-size: 4rem;
        }
        .tx-d-none {
            text-decoration: none;
        }
        .tx-bold {
            font-weight: bold;
        }
        .tx-upper {
            text-transform: uppercase;
        }
        .tx-50 {
            font-size: 50%;
        }
        .tx-75 {
            font-size: 75%;
        }
        @media(min-width: 1000px){
            .tx-leftLG{
                text-align: left;
            }
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
        .p-05rem {
            padding: 0.5rem;
        }
        .p-1rem {
            padding: 1rem;
        }
        .px-1rem {
            padding-left: 1rem;
            padding-right: 1rem
        }
        .p-2rem {
            padding: 2rem;
        }
    `,
    pos: /*css*/`
        .fixed {
            position: fixed;
        }

        .absolute {
            position: absolute;
        }

        .top {
            top: 0;
        }

        .right {
            right: 0;
        }

        .bottom {
            bottom: 0;
        }
    `,
    flx: /*css*/`
        .flx {
            display: flex;
        }
        @media(min-width: 1000px){
            .flxLG{
                display: flex;
            }
            .j-leftLG{
                justify-content: start;
                background-color: red;
            }
        }
        .flx-grow > * {
            flex-grow: 1;
        }
        .flx-col {
            flex-direction: column;
        }
        .j-center {
            justify-content: center;
        }
        .j-between {
            justify-content: space-between;
        }
        .j-around {
            justify-content: space-around;
        }
        .flx-col {
            flex-direction: column;
        }
        .j-center {
            justify-content: center;
        }
        .a-center {
            align-items: center;
        }
    `,
    br: /*css*/`
        .br-rad-1rem {
            border-radius: 1rem;
        }
        .brt-c-primary {
            border-top: 5px solid var(--pink);
        }
        .brr-c-primary {
            border-right: 5px solid var(--pink);
        }
    `,
    li: /*css*/`
        .ul-none {
            list-style: none;
        }

        .li-p-1rem > * {
            padding: 1rem
        }

        .li-p-2rem > * {
            padding: 2rem
        }

        .li-rotate > * {
            transform: rotate(-90deg);
        }
    `,
    display: /*css*/`
        .block {
            display: block;
        }
        .none {
            display: none;
        }
        .inline-block {
            display: inline-block;
        }
    `,
    misc: /*css*/`
        .brd-box {
            box-sizing: border-box;
        },
        .cursor {
            cursor: pointer;
        },
        .box {
            width: 3rem;
            height: 3rem;
        }
    `
}

module.exports = `
    ${Object.keys(elements).map(el => elements[el]).join(' ')}
`