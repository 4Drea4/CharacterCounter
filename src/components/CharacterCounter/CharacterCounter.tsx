//parent component because it will render stats display and input
import React, {useState} from 'react';
import type { CharacterCounterProps} from '../../types/index.ts';
import  { StatsDisplay} from '../StatsDisplay/StatsDisplay.tsx';
import type { TextStats } from '../../types/index.ts';
import type { TextInputProps } from '../../types/index.ts';



export const counter: React.FC<CharacterCounterProps> = ({
   const wordsAMin = 75;
   const maxCap = 300;
   const [counter, setCounter ] useState= ""

   const stats: StatsDisplayProps ={
    characterCount: counter.length,
    

   }
  

    return(
        <div>
     
        </div> 
     )

};
)


//I need a function that passes in type stats display 
//Render the text input in character counter
//Ill need something like the value of  textarea.length
//Ill say reading time is like 75 words a minute so wordCount/75 
//


