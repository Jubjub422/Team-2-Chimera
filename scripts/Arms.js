import { getArms, setArm } from "./database.js"

const arms = getArms()

export const Arms = () => {

    let html = `<div class="choice-div">
    <h4 id="arms-h4" style="margin-bottom: 0">Arms</h4>`

    html += arms.map(arm => {
        return `<input type="radio" name="arm" value="${arm.id}" />
        <label for="arm">${arm.name}</label>`
    }).join("")

    return html += `</div>`
}

document.addEventListener(
    "change",
    event => {
        if (event.target.name === "arm") {
            setArm(parseInt(event.target.value))
        }
    }
)