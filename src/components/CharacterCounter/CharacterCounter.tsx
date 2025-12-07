//parent component because it will render stats display and input
import React, {useState} from 'react';
import type { CharacterCounterProps} from '../../types/index.ts';
import  { StatsDisplay} from '../StatsDisplay/StatsDisplay.tsx';
import  { TextInput} from '../TextInput/TextInput.tsx';

// i know i have to pass the value of stats and input down from the parent of charactercounter but I do not know how to 
export default function UpdateStats(){
    const [input, setInput] = useState('');
    const [stats, setStats] = useState(characterCount: 0, wordCount:0, readingTime:0);
    const 
    


    return (
        <div>
            <h2> </h2>
            <input className='input' onClick={}></input>
        </div>
    )
}

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
    
 }) => {
 //state
 const [input, setInput] = useState({word:0 , character: 0,  reading:0});
   
//so for input i know we either start with an empty state or pass in placeholder from the input component but the video I am seeing is creating JS objects so I think i have to pass in objects that would be the equivalent to the character count and word count found in the other components

//update with callback events
//passing use spread operator on object as to not use exact object


//a bit confused here because in the tutorial the user is inputting various values and I realized that I need some sort of function that takes the input and then calculates the word count, reading time, and word count son actuallity we shouldnt need as many functions that are written this way
    function handleWordCount(event){
        setInput(i => ({...i , word: event.target.value})); //use spread operator to make new instance of input object js object with extra parentheses. arrow function indicate that it is the previous state by using i 
    }

    function handleCharacterCount(event){
        setInput(i => ({...i, character: event.target.value}));
    }

    function handleReadingTime(event){
        setInput(i => ({ ...i, reading:event.target.value}));
    }

 return (
    //passing in fake data rn for styling

    <div className='character-counter-div'>
        <h2>Character Counter</h2>
        <input type="text" className='usertexts'></input>
        <p> Word Count: </p> {input.word} onChange={handleWordCount}
        <p> Character Count:</p> {input.character}  onChange={handleCharacterCount}
        <p> Target Reading Time: </p>
        {input.reading} onChange={handleReadingTime}  

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
    