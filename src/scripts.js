$ = query => document.querySelector(query)

$('#menuOff').onclick = () => toggleMenu()
$('#menuOn').onclick = () => toggleMenu()

function toggleMenu(){
    $('#menuOff').classList.toggle('none')
    $('#menuOn').classList.toggle('none')
}

window.onscroll = () => {
    let scroll = window.scrollY
    if(scroll > 150){
        $('#sticky').classList.remove('none')
    } else {
        $('#sticky').classList.add('none')
    }
}

function toggleFaq(id){
    $('#faq-open-'+id).classList.toggle('none')
    $('#faq-close-'+id).classList.toggle('none')
    $('#faq-content-'+id).classList.toggle('none')
}
