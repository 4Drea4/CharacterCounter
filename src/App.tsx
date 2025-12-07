import './App.css'
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter.tsx'

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

    {/* CharacterCounter */}
    <CharacterCounter/>

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
