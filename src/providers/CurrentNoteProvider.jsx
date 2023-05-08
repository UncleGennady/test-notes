import React, {useState} from 'react';
import { createContext } from "react";

const initialValue = null
export const CurrentNoteContext = createContext(initialValue)

export const CurrentNoteProvider = ({children}) => {
    const [currentNote, setCurrentNote] = useState(initialValue)
    return (
        <CurrentNoteContext.Provider value={{currentNote, setCurrentNote}}>
            {children}
        </CurrentNoteContext.Provider>
    );
};
