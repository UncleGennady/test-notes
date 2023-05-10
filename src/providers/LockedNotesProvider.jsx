import React, {useState} from 'react';
import { createContext } from "react";

const initialValue = []
export const LockedNotesContext = createContext(initialValue)

export const LockedNotesProvider = ({children}) => {
    const [lockedNotes, setLockedNotes] = useState(initialValue)
    return (
        <LockedNotesContext.Provider value={{lockedNotes, setLockedNotes}}>
            {children}
        </LockedNotesContext.Provider>
    );
};
