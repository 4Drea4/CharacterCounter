
// create a textinput component that handles user input and communicates changes to its parent.
export interface TextInputProps {
    onTextChange: (text: string) => void;
    placeholder?: string;
    initialValue?: string;
}

// create a statsdisplay comp. that shows various statitistics about the text.

export interface TextStats{
    characterCount: number;
    wordCount: number;
    readingTime: number; //in min.

}
//receives stats from parent
export interface StatsDisplayProps{
    stats: TextStats;
    showReadingTime?: boolean;
}

//create a charactercounter component that combines the above comp. and manages the state //parent component
//parent CharacterCounter manages the data (state)
export interface CharacterCounterProps {
    minWords?: number;
    maxWords?:number;
    targetReadingTime?: number; //also in min.
}