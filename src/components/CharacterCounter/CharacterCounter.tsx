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

   

   const stats: StatsDisplayProps ={
    characterCount: counter.length,
    text.split("").length)

   }
  

    return(

     <div>
     <TextInput onTextChange={setCounter}/>
     <StatsDisplay stats={stats}
    </div> 
     )

};


//I need a function that passes in type stats display 
//Render the text input in character counter
//Ill need something like the value of  textarea.length
//Ill say reading time is like 75 words a minute so wordCount/75 
//


