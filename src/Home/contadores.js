const contadores = [
    {
        value: 217,
        title: 'Projetos realizados'
    }
].map(i => /*html*/`
<div class="fade-in">
    <p>${i.value}</p>
    <h3>${i.title}</h3>
</div>
`).join('')

module.exports = /*html*/`
<section id="contadores" >
    ${contadores}
</section>
`