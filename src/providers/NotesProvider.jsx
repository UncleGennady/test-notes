import React, {useState} from 'react';
import { createContext } from "react";

const initialValue = []
export const NotesContext = createContext(initialValue)

export const NotesProvider = ({children}) => {
    const [notes, setNotes] = useState(initialValue)
    return (
        <NotesContext.Provider value={{notes, setNotes}}>
            {children}
        </NotesContext.Provider>
    );
};

