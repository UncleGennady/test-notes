import React, {useState} from 'react';
import { createContext } from "react";
import {inputsInitialValue} from "../model";

const initialValue = inputsInitialValue
export const InputsContext = createContext(initialValue)

export const InputsProvider = ({children}) => {
    const [inputs, setInputs] = useState(initialValue)
    return (
        <InputsContext.Provider value={{inputs, setInputs}}>
            {children}
        </InputsContext.Provider>
    );
};
