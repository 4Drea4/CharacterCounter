import React from 'react';
import type {StatsDisplayProps} from '../../types';
import { TextStats } from '../../types';

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
    //destructuring 

    const{ characterCount, wordCount, readingTime 
    } = stats;
    showReadingTime?


}) => {
    return (
        <div className="w-full">
            <section
            className="statsDisplay "
            characterCount={characterCount}
            wordCount= {wordCount}
           readingTime= {readingTime}
            />
        </div>
    );
};
