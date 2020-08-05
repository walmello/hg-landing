const pages = (...arr) => arr.map(p => page(`Home/${p}`)).join('')
const Homepages = pages(
    'tripwire',
    'produtos',
    'parceiros',
    'contadores',
    'testemunhos',
    'faq'
)

module.exports = /**/`
    ${page('navbar')}
    ${page('Home/header')}
    <main>
        ${Homepages}
    </main>
    ${page('footer')}
`