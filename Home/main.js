// Aparecer menu quando tocar no Icone do Hamburguer

const menu = document.querySelector('#menu')
const menuWrapper = document.querySelector('.menu-wrapper')

menu.onclick = function(){
    menuWrapper.classList.toggle('open')
}

// menu.onmouseout = function(){
//     menuWrapper.classList.remove('open')
// }

