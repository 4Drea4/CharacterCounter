import './App.css'

import { CharacterCounter } from './components/CharacterCounter/CharacterCounter'

function App() {
  return (

    <div
    style={{
      display:'flex',
      flexDirection: 'column',
    }}>
  {/* title */}
      <h1> Alien Communicator</h1>

    {/* CharacterCounter(parent) */}
    <CharacterCounter/>


    </div>
   
  )
}

export default App;
