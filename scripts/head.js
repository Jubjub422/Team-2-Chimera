import { getHeads, setHead } from "./database.js";

const heads = getHeads()

document.addEventListener("change", (event) => {
    if (event.target.name === "head") {
        setHead(parseInt(event.target.value))
    }
})

export const Heads = () => {

    let html = `<ul>
        ${heads.map(head => {
        return `<li>
                    <input type="radio" name="head" value="${head.id}" /> ${head.name}
                    </li>`
    }).join("")
        }
    </ul>`

    return html
}