import { useState } from "react"

let ColorPicker=()=>{
    let [color,setColor]=useState('#f0f2f5')
    let colorChange=(event)=>{
        setColor(event.target.value)
    }

    let display=color;
    console.log(display)
    return(

        
        <div style={{ backgroundColor:color,height:"100vh" }}>
            <input type="color"  value={color} onChange={colorChange} />
            <h1>{color.toUpperCase() }</h1>
            
            </div>
            )
            }

            
export default ColorPicker