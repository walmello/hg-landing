const imagens = [
    {
        img: 'GAMA',
        alt: `
           Gama Academy - Escola altamente reconhecida de 
           desenvolvimento profissional para o 
           mercado digital, com foco em Startups
        `
    },
    {
        img: 'DISTRITO',
        alt: `
            Distrito - Empresa de inovação e desenvolvimento de Startups
        `
    },
    {
        img: 'ABSTATUPS',
        alt: `
            AbStartups - Associação Brasileira de Startups 
            visa impulsionar o empreendedorismo tecnológico e 
            auxiliar novos profissionais da área
        `
    },
    {
        img: 'VALEDOSOL',
        alt: `
            Vale do Sol - Ecossistema de 
            inovação tecnológica no interior do RJ
        `
    },
    {
        img: 'RESULTADOS DIGITAIS',
        alt: `
            Resultados Digitais - Empresa altamente reconhecida que 
            oferece serviços de marketing digital para 
            empresas de todos os portes, gerando resultados significativos
        `
    },
    {
        img: 'SHAWEE',
        alt: `
            Shawee - Organizadora de Hackathons (maratonas de programação) 
            on-line com mais de 40.000 pessoas impactadas nos últimos 3 anos.
        `
    }
].map(i => /*html*/`
    <img src="static/img/parceiros/${i.img}.svg" alt="${i.alt}">
`).join('')

module.exports = /*html*/`
<section id="autoridade" class="">
    <div>
        <h2 class="tx-2rem tx-center c-dark tx-3remLG">
            Conheça algumas das 
            <div>
            empresas que já alcançaram 
            </div>
            <div>
            resultados incríveis conosco
            </div>
            </h2>
        ${imagens}
    </div>
</section>
`