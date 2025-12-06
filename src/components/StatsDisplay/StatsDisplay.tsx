import React from 'react';
import type {StatsDisplayProps} from '../../types';
import { TextStats } from '../../types';

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
    //destructuring 
   stats: { characterCount, wordCount, readingTime 
    } ,
    showReadingTime = true,


}) => {
    return (
        <div className="w-full">
            <section
            className ="statsDisplay "
            characterCount  ={characterCount}
            wordCount= {wordCount}
           readingTime= {readingTime}
            />
        </div>
    );
};
