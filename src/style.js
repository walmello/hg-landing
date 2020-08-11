global.button = 'bg-white p-1rem tx-1rem br-rad-1rem c-dark tx-d-none tx-bold w-12rem inline-block'
global.button_black = 'bg-dark p-1rem tx-1rem br-rad-1rem c-white tx-d-none tx-bold w-10rem inline-block'
global.link = "c-white hover-c-primary tx-none"
global.container = "px-20"
global.title = "tx-2rem tx-center c-dark tx-3remLG px-10"


const elements = {
    h: /*css*/`
        .h-2rem {
            height: 2rem;
        }
        .h-3rem {
            height: 3rem;
        }
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
            }
            .h-70vLG {
                height: 70vh;
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
        .w-75 {
            width: 75%;
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
        @media(min-width: 1000px){
            .w-15remLG {
                width: 15rem;
            }
        }
    `,
    bg: /*css*/`
        .bg-dark-t {
            background-color: var(--darkt);
        }        
        .bg-none {
            background-color: transparent;
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
            background: url('static/img/bg/header.svg');
            background-repeat: no-repeat;
            background-position: bottom right;
        }
        
        .bg-primary {
            background-color: var(--pink);
        }
        @media(min-width: 500px){
            .bg-header {
                
            }    
            
        }

        @media(min-width: 1000px){
            .bg-header {
                
            }    
            .bg-trip {
                background: url('static/img/bg/tripwire.jpg');
                background-size: 100%;
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
        .hover-c-primary:hover {
            color: var(--pink);
        }
        .c-dark {
            color: var(--dark);
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
        .tx-none {
            text-decoration: none;
        }
    `,
    m: /*css*/`
        .m-0 {
            margin: 0;
        }
        .m-1rem {
            margin: 1rem;
        }
        .m-auto {
            margin: auto;
        }
        .mx-auto {
            margin-left: auto;
            margin-right: auto;
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
        .px-0 {
            padding-left: 0;
            padding-right: 0;
        }
        .px-20 {
            padding-left: 20%;
            padding-right: 20%;
        }
        .px-10 {
            padding-left: 10%;
            padding-right: 10%;
        }
        @media(min-width: 700px){
            .px-20MD {
                padding-left: 20%;
                padding-right: 20%;
            }
        }
        @media(min-width: 1000px){
            .px-20LG {
                padding-left: 20%;
                padding-right: 20%;
            }
            .px-30LG {
                padding-left: 30%;
                padding-right: 30%;
            }
        }
    `,
    pos: /*css*/`
        .fixed {
            position: fixed;
        }

        .absolute {
            position: absolute;
        }

        .relative {
            position: relative;
        }

        .top {
            top: 0;
        }

        .right {
            right: 0;
        }

        .right-1rem {
            right: 1rem;
        }

        .bottom {
            bottom: 0;
        }

        .left {
            left: 0;
        }
    `,
    flx: /*css*/`
        .flx {
            display: flex;
        }
        @media(min-width: 700px){
            .flxMD {
                display: flex;
            }    
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
        .j-right {
            justify-content: right;
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
        .a-start {
            align-content: flex-start;
        }   
        .flx-wrap {
            flex-wrap: wrap;
        }
    `,
    br: /*css*/`
        .br-rad-1rem {
            border-radius: 1rem;
        }
        .br-rad-05rem {
            border-radius: 0.5rem;
        }
        .brt-c-primary {
            border-top: 5px solid var(--pink);
        }
        .brr-c-primary {
            border-right: 5px solid var(--pink);
        }
        .br-rad-round {
            border-radius: 50%;
        }
        .br-c-dark {
            border: 3px solid var(--dark);
        }
        .br-c-primary {
            border: 3px solid var(--pink);
        }
        .brb-c-primary {
            border-bottom: 3px solid var(--pink);
        }
        .brt-c-dark {
            border-top: 3px solid var(--dark);
        }
        .brb-c-dark {
            border-bottom: 3px solid var(--dark);
        }
        .brl-none {
            border-left: none;
        }
        .brt-none {
            border-top: none;
        }
        .brr-none {
            border-right: none;
        }
        .br-none {
            border: none;
        }
    `,
    li: /*css*/`
        .ul-none {
            list-style: none;
        }

        .li-p-05rem > * {
            padding: 0.5rem
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
        }
        .cursor {
            cursor: pointer;
        }
        .box {
            width: 3rem;
            height: 3rem;
        }
    `
}

module.exports = `
    ${Object.keys(elements).map(el => elements[el]).join(' ')}

    textarea:focus, input:focus, select:focus, button:focus {
        outline: none;
        border-bottom: 3px solid var(--blue);
    }
`