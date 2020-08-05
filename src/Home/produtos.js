const produtos = [
    {
        id: 1,
        title: 'Consultoria em CRO',
        content: [
            /*html*/`
                Sua taxa crescimento está boa, 
                mas você sabe que <strong>poderia ser melhor</strong>? 
                Não entende o porquê de seus resultados 
                não serem os esperados?`,
            /*html*/`
                Nossa equipe de <strong>especialistas em CRO e Growth Hacking</strong> 
                entram em ação para fazer um pente fino em 
                <strong>todo o seu processo de vendas</strong>
            `
        ]
    },
    {
        id: 2,
        title: 'Otimização de campanhas',
        content: [
            `
                Suas campanhas no Google e no Facebook estão saindo caro e trazendo pouco retorno?
            `,
            /*html*/`
                Nossa equipe de <strong>especialistas em CRO e Growth Hacking</strong> 
                entram em ação para fazer um pente fino em 
                <strong>todo o seu processo de vendas</strong>
            `
        ]
    },
    {
        id: 3,
        title: 'CRO e otimização de Testes A/B',
        content: [
            /*html*/`
                Sua taxa crescimento está boa, 
                mas você sabe que <strong>poderia ser melhor</strong>? 
                Não entende o porquê de seus resultados 
                não serem os esperados?`,
            /*html*/`
                Nossa equipe de <strong>especialistas em CRO e Growth Hacking</strong> 
                entram em ação para fazer um pente fino em 
                <strong>todo o seu processo de vendas</strong>
            `,
            /*html*/`
                Com os testes A/B encontramos os principais fatores 
                que não fazem a sua campanha alcançar os resultados esperados. 
                Analisamos o desempenho e definimos qual é a 
                melhor estratégia para o seu anúncio.
            `,
            /*html*/`
                Aumente hoje mesmo a escalabilidade de seus negócios! 
                Conheça nosso processo clicando abaixo.
            `       
        ]
    }
]

const paragraphs = each => each.map(p => `<p>${p}<p>`).join('')

const produto = id => title => content => /*html*/`
	<div>
		<div>
			<img src="static/img/produtos/${id}.svg" alt="Ícone nas cores rosa, verde, roxo e azul, de um gráfico de barras crescente, com uma seta acima, com as mesmas cores, indicando o crescimento da performance do seu marketing digital com o serviço de consultoria da HG." class="fade-in">
			<h3>${title}</h3>
			<div>
                ${paragraphs(content)}
			</div>
			<div>
				<a href=""  class="btn">Saiba mais</a>				
			</div>
        </div>
    </div>
`

module.exports = /*html*/`
    <section id="product-bundle" class="row">
        ${produtos.map(p => produto(p.id)(p.title)(p.content)).join('')}
	</section>
`