import React, {useState} from 'react';
import { createContext } from "react";
import {workspaceValues} from "../model";

const initialValue = workspaceValues.empty
export const WorkspaceContext = createContext(initialValue)

export const WorkspaceProvider = ({children}) => {
    const [workspace, setWorkspace] = useState(initialValue)
    return (
        <WorkspaceContext.Provider value={{workspace, setWorkspace}}>
            {children}
        </WorkspaceContext.Provider>
    );
};