export function calcularProteina(totalAdultos,totalCriancas){
    return (((totalAdultos*300) + (totalCriancas*150))/1000).toFixed(2)
}

export function calcularAcompanhamento(totalAdultos,totalCriancas){
    return (((totalAdultos*100) + (totalCriancas*50))/1000).toFixed(2)
}

export function calcularBebidaA(totalAdultos){
    return ((totalAdultos*500)/1000).toFixed(2)
}

export function calcularBebidaNA(totalAdultos,totalCriancas){
    return (((totalAdultos*300) + (totalCriancas*150))/1000).toFixed(2)
}

