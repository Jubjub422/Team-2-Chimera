import { getPowers, setPower } from "./database.js"
const powers = getPowers()


document.addEventListener("change", (event) => {
    if (event.target.name === "power") {
        setPower(parseInt(event.target.value))
    }
})

export const Powers = () => {

    let html = `<ul>
        ${powers.map(power => {
        return `<li>
                    <input type="radio" name="power" value="${power.id}" /> ${power.size}
                    </li>`
    }).join("")
        }
    </ul>`

    return html
}
