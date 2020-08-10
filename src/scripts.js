$ = query => document.querySelector(query)

const menuOff = $('#menuOff')
const menuOn = $('#menuOn')

let scroll = window.scrollY

$('#menuOff').onclick = () => {
    menuOff.style.display = 'none'
    menuOn.style.display = 'block'
}

$('#menuClose').onclick = () => {
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

function openFaq(id){
    $('#faq-close-'+id).style.display = 'block'
    $('#faq-open-'+id).style.display = 'none'
    $('#faq-content-'+id).style.display = 'block'
}

function closeFaq(id){
    $('#faq-open-'+id).style.display = 'block'
    $('#faq-close-'+id).style.display = 'none'
    $('#faq-content-'+id).style.display = 'none'
}