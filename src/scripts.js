$ = query => document.querySelector(query)

const menuOff = $('#menuOff')
const menuOn = $('#menuOn')

$('#menuOff').onclick = () => {
    menuOff.style.display = 'none'
    menuOn.style.display = 'block'
}

$('#menuOn').onclick = () => {
    menuOff.style.display = 'block'
    menuOn.style.display = 'none'
}