const nav = {
    mobile: 'h-4rem bg-dark-t fixed w-100v p-05rem top flx j-between brd-box',
    logo: 'h-100',
    menu: 'h-100 w-3rem',
    menuopen: ''
}

const list = /*html*/`
    <li>
        <a href="#" class="${link}">Home</a>
    </li>
    <li>
        <a href="#" class="${link}">Nossos Serviços</a>
    </li>
    <li>
        <a href="#" class="${link}">Cases de sucesso</a>
    </li>
    <li>
        <a href="#" class="${link}">Quem Somos</a>                        
    </li>
    <li>
        <a href="#" class="${link}">Trabalhe conosco</a>
    </li>
`

const mobile = /*html*/`
    <div class="w-3rem"> 
    </div>
    <img class="${nav.logo}" src="static/img/hg.svg" alt="Logotipo moderno da Hacking Growth: Letras H e G conectadas em formato triangular com preenchimento em degradê nas cores rosa, roxo e azul.">
    <img id="menuOff" class="${nav.menu}" src="static/img/menu.svg" alt="Ícone do menu com 3 linhas rosas.">
    <div id="menuOn" class="none">
        <div class="w-3rem"> 
        </div>
        <div class="flx bg-dark-t c-white absolute top right p-1rem">
            <ul class="ul-none li-p-1rem w-12rem tx-upper tx-bold tx-75">
                ${list}
            </ul>
            <img id="menuClose" class="${nav.menu}" src="static/img/x.svg" alt="Ícone do menu com 3 linhas rosas.">
        </div>
    </div>          
`

const sticky = /*html*/`
    <div class="fixed flx h-2rem bg-dark w-100 left p-1rem j-between">
        <div class="w-3rem"> 
        </div>
        <img class="${nav.logo}" src="static/img/hg-full.svg" alt="Logotipo moderno da Hacking Growth: Letras H e G conectadas em formato triangular com preenchimento em degradê nas cores rosa, roxo e azul.">
        <div class="flx a-center">
            <ul class="flx ul-none li-p-05rem c-white tx-upper tx-bold">
                <li>Home</li>
                <li>Nossos Serviços</li>
                <li>Cases de sucesso</li>
                <li>Quem Somos</li>
                <li>Trabalhe conosco</li>
            </ul>
        </div>
        <div class="w-3rem c-white"> 
        </div>
    </div>
`

const desktop = /*html*/`
    <div class="bg-dark flx j-between p-2rem">
        <img class="" src="static/img/hg-full.svg" alt="Logotipo moderno da Hacking Growth: Letras H e G conectadas em formato triangular com preenchimento em degradê nas cores rosa, roxo e azul.">        
        <div>
            <ul class="p-0 flx ul-none li-p-1rem c-white tx-upper tx-bold">
                ${list}
            </ul>
        </div>
    </div>
`

module.exports = 
/*html*/`
<nav>
    <div class="mobile">
        <div class="${nav.mobile}">
            ${mobile}
        </div>
    </div>
    <div class="desktop">
        <div id="sticky" class="none">
            ${sticky}
        </div>
        ${desktop}
    </div>
</nav>
`