const testemunhos = [
    {
		img: 'https://media-exp1.licdn.com/dms/image/C4D03AQF9npZ0RcFWPw/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=cTXYrCJbs1fDaC-JwL4oIPtVT2tF0XFmkE_8hMaGmjM',
		nome: 'Anderson Kleyton',
		titulo: 'Inovação Transformação Digital Indústria 4.0 - RevTec',
		content: `… oferece serviços aderentes a necessidade de cada cliente. Em um mercado onde a maioria tenta “empurrar goela baixo” seus produtos, este é um diferencial.`
    },
    {
		img: 'https://media-exp1.licdn.com/dms/image/C4D03AQH_9cKznSa8UA/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=M_0QkbyNkZo6B0Ne41n9hnj-GcRqtVtPQDbNc4uqkZA',
		nome: 'Geisa Luz',
		titulo: 'Consultora em Doenças Raras | Palestrante | Pós doutora em Saúde Pública | Enfermeira',
		content: `… Já contratei um dos seus serviços … e os resultados foram surpreendentes. Sou muito grata!`
    },
    {
		img: 'https://media-exp1.licdn.com/dms/image/C4D03AQEpP8xjQpch_A/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=FmwCLEz8jrjx-arSGIWxHgHb8YQlHOuCv5uuIvm1RiA',
		nome: 'Matheus Celestino',
		titulo: 'Executivo de Negócios, Resultados Digitais',
		content: `… No inicio de 2019, a Hacking Growth Inovação fechou uma parceria estratégica com a Resultados Digitais, e tive o enorme prazer de fazer essa ponte... Uma empresa totalmente focada em entrega e resultado de seus respectivos clientes. Sempre muito focada naquilo que se propõe a entregar.`
	}
].map(e => /*html*/`
    <img src="${e.img}">
    <h3><em>${e.nome}</em></h3>
    <h4>${e.titulo}</h4>
    <p>
        “${e.content}”
    </p>
`).join('')

module.exports = /*html*/`
<section id="depoimentos">
    <h2>Veja algumas opiniões de quem já fechou negócio conosco</h2>
        <div class="row">
            ${testemunhos}
        </div>
    </div>
</section>
`