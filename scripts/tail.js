import { getTails, setTail } from "./database";

const tails = getTails()

document.addEventListener("change", (event) => {
    if (event.target.name === "tail") {
        setTail(parseInt(event.target.value))
    }
})

export const Tails = () => {

    let html = `<ul>
        ${tails.map(tail => {
        return `<li>
                    <input type="radio" name="tail" value="${tail.id}" /> ${tail.name}
                    </li>`
    }).join("")
        }
    </ul>`

    return html
}