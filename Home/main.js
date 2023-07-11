// Aparecer menu quando tocar no Icone do Hamburguer

const menu = document.querySelector('#menu')
const buttonMenu = document.querySelector('#menu i')
const menuWrapper = document.querySelector('.menu-wrapper')

menu.onclick = function(){
    menuWrapper.classList.toggle('open')

    const isOpen = menuWrapper.classList.contains('open')
    buttonMenu.classList = isOpen
    ? 'fa-regular fa-x'
    : 'fa-solid fa-bars'
}


