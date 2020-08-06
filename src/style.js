const elements = {
    h: /*css*/`
        .h-4rem {
            height: 4rem;
        }
        .h-100 {
            height: 100%;
        }
    `,
    w: /*css*/`
        .w-100v {
            width: 100vw;
        }
        .w-100 {
            width: 100%;
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
        .p-1rem {
            padding: 1rem;
        }
        .px-1rem {
            padding-left: 1rem;
            padding-right: 1rem
        }
    `,
    pos: /*css*/`
        .fixed {
            position: fixed;
        }

        .top {
            top: 0;
        } 
    `,
    flx: /*css*/`
        .flx {
            display: flex;
        }
        .j-between {
            justify-content: space-between;
        }
    `,
    misc: /*css*/`
        .brd-box {
            box-sizing: border-box;
        }
    `
}

module.exports = `
    ${Object.keys(elements).map(el => elements[el]).join(' ')}
`