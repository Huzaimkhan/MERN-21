import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const colors = [
    "blue",
    "blueviolet",
    "orange",
    "royalblue",
    "black",
    "green",
    "pink",
    "yello",
    "indigo",
    "violet",
    "royalblue",
    "neavyblue"
  ]

  const [color , setColor ] = useState()

  return (
    <div className='wrapper'>
      <div className="section" style={{background: color}}></div>
      <div className="wrap">
        {
          colors.map((colorItem) => {
            return <div onClick={() => setColor(colorItem)}  style={{ background: colorItem }}></div>
          })
        }
      </div>

    </div>
  )
}



export default App
