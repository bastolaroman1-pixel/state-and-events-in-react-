import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import RandomNum from './GenerateRandom'
import InputText from './RealTime'
import GeneratePassword from './GenerateRandom'



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
<GeneratePassword/>
    
  </StrictMode>,
)
