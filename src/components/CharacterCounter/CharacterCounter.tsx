//parent component because it will render stats display and input
import React, {useState} from 'react';
import type { TextInputProps } from '../../types';
import type { StatsDisplayProps } from '../../types';

//create two use states one for text input and one for character count


const [value, setValue] = useState(initialValue);