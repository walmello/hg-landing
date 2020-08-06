const background = name => "background: url('static/img/bg/header.jpg')"

module.exports = /*css*/`
@font-face {
    font-family: 'Montserrat';
    font-style: italic;
    src: url('static/fonts/Montserrat/Montserrat-Italic.ttf') format("truetype");    
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url('static/fonts/Montserrat/Montserrat-Regular.ttf') format("truetype");    
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url('static/fonts/Montserrat/Montserrat-Bold.ttf');
    font-weight: bold;
    font-display: swap;
}

html {
    font-family: 'Montserrat';
}

header {
    ${background('header')}
}

`