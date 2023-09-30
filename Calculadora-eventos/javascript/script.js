import { modal } from "./modal.js"
import { calcularProteina,calcularAcompanhamento, calcularBebidaA, calcularBebidaNA } from "./utils.js"


const form = document.querySelector('form')
const inputTipoEvento = document.querySelector('#tipo-evento')
const inputTotalAdultos = document.querySelector('#adultos')
const inputTotalCriancas = document.querySelector('#criancas')


form.onsubmit = showModalResult

function showModalResult(){
    Event.preventDefault()

    const tipoEvento = inputTipoEvento.value
    const totalAdultos = inputTotalAdultos.value
    const totalCriancas = inputTotalCriancas.value

    const proteina = calcularProteina(totalAdultos,totalCriancas)
    const acompanhamento = calcularAcompanhamento(totalAdultos,totalCriancas)
    const bebidaA = calcularBebidaA(totalAdultos)
    const bebidaNA = calcularBebidaNA(totalAdultos,totalCriancas)
    
    MostrarResultado(tipoEvento,proteina,acompanhamento,bebidaA,bebidaNA)
}


function MostrarResultado(tipoEvento,proteina,acompanhamento,bebidaA,bebidaNA){
    let mudarModalTexto

    if(tipoEvento == "Churrasco"){
        mudarModalTexto = `Quantidade de proteina necessária: ${proteina}kg
                                 
                                 Sugestões: ${proteina/3}kg de carne bovina, ${proteina/3}kg de frango, ${proteina/9}kg de linguiça, ${proteina/9}kg de pão de alho e ${proteina/9}kg de queijo

                                 Quantidade de acompanhamento necessária: ${acompanhamento}kg

                                 Sugestões: ${acompanhamento/2}kg de vinagrete e ${acompanhamento/2}kg de farofa
                                 
                                 Quantidade de bebida alcoólica necessária: ${bebidaA}L
                                 Quantidade de bebida não-alcoólica necessária: ${bebidaNA}L`
    
    }
    else if (tipoEvento == "Feijoada"){
        mudarModalTexto = `Quantidade de proteina necessária: ${proteina}kg
                                 
                                 Sugestões: ${proteina/3}kg de charque, ${proteina/3}kg de costelinha defumada, ${proteina/3}kg de linguiça calabresa para o feijão

                                 Quantidade de acompanhamento necessária: ${acompanhamento}kg

                                 Sugestões: ${acompanhamento/3}kg de vinagrete, ${acompanhamento/3}kg de farofa e ${acompanhamento/3} de couva refogada
                                 
                                 Quantidade de bebida alcoólica necessária: ${bebidaA}L
                                 Quantidade de bebida não-alcoólica necessária: ${bebidaNA}L`
    
    }
    else{
        mudarModalTexto = `Quantidade de proteina necessária: ${proteina}kg
                                 
                                 Sugestões: ${proteina/2}kg de filé, ${proteina/2}kg de peito de frango

                                 Quantidade de acompanhamento necessária: ${acompanhamento}kg

                                 Sugestões: ${acompanhamento/3}kg de arroz, ${acompanhamento/3}kg de macarrão e ${acompanhamento/3} de salada diversa
                                 
                                 Quantidade de bebida alcoólica necessária: ${bebidaA}L
                                 Quantidade de bebida não-alcoólica necessária: ${bebidaNA}L`
    }

    modal.h1.innerText = tipoEvento
    modal.text.innerText = mudarModalTexto

    modal.open()
}