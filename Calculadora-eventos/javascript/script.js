const form = document.querySelector("#form")
form.addEventListener("submit", showEventResult())


const modal = {
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

function showEventResult(event){
    event.preventDefault()

    const eventType = document.querySelector("#eventType").value
    const totalAdults = document.querySelector("#adults").value
    const totalChildren = document.querySelector("#children").value

    modal.text.innerText = calculate(totalAdults, totalChildren)
    modal.h1.innerText = eventType
    modal.open()

}

function calculate(totalAdults, totalChildren){
    return `Total de comida necessária: ${(totalAdults + totalChildren)*0.5}
            Total de bebida necessária: ${(totalAdults + totalChildren*0.3)}`

    console.log("123")
}