// Aparecer dropdown menu quando clicar no Icone menu Hamburguer

const menu = document.querySelector('#menu')
const buttonMenu = document.querySelector('#menu i')
const menuWrapper = document.querySelector('.menu-wrapper')
const sections = document.querySelector('.sections')

menu.onclick = handleMenuButton

function handleMenuButton(){
     menuWrapper.classList.toggle('open')

    const isOpen = menuWrapper.classList.contains('open')
    buttonMenu.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}



