//parent component because it will render stats display and input
import React, {useState} from 'react';
import type { CharacterCounterProps} from '../../types/index.ts';
import  { StatsDisplay} from '../StatsDisplay/StatsDisplay.tsx';
import type { TextStats } from '../../types/index.ts';
import type { TextInputProps } from '../../types/index.ts';
import { TextInput } from '../TextInput/TextInput.tsx';



export const counter: React.FC<CharacterCounterProps> = ({
    //creating variables that will later be used as limits
    minWords: 75,
    maxWords:300,
    
})=> {
    const [text, setText ] = useState("");
}


    return(

     <div>
        <TextInput onTextChange={setText}/>
        <StatsDisplay stats={stats}/>
        <p>{Text.split(" ").length} words and {Text.length} characters</p>
    </div> 
     )

};


//I need a function that passes in type stats display 
//Render the text input in character counter
//Ill need something like the value of  textarea.length
//Ill say reading time is like 75 words a minute so wordCount/75 
//


