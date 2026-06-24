import { useState } from "react"




let RandomNum = () => {
    let randomDecimal = Math.random()
    let [visible, set] = useState(false)
    let Click = () => {
        set(!visible)
    }
    return (
        <div>

            <input type="text" readOnly value={visible ? randomDecimal : randomDecimal}  /> <br />
            <button onClick={Click} >Generate</button>

        </div>
    )

}

export default RandomNum