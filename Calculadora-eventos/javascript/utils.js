export function calculate(totalAdults,totalChildren){
    let eventFood = parseInt(totalAdults + totalChildren) * 0.7
    let eventDrink = parseInt(totalAdults + totalChildren) * 0.5

    const result = "A quantidade total de comida para o seu evento é de " + eventFood + " kg e\n a quantidade total de bebida é " + eventDrink +" L"

    return result
}

