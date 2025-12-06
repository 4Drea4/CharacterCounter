import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // title
    <div
    style={{
      display:'flex',
      flexDirection: 'column',
    }}>
      <h1> Whats on your mind?</h1>

     {/* text input */}
    <div className='input'>


    </div>
    
    {/* Text stats */}
      <div className='card'>
    
    
       
    </div>



    </div>
   
  )
}

export default App
