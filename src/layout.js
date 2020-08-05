module.exports = /*html*/`<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hacking Growth</title>
        <link rel="icon" href="hg.png">
        <!-- Google Tag Manager -->
        <!--
        <script>
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TDL6CBM');
        </script>
        -->
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
        <meta name="description" content="Marketing digital voltado para aumentar a taxa de conversão do seu negócio. Oferecemos soluções baseadas em inteligência, otimização e dados.">
        <style>
            :root{
                --pink: #FB358C;
                --cyan: #1CFAD5;
                --violet: #7958C3;
                --blue: #06B3F5;
                --light: #eee;
                --dark: #092342;
                --darkt: #092342dd;
                --gradient: linear-gradient(to right, var(--pink), var(--cyan), var(--violet), var(--blue));
            }

            body {
                font-family: 'Montserrat', sans-serif;
                margin: 0;
                padding: 0;
            }

            html {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <!--
        <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TDL6CBM"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
        -->
        <!-- End Google Tag Manager (noscript) -->   
        ${ page('index') }
    </body>
</html>
`