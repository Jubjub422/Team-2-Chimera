import { Chimera } from "./Chimera.js"

const renderHTML = () => {
    document.querySelector("#container").innerHTML = Chimera()
}

renderHTML()

document.addEventListener(
    "stateChanged",
    event => {
        renderHTML()
    }
)
console.log("Welcome to the main module");

