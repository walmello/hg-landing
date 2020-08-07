const nav = {
    mobile: 'h-4rem bg-dark-t fixed w-100v p-05rem top flx j-between brd-box',
    logo: 'h-100',
    menu: 'h-100 w-3rem',
    menuopen: ''
}

module.exports = 
/*html*/`
<nav>
    <div class="mobile">
        <div class="${nav.mobile}">
            <img class="${nav.logo}" src="static/img/hg-full.svg" alt="Logotipo moderno da Hacking Growth: Letras H e G conectadas em formato triangular com preenchimento em degradê nas cores rosa, roxo e azul.">
            <img id="menuOff" class="${nav.menu}" src="static/img/menu.svg" alt="Ícone do menu com 3 linhas rosas.">
            <div id="menuOn" class="none">
                <div class="flx bg-dark-t c-white absolute top right p-1rem">
                    <ul class="ul-none li-p-1rem w-15rem tx-upper tx-bold tx-75">
                        <li>Home</li>
                        <li>Nossos Serviços</li>
                        <li>Cases de sucesso</li>
                        <li>Quem Somos</li>
                        <li>Trabalhe conosco</li>
                    </ul>
                    <img class="${nav.menu}" src="static/img/x.svg" alt="Ícone do menu com 3 linhas rosas.">
                </div>
            </div>            
        </div>
        <ul class="h-4rem m-0 bg-dark fixed w-100v p-05rem bottom flx j-around a-center ul-none brd-box brt-c-primary c-white">
            <li>F</li>
            <li>L</li>
            <li>T</li>
        </ul>
    </div>
    <div class="desktop">
        <div class="bg-dark flx p-2rem">
            <img class="" src="static/img/hg-full.svg" alt="Logotipo moderno da Hacking Growth: Letras H e G conectadas em formato triangular com preenchimento em degradê nas cores rosa, roxo e azul.">        
            <div>

            </div>
        </div>
    </div>
<nav>
<!--
<nav class="${nav.bar}">
    <div>
        <img class="${nav.logo}" src="static/img/hg-full.svg" alt="Logotipo moderno da Hacking Growth: Letras H e G conectadas em formato triangular com preenchimento em degradê nas cores rosa, roxo e azul.">
    </div>
    <div>
        <div class="mobile">
            <div id="menuOff" class="h-100">
                <img class="${nav.menu}" src="static/img/menu.svg" alt="Ícone do menu com 3 linhas rosas.">
            </div>        
            <div id="menuOn" class="none">        
                <div class="flx li-none c-white bg-dark absolute right top m-0 p-1rem">
                    <ul class="ul-none p-0 li-p-1rem tx-upper tx-bold tx-left w-15rem p-1rem">
                        <li>Home</li>
                        <li>Nossos Serviços</li>
                        <li>Cases de sucesso</li>
                        <li>Quem Somos</li>
                        <li>Trabalhe conosco</li>
                    </ul>
                    <img class="${nav.menu}" src="static/img/x.svg" alt="Ícone para fechar o menu">
                </div>
            </div>
        </div>
        <div class="desktop">
            <p>desktop</p>
        </div>
    </div>
    <!--
    <div class="mobile">
        <div id="menuOff" class="h-100 bg-red">
            <img class="bg-red ${nav.menu}" src="static/img/menu.svg" alt="Ícone do menu com 3 linhas rosas.">
        </div>        
        
        <ul class="flx p-0 ul-none c-white li-p-1rem tx-upper tx-bold">
            <li>Home</li>
            <li>Nossos Serviços</li>
            <li>Cases de sucesso</li>
            <li>Quem Somos</li>
            <li>Trabalhe conosco</li>
        </ul>

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
    -->

</nav>
`