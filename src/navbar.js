const nav = {
    bar: 'h-4rem bg-dark-t fixed w-100v p-05rem top flx j-between brd-box',
    logo: 'h-100',
    menu: 'h-100 w-3rem'
}

module.exports = 
/*html*/`
<nav class="${nav.bar}">
    <img class="${nav.logo}" src="static/img/hg-full.svg" alt="Logotipo moderno da Hacking Growth: Letras H e G conectadas em formato triangular com preenchimento em degradê nas cores rosa, roxo e azul.">
    <div class="mobile">
        <div id="menuOff">
            <img class="${nav.menu}" src="static/img/menu.svg" alt="Ícone do menu com 3 linhas rosas.">
        </div>
        <div id="menuOn" class="none">        
            <div class="flx li-none c-white bg-dark absolute right top m-0 p-1rem">
                <ul class="ul-none p-0 li-p-1rem tx-upper tx-bold w-10rem p-1rem">
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
                <img class="${nav.menu}" src="static/img/x.svg" alt="Ícone para fechar o menu">
            </div>
        </div>
    </div>
    <div class="desktop ">
        <div class="flx a-center">
            <ul class="flx a-center p-0 ul-none c-white li-p-1rem tx-upper tx-bold">
                <li>Home</li>
                <li>Nossos Serviços</li>
                <li>Cases de sucesso</li>
                <li>Quem Somos</li>
                <li>Trabalhe conosco</li>
            </ul>
        </div>
    </div>
</nav>
`