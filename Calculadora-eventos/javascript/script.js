import { modal } from "./modal.js"


const form = document.querySelector('form')
const inputTipoEvento = document.querySelector('#tipo-evento')
const inputTotalAdultos = document.querySelector('#adultos')
const inputTotalCriancas = document.querySelector('#criancas')


form.onsubmit = showModalResult

function showModalResult(event){
    event.preventDefault()
    modal.open()

    calculateEvent()
}

//lógica para calcular o evento

function calculateEvent(){
    const tipoEvento = inputTipoEvento.value
    const totalAdultos = inputTotalAdultos.value
    const TotalCriancas = inputTotalCriancas.value

    if(tipoEvento == "Churrasco"){
        const totalCarne = totalAdultos*300
        console.log(totalCarne)
    }
}