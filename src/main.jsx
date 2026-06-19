import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CounterApp from './CounterApp'
import InputText from './RealTime'
import Toggle from './Toggle'


import ColorPicker from './ColorPicker'
import ThemePick from './ThemePick'
import VisibilityToggle from './VisibilityToggle'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CounterApp/>
    <InputText/>
    <Toggle/> 
     <ColorPicker/> */}
     {/* <ThemePick/> */}
     <VisibilityToggle/>
    
  </StrictMode>,
)
