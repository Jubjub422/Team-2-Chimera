import { getHeads, setHead } from "./database.js"

const heads = getHeads()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "head") {
            setHead(parseInt(event.target.value))
        }
    }
)

export const ChimeraHeads = () => {
    let html = `<ul>`

    // Use .map() for converting objects to <li> elements
    const listItems = heads.map(head => {
        return `<li>
        <input type="radio" name="head" value="${head.id}"/> ${head.head}
        </li>`
    })



    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += `</ul>`
    return html
}
