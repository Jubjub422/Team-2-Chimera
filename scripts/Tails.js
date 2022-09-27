import { getTails, setTail } from "./database.js"

const tails = getTails()

export const Tails = () => {

    let html = `<div class="choice-div">
    <h4 id="tails-h4" style="margin-bottom: 0">Tails</h4>`

    html += tails.map(tail => {
        return `<input type="radio" name="tail" value="${tail.id}" />
        <label for="tail">${tail.name}</label>`
    }).join("")

    return html += `</div>`
}

document.addEventListener(
    "change",
    event => {
        if (event.target.name === "tail") {
            setTail(parseInt(event.target.value))
        }
    }
)