// Aparecer menu quando tocar no Icone do Hamburguer

const menu = document.querySelector('#menu')
const buttonMenu = document.querySelector('#menu i')
const menuWrapper = document.querySelector('.menu-wrapper')

menu.onclick = function(){
    menuWrapper.classList.toggle('open')

    if(menuWrapper.classList.contains('open')){
    buttonMenu.classList.remove('fa-solid fa-bars')
    buttonMenu.classList.add('fa-solid fa-x')
    }
}


