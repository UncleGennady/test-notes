import React, {useState} from 'react';
import { createContext } from "react";

const initialValue = '';
export const SearchContext = createContext(initialValue)

export const SearchProvider = ({children}) => {
    const [search, setSearch] = useState(initialValue)
    return (
        <SearchContext.Provider value={{search, setSearch}}>
            {children}
        </SearchContext.Provider>
    );
};
