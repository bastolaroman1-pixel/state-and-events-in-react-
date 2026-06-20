


import { useState } from 'react'
import myImg from './assets/hero.png'

let ImageToggle=()=>{
    let [hide,setHide]=useState(true)

    let toggleButton=()=>{
        
setHide(!hide)
    }
return(
    <div>
       {hide? <img src={myImg} alt="company name" width={150} />:"????"}
        <br />
        <button onClick={toggleButton}>{hide?"hide":"show"}</button>
    </div>
)
}

export default ImageToggle