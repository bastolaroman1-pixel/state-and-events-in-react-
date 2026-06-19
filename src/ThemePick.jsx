import { useState } from "react"

let ThemePick=()=>{
    let [color,setColor]=useState("#ffff")
     let [isVisible,setVisible]=useState(true)
    
        
    
    let ThemeChange=(event)=>{
        setColor(event.target.value)
     setVisible(!isVisible)
          


    }

    let pageStyle={
        backgroundColor:isVisible?"#eaf3f5":"#1d1a1a",
        height:"100vh",
        padding:"20px",
        transition:"all 0.3s ease"
    }

    
    return(
        <div style={pageStyle}>
<button onClick={ThemeChange} > {isVisible?"Dark":"Light"} </button>

        </div>
    )
}

export default ThemePick