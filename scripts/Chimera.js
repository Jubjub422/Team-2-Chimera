// Add Imports Here
import { Heads } from "./head.js"
import { Torsos } from "./torso.js"
import { Arms } from "./arm.js"
import { Legs } from "./leg.js"
import { Tails } from "./tail.js"
import { Powers } from "./power.js"


export const Chimera = () => {
    return `<h1>Create a Chimera</h1>
    <div class="choice-div">
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
    <button type="button" id="order-btn">Create Order</button>
    
    <div id="orders-div">
    
    </div>`
}