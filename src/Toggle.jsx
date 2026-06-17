import { useState } from "react"


let Toggle=()=>{
    let [isVisible,setVisible]=useState(true)
    let show=()=>{
        setVisible(!isVisible)
    }
    return(
        <div>

            <button onClick={show}>
                
                {isVisible?"hide":"show"}
            </button>

        </div>
    )
}

export default Toggle