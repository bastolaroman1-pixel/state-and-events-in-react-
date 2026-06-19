import { useState } from "react"


let VisibilityToggle=()=>{
let [password,setPassword]=useState("")
    let [isVisible,setVisible]=useState(false)
    let show=(event)=>{
        setVisible(event.target.value)

    }

    let click=()=>{

 setVisible(!isVisible)


    }

    
    return(

<div>
    <input
     type={isVisible?"password":"text"}
        onChange={show}
     />
    <br />

    <button onClick={click}>{isVisible?"show":"hide"}</button>
    
    <br />

    
</div>
    )


}


export default VisibilityToggle