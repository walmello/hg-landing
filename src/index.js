const pages = (...arr) => arr.map(p => page(`Home/${p}`)).join('')
const Homepages = pages(
    'tripwire',
    'produtos',
    'parceiros',
    'contadores',
    'testemunhos',
    'faq'
)

module.exports = /*html*/`
    <div class="flxLG flx-grow">
        <div>
            ${page('Home/social')}
        </div>
        <div>
            ${page('navbar')}
            ${page('Home/header')}
        </div>
    </div>
    <main>
        ${Homepages}
    </main>
    ${page('footer')}
`