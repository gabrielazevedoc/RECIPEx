const form = document.querySelector("#form")
let eventType = document.querySelector("#eventType").value
let totalAdults = Number(document.querySelector("#adults").value)
let totalChildren = Number(document.querySelector("#children").value)


let totalFoodandDrink = {
    food: 0,
    Adrink: 0,
    NAdrink: 0
}

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

form.addEventListener("submit", showEventResult)


function showEventResult(event){
    event.preventDefault()

    calculate(totalAdults,totalChildren)
    changeModalText(totalAdults, totalChildren, totalFoodandDrink)
    
    modal.open()
}

function calculate(totalAdults, totalChildren){

    totalFoodandDrink.food = totalAdults*0.4 + totalChildren*0.15
    totalFoodandDrink.Adrink = totalAdults*2
    totalFoodandDrink.NAdrink = totalAdults*0.4 + totalChildren*0.25
}

function changeModalText(totalFoodandDrink, totalAdults, totalChildren){
    let message = `Total de convidados: ${totalAdults+totalChildren}
                   Total de comida necessária: ${totalFoodandDrink.food}
                   Total de bebida alcoólica: ${totalFoodandDrink.Adrink}
                   Total de bebida não-alcoólica: ${totalFoodandDrink.NAdrink}`

    modal.text.innerText = message
    modal.h1.innerText = eventType
}

modal.modalButton.onclick = function(){
    modal.close()
}