const imagens = [
    'GAMA',
    'DISTRITO',
    'ABSTATUPS',
    'VALEDOSOL',
    'RESULTADOS DIGITAIS',
    'SHAWEE'
].map(i => /*html*/`
    <img src="static/img/parceiros/${i}.svg">
`).join('')

module.exports = /*html*/`
<section id="autoridade">
    <div>
        <h2>Conheça algumas das empresas que já alcançaram resultados incríveis conosco</h2>
        ${imagens}
    </div>
</section>
`