//parent component because it will render stats display and input
import React, {useState} from 'react';
import type { TextInput} from '../TextInput.tsx';
import type { StatsDisplay } from '../CharacterCounter.tsx';
import type { CharacterCounterProps } from '../../types/index.ts';

//create two use states one for text input and one for character count



export default const CharacterCounter: React.FC<CharacterCounterProps> =  ({

const [text ,setInput] = useState("");
// pass function instead of object
}) => {
    return (
    <div>
    <h2> Character Count</h2>
    
    // text input
        //event on type
    
    //stats here
        //event on type


    </div>
    )

    //reset stats when empty

}






