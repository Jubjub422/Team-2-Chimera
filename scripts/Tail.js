import { getTails, setTails } from "./database.js"

export const Tails = () => {
    const tails = getTails()

    let html = `<h4 id="tails-h4">Tails</h4>
    <div class="choice-div">`

    html += tails.map(tail => {
        return `<label for="tail">${tail.name}</label>
        <input name="tail" value="${tail.id}" />`
    })
}

document.addEventListener(
    "change",
    event => {
        if (event.target.name === "tail") {
            setTails(parseInt(event.target.value))
        }
    }
)