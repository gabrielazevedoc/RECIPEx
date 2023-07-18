export const modal = {
    wrapper: document.querySelector('.modal'),
    h1: document.querySelector('.modal h1'),
    text: document.querySelector('.modal p'),
    modalButton: document.querySelector('.modal i'),

    open() {
        modal.wrapper.classList.add('open')
    },

    close(){
        modal.wrapper.classList.remove('open')
    }
}

modal.modalButton.onclick = function(){
    modal.close()
}