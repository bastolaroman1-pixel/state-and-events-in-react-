import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import RandomNum from './GenerateRandom'
import InputText from './RealTime'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CounterApp/> */}
    {/* <InputText/> */}
    {/* <Toggle/>  */}
     {/* <ColorPicker/> */}
     {/* <ThemePick/> */}
     {/* <VisibilityToggle/> */}
     {/* <ImageToggle/> */}
     {/* <TrafficLight/> */}
     <RandomNum/>
    
  </StrictMode>,
)
