const testemunhos = [
    {
        img: 'https://media-exp1.licdn.com/dms/image/C4D03AQF9npZ0RcFWPw/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=cTXYrCJbs1fDaC-JwL4oIPtVT2tF0XFmkE_8hMaGmjM',
        alt: `
            Foto de Anderson Kleyton (RevTec - Renomada empresa bioquímica de produtos de limpeza), 
            que está satisfeito com a qualidade dos nossos serviços porque somos diferentes.
        `,
		nome: 'Anderson Kleyton',
		titulo: 'Inovação Transformação Digital Indústria 4.0 - RevTec',
		content: `… oferece serviços aderentes a necessidade de cada cliente. Em um mercado onde a maioria tenta “empurrar goela baixo” seus produtos, este é um diferencial.`
    },
    {
		img: 'https://media-exp1.licdn.com/dms/image/C4D03AQH_9cKznSa8UA/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=M_0QkbyNkZo6B0Ne41n9hnj-GcRqtVtPQDbNc4uqkZA',
        alt: `
            Foto de Geisa Luz, que está muito satisfeita com o nosso serviço.
        `,
		nome: 'Geisa Luz',
		titulo: 'Consultora em Doenças Raras | Palestrante | Pós doutora em Saúde Pública | Enfermeira',
		content: `… Já contratei um dos seus serviços … e os resultados foram surpreendentes. Sou muito grata!`
    },
    {
		img: 'https://media-exp1.licdn.com/dms/image/C4D03AQEpP8xjQpch_A/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=FmwCLEz8jrjx-arSGIWxHgHb8YQlHOuCv5uuIvm1RiA',
        alt: `
            Foto de Matheus Celestino (Resultados Digitais - Empresa 
            altamente reconhecida que oferece serviços de marketing 
            digital para empresas de todos os portes), 
            que elogia o nosso foco em resultados como 
            uma empresa séria de marketing digital.
        `,
		nome: 'Matheus Celestino',
		titulo: 'Executivo de Negócios, Resultados Digitais',
		content: `… No inicio de 2019, a Hacking Growth Inovação fechou uma parceria estratégica com a Resultados Digitais, e tive o enorme prazer de fazer essa ponte... Uma empresa totalmente focada em entrega e resultado de seus respectivos clientes. Sempre muito focada naquilo que se propõe a entregar.`
    },
    {
        img: 'https://media-exp1.licdn.com/dms/image/C4D03AQFWHshtL6DLMA/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=TZ66upwy0cLZvBidZdBlGJarJkFmY2jVZ3xAYp18xbY',
        alt: `
            Foto de Renata Costa, que está mais do que satisfeita 
            com o que alcançou com nossos serviços como Growth Hackers.
        `,
		nome: 'Renata Costa',
		titulo: 'Gestora e Consultora de Educação a Distância (EaD) l Professora de Tecnologia da Informação l Conteudista de TI',
        content: `… Excelente sua atuação como Growth Hacker. Nossos diálogos e trocas de informações fizeram o meu SSI decolar!`
	}
].map(e => /*html*/`
    <div class="w-15remLG">
        <div class="p-1rem">
            <img src="${e.img}" alt="${e.alt}"
            class="w-10rem m-auto br-rad-round br-c-dark">
            <h3
            class="brb-c-dark mx-auto"
            ><em>${e.nome}</em></h3>
            <h4>${e.titulo}</h4>
            <p>
                “${e.content}”
            </p>
        </div>
    </div>
`).join('')

module.exports = /*html*/`
<section id="depoimentos" class="tx-center px-10">
    <h2 class="${title}">Veja algumas opiniões de quem já fechou negócio conosco</h2>
        <div class="flxLG j-center">
            ${testemunhos}
        </div>
</section>
`