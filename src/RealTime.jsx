import { useState } from "react"


let InputText=()=>{
    let [real,realText]=useState("")
    let inputChange=(e)=>{
realText(e.target.value)

    }
    return (
        <div>
<input type="text" placeholder="enter your description "  onChange={inputChange}/>
<br />
<p>{real}</p>
        </div>
    )
}

export default InputText