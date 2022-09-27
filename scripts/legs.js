import { getLegs, setLeg } from "./database";

const legs = getLegs()

document.addEventListener("change", (event) => {
    if (event.target.name === "leg") {
        setLeg(parseInt(event.target.value))
    }
})

export const Powers = () => {

    let html = `<ul>
        ${legs.map(leg => {
        return `<li>
                    <input type="radio" name="leg" value="${leg.id}" /> ${leg.name}
                    </li>`
    }).join("")
        }
    </ul>`

    return html
}