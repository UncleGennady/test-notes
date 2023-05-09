import React, {useState} from 'react';
import { createContext } from "react";

const initialValue = null
export const CurrentNoteIdContext = createContext(initialValue)

export const CurrentNoteIdProvider = ({children}) => {
    const [currentNoteId, setCurrentNoteId] = useState(initialValue)
    return (
        <CurrentNoteIdContext.Provider value={{currentNoteId, setCurrentNoteId}}>
            {children}
        </CurrentNoteIdContext.Provider>
    );
};
