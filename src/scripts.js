$ = query => document.querySelector(query)

const menuOff = $('#menuOff')
const menuOn = $('#menuOn')

let scroll = window.scrollY

$('#menuOff').onclick = () => {
    menuOff.style.display = 'none'
    menuOn.style.display = 'block'
}

$('#menuOn').onclick = () => {
    menuOff.style.display = 'block'
    menuOn.style.display = 'none'
}

window.onscroll = () => {
    scroll = window.scrollY
    if(scroll > 150){
        $('#sticky').style.display = 'block'
    } else {
        $('#sticky').style.display = 'none'
    }
}