module.exports = /*html*/`    
    <aside class="bg-dark h-100 w-5rem brr-c-primary c-white">
        <div class="mobile">
            <ul class="h-4rem m-0 bg-dark fixed w-100v p-05rem bottom flx j-around a-center ul-none brd-box brt-c-primary c-white">
                <li>
                    <a href="#">
                       <img src="static/img/facebook.svg" class="h-2rem" alt="icone do facebook">
                    </a>                                
                </li>                
                <li>
                    <a href="#">
                        <img src="static/img/instagram.svg" class="h-2rem" alt="icone do instagram">
                    </a>                
                <li>
                    <a href="#">
                        <img src="static/img/linkedin.svg" class="h-2rem" alt="icone do linkedin">
                    </a>                
                </li>
            </ul>
        </div>
        <div class="desktop">
            <ul class="ul-none h-100 flx flx-col j-around li-rotate m-0 tx-bold">
                <div></div>
                <li>
                    <a class="${link}" href="#">Linkedin</a>
                </li>                
                <li>
                    <a class="${link}"  href="#">Instagram</a>
                </li>                
                <li>
                    <a class="${link}"  href="#">Facebook</a>
                </li>
                <div></div>
            </ul>
        </div>
    </aside>
    <!--
    <ul class="h-4rem m-0 bg-dark fixed w-100v p-05rem bottom flx j-around a-center ul-none brd-box brt-c-primary c-white">
        <li>F</li>
        <li>L</li>
        <li>T</li>
    </ul>
    -->
`