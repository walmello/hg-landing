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
    <div class="w-15rem p-1rem">
        <img 
            src="static/img/parceiros/${i.img}.svg" 
            alt="${i.alt}"
        >
    </div>
`).join('')

module.exports = /*html*/`
<section id="autoridade" class="">
    <h2 class="${title}">
        Conheça algumas das 
        <div>
        empresas que já alcançaram 
        </div>
        <div>
        resultados incríveis conosco
        </div>
    </h2>
    <div class="flx flx-wrap j-center">    
        ${imagens}
    </div>
</section>
`