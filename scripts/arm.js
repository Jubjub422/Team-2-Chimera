import { getArms, setArm } from "./database";

const arms = getArms()

document.addEventListener("change", (event) => {
    if (event.target.name === "arm") {
        setArm(parseInt(event.target.value))
    }
})

export const Arms = () => {

    let html = `<ul>
        ${arms.map(arm => {
        return `<li>
                    <input type="radio" name="arm" value="${arm.id}" /> ${arm.name}
                    </li>`
    }).join("")
        }
    </ul>`

    return html
}