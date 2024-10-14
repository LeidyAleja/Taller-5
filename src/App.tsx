import { useState } from 'react'
import viteLogo from './assets/imagen.png'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a target="_blank">
          <img src={viteLogo} className="Icono" alt="Icono" />
          
        </a>
        
      </div>
      <h1>Fotos</h1> 
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </div>
    </>
  )
}

export default App
