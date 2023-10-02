import { modal } from "./modal.js"
import { calculate } from "./utils.js"

document.querySelector("form").onsubmit = showResult

function showResult(event){
    event.preventDefault()

    const eventType = document.querySelector('#eventType').value
    const totalAdults = Number(document.querySelector('#adults').value)
    const totalChildren = Number(document.querySelector('#children').value)

    modal.text.innerText = calculate()
    modal.h1.innerText = eventType
    modal.open()
}