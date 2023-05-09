import React from 'react';
import {NotesProvider} from "./NotesProvider";
import {CurrentNoteIdProvider} from "./CurrentNoteIdProvider";
import {CurrentNoteProvider} from "./CurrentNoteProvider";
import {InputsProvider} from "./InputsProvider";
import {WorkspaceProvider} from "./WorkspaceProvider";

const CombinedProvider = ({children}) => {
    return (
        <NotesProvider>
            <CurrentNoteIdProvider>
                <CurrentNoteProvider>
                    <InputsProvider>
                        <WorkspaceProvider>
                            {children}
                        </WorkspaceProvider>
                    </InputsProvider>
                </CurrentNoteProvider>
            </CurrentNoteIdProvider>
        </NotesProvider>
    );
};

export default CombinedProvider;