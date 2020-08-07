module.exports = /*html*/`
    <div class="${nav.mobile}">
        <div class="w-3rem"> 
        </div>
        <img class="${nav.logo}" src="static/img/hg.png" alt="Logotipo moderno da Hacking Growth: Letras H e G conectadas em formato triangular com preenchimento em degradê nas cores rosa, roxo e azul.">
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
`