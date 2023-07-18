import { modal } from "./modal.js"
import { calcularProteina, calcularBebidaA, calcularBebidaNA } from "./utils.js"


const form = document.querySelector('form')
const inputTipoEvento = document.querySelector('#tipo-evento')
const inputTotalAdultos = document.querySelector('#adultos')
const inputTotalCriancas = document.querySelector('#criancas')


form.onsubmit = showModalResult

function showModalResult(event){
    event.preventDefault()

    const tipoEvento = inputTipoEvento.value
    const totalAdultos = inputTotalAdultos.value
    const totalCriancas = inputTotalCriancas.value

    const proteina = calcularProteina(totalAdultos,totalCriancas)
    const bebidaA = calcularBebidaA(totalAdultos,totalCriancas)
    const bebidaNA = calcularBebidaNA(totalAdultos,totalCriancas)
    
    MostrarResultado(tipoEvento,proteina,bebidaA,bebidaNA)
}


function MostrarResultado(tipoEvento,proteina,bebidaA,bebidaNA){
    const mudarModalTexto = `Quantidade de proteina necessária: ${proteina}g
    Quantidade de bebida alcoólica necessária: ${bebidaA}ml
    Quantidade de bebida não-alcoólica necessária: ${bebidaNA}ml`
    
    modal.h1.innerText = tipoEvento
    modal.text.innerText = mudarModalTexto

    modal.open()
}