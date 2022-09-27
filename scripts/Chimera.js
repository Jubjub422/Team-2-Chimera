// Add Imports Here
import { Heads } from "./head.js"
import { Arms } from "./arm.js"
import { Tails } from "./tail.js"
import { Powers } from "./power.js"
import { Torsos } from "./torso.js"


export const Chimera = () => {
    return `<div class="choice-div">
        <h3>Heads</h3>
        ${ Heads() }
    </div>
    <div class="choice-div">
        <h3>Torsos</h3>
        ${ Torsos() }
    </div>
    <div class="choice-div">
        <h3>Arms</h3>
        ${ Arms() }
    </div>
    <div class="choice-div">
        <h3>Legs</h3>
        ${ Legs() }
    </div>
    <div class="choice-div">
        <h3>Tails</h3>
        ${ Tails() }
    </div>
    <div class="choice-div">
        <h3>Powers</h3>
        ${ Powers() }
    </div>
    <div class="choice-div">
    
    </div>`
}