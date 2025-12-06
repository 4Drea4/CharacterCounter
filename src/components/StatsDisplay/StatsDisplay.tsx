import React from 'react';
import type {StatsDisplayProps} from '../../types';

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
    //destructuring 
   stats: { characterCount, wordCount, readingTime 
    } ,
    showReadingTime =true,
}) => {
    return (
        <div className="stats">
        <h3> Your Stats</h3>
        <p>Character Count: {characterCount}</p>
        <p> Word Count:{wordCount} </p>
        <p> Estimated Reading Time: {showReadingTime ? readingTime :"We could not calculate the time on this one" }  </p>
        
        
        </div>
    );
};
