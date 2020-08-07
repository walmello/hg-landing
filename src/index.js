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
    <div class="flxLG">
        <div>
            ${page('Home/social')}
        </div>
        <div class="w-100 bg-dark">
            ${page('navbar')}
            ${page('Home/header')}
        </div>
    </div>
    <main>
        ${Homepages}
    </main>
    ${page('footer')}
`