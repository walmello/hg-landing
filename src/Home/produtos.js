const produtos = [
    {
        id: 1,
        alt: `
            Ícone nas cores rosa, verde, roxo e azul, 
            de um gráfico de barras crescente, com uma seta acima, 
            com as mesmas cores, indicando o crescimento da performance 
            do seu marketing digital com o serviço de consultoria da HG.`
        ,
        title: 'Consultoria em CRO',
        content: [
            `
                Sua taxa crescimento está boa, 
                mas você sabe que <strong>poderia ser melhor</strong>? 
                Não entende o porquê de seus resultados 
                não serem os esperados?`,
            `
                Nossa equipe de <strong>especialistas em CRO e Growth Hacking</strong> 
                entram em ação para fazer um pente fino em 
                <strong>todo o seu processo de vendas</strong>
            `
        ]
    },
    {
        id: 2,
        alt: `
            Ícone de um monitor com um megafone dentro e 
            3 balões de fala acima, nas cores rosa, verde, roxo
            e azul, indicando que sua empresa será conhecida e 
            falada por todos com o nosso serviço de 
            otimização de campanhas de marketing.
        `
        ,
        title: 'Otimização de campanhas',
        content: [
            `
                Suas campanhas no Google e no Facebook estão saindo caro e trazendo pouco retorno?
            `,
            `
                Nossa equipe de <strong>especialistas em CRO e Growth Hacking</strong> 
                entram em ação para fazer um pente fino em 
                <strong>todo o seu processo de vendas</strong>
            `
        ]
    },
    {
        id: 3,
        alt: `
            Ícone de um funil na cor roxa, 
            onde na parte de cima há 3 pessoas e na 
            parte de baixo uma moeda rosa com o cifrão, 
            indicando que com o serviço de CRO e otimização de 
            testes A/B da Hacking Growth, 
            o seu marketing digital passa a atingir 
            mais pessoas e gerar mais receita.
        `
        ,
        title: 'CRO e otimização de Testes A/B',
        content: [
            `
                Sua taxa crescimento está boa, 
                mas você sabe que <strong>poderia ser melhor</strong>? 
                Não entende o porquê de seus resultados 
                não serem os esperados?`,
            `
                Nossa equipe de <strong>especialistas em CRO e Growth Hacking</strong> 
                entram em ação para fazer um pente fino em 
                <strong>todo o seu processo de vendas</strong>
            `,
            `
                Com os testes A/B encontramos os principais fatores 
                que não fazem a sua campanha alcançar os resultados esperados. 
                Analisamos o desempenho e definimos qual é a 
                melhor estratégia para o seu anúncio.
            `,
            `
                Aumente hoje mesmo a escalabilidade de seus negócios! 
                Conheça nosso processo clicando abaixo.
            `       
        ]
    }
].map(p => /*html*/`
    <div class="c-white flx j-center p-1rem">
        <div class="bg-white c-dark p-1rem">
            <img 
                src="static/img/produtos/${p.id}.svg" 
                alt="${p.alt}"
                class="w-5rem p-1rem"
            >
            <div class="tx-center w-15rem">
                <h3>${p.title}</h3>
                ${p.content.map(p => '<p>' + p + '<p>').join('')}
            </div>
        </div>
    </div>
    <!--
    <div class="bg-white c-dark m-1rem">
        <div class="p-2rem">
            <img 
                src="static/img/produtos/${p.id}.svg" 
                alt="${p.alt}"
                class="w-5rem"
            >
            <h3 class="w-15rem">${p.title}</h3>
            <div>
                ${p.content.map(p => '<p>' + p + '<p>').join('')}
            </div>
        </div>
        <div class="">
		    <a href="#" class="${button_black}">Saiba mais</a>				
		</div>
        <div class="p-1rem">
            </div>
        </div>
    <div>
    -->
`).join('')

module.exports = /*html*/`
    <section id="product-bundle" class="bg-dark tx-center c-white p-rem flxLG flx-grow j-center">
        ${produtos}
	</section>
`