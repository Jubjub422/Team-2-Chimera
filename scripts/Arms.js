import { getArms, setArms } from "./database.js"

export const Arms = () => {
    const arms = getArms()

    let html = `<h4 id="arms-h4">Arms</h4>
    <div class="choice-div">`

    html += arms.map(arm => {
        return `<label for="arm">${arm.name}</label>
        <input name="arm" value="${arm.id}" />`
    })
}

document.addEventListener(
    "change",
    event => {
        if (event.target.name === "arm") {
            setArms(parseInt(event.target.value))
        }
    }
)