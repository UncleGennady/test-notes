import React, {useState} from 'react';
import { createContext } from "react";

const initialValue = []
export const FilteredNotesContext = createContext(initialValue)

export const FilteredNotesProvider = ({children}) => {
    const [filteredNotes, setFilteredNotes] = useState(initialValue)
    return (
        <FilteredNotesContext.Provider value={{filteredNotes, setFilteredNotes}}>
            {children}
        </FilteredNotesContext.Provider>
    );
};

