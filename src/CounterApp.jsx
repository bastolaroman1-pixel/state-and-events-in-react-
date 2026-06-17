import { useState } from "react"


let CounterApp=()=>{
    let [count,setCount]=useState(0)
    let increment=()=>setCount( count +1)

    let decrement=()=> setCount(count -1)

    let reset=()=>setCount(0)
    
    return(
        <div>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
<button onClick={reset}>Reset</button>
<br />
<p>Count:{count}</p>
        </div>
    )
}

export default CounterApp