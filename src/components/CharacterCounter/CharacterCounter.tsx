//parent component because it will render stats display and input
import React, {useState} from 'react';
import type { CharacterCounterProps} from '../../types/index.ts';
import type { StatsDisplay} from '../../types/index.ts';
import type { TextInput} from '../TextInput/TextInput.tsx';



export const CharacterCounter: React.FC<CharacterCounterProps> = ({

 }) => {
 //state
    const [input, setInput] = useState('');

 return (
    //passing in fake data rn for styling

    <div className='character-counter-div'>
        <h2>Character Counter</h2>

        <p> Word Count: </p>
        <p> Character Count: </p>
        <p> Target Reading Time</p>


    </div>
)
};


//character counter is the parent
//character counter has to pass input and stats in a callback
//character counter has to render and return


// I am working on creating another use state ordeal for the input here but I am slowly working it out 

// export default const CharacterCounter: React.FC<CharacterCounterProps> =  ({
//   set variable for input and function to update input 
//      const [input ,setInput] = useState("");
//     pass function instead of object
    // // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { //handles the event
    // //need an event 
    // onKeyDown
    // }) => {
    //     return (
    //     <div>
    //     // text input
    //     <input></input>
    //         //event on type
    //         //event on type
    //     </div>
    //     )
    //     //reset stats when empty
    // }
    