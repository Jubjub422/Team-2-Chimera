// Add Imports Here
import { Arms } from "./Legs.js"
import { Tails } from "./Legs.js"
import { Powers } from "./Powers.js"
import { Legs } from "./Legs.js"
import { Legs } from "./Legs.js"
import { Legs } from "./Legs.js"
import { Legs } from "./Legs.js"


export const Chimera = () => {
    return `<div class="choice-div">
        ${ Heads() }
    </div>
    <div class="choice-div">
        ${ Torsos() }
    </div>
    <div class="choice-div">
        ${ Legs() }
    </div>
    <div class="choice-div">
        ${ Powers() }
    </div>
    <div class="choice-div">
    
    </div>`
}