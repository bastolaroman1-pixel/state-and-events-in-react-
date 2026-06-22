import { useState } from "react"


let VisibilityToggle=()=>{
let [password,setPassword]=useState("")
    let [isVisible,setVisible]=useState(false)
    let showPassword=()=>{
        const passwordInput = document.getElementById("myPassword");

        if (passwordInput.type==="password"){
            passwordInput.type="text"
        }

        else{
            passwordInput.type="password"
        }

    }



    
    return(

<div>

<input type="password"  id="myPassword" /> <br />

<button onClick={showPassword}>show password</button>

    
</div>
    )


}


export default VisibilityToggle