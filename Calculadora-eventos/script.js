const form = document.querySelector("#form")
let eventType = document.querySelector("#eventType")
let totalAdults
let totalChildren

console.log(eventType)
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

    eventTypeValue = eventType.value;
    totalAdults = Number(document.querySelector("#adults").value);
    totalChildren = Number(document.querySelector("#children").value);
    
    calculate(totalAdults, totalChildren)
    changeModalText(totalAdults, totalChildren, totalFoodandDrink)
    
    modal.open()
}

function calculate(totalAdults, totalChildren){

    totalFoodandDrink.food = totalAdults*0.4 + totalChildren*0.15
    totalFoodandDrink.Adrink = totalAdults*2
    totalFoodandDrink.NAdrink = totalAdults*0.4 + totalChildren*0.25
}

function changeModalText(totalAdults, totalChildren, totalFoodandDrink){
    let message = `Total de convidados: ${totalAdults+totalChildren} convidados
                   Total de comida necessária: ${totalFoodandDrink.food} kg
                   Total de bebida alcoólica: ${totalFoodandDrink.Adrink} L
                   Total de bebida não-alcoólica: ${totalFoodandDrink.NAdrink} L`

    modal.text.innerText = message
    modal.h1.innerText = eventTypeValue
}

modal.modalButton.onclick = function(){
    modal.close()
}