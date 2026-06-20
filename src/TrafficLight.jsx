import { useState } from "react";

const TrafficLight = () => {
  // Track which light is currently active
  const [active, setActive] = useState("red");

  const changeLight = () => {
    if (active === "red") setActive("green");
    else if (active === "green") setActive("yellow");
    else if (active === "yellow") setActive("red");
  };

  return (
    <div>
        <div style={{width:"40px",height:"40px", margin:"10px auto",borderRadius:"50%",backgroundColor:active==="red"?"#FF0000":"#220"}}></div>

<div style={{width:"40px",height:"40px", margin:"10px auto",borderRadius:"50%",backgroundColor:active==="yellow"?"#FFFF00":"#220"}}></div>



        <div style={{width:"40px",height:"40px", margin:"10px auto",borderRadius:"50%",backgroundColor:active ==="green"?"#00FF00":"#220"}}></div>
        
        <br />
        <button onClick={changeLight}>changeColor</button>
    </div>
  )
};

export default TrafficLight;