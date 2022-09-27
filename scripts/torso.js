import { getTorsos, setTorso } from "./database.js"
const torsos = getTorsos()


document.addEventListener("change", (event) => {
    if (event.target.name === "torso") {
        setTorso(parseInt(event.target.value))
    }
})

export const Torsos = () => {

    let html = `<ul>
        ${torsos.map(torso => {
        return `<li>
                    <input type="radio" name="torso" value="${torso.id}" /> ${torso.name}
                    </li>`
    }).join("")
        }
    </ul>`

    return html
}
