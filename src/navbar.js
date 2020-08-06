const nav = {
    bar: 'h-4rem bg-dark-t fixed w-100v p-1rem px-1 top flx j-between brd-box',
    logo: 'h-100',
    menu: 'h-100 w-3rem'
}

module.exports = 
/*html*/`
<nav class="${nav.bar}">
    <div>
        <img class="${nav.logo}" src="static/img/hg-full.svg" alt="Logotipo moderno da Hacking Growth: Letras H e G conectadas em formato triangular com preenchimento em degradê nas cores rosa, roxo e azul.">
    </div>
    <div>
        <img class="${nav.menu}" src="static/img/menu.svg" alt="Ícone do menu com 3 linhas rosas.">
    </div>
</nav>
`