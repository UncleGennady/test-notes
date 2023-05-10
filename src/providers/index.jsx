import React from 'react';
import {NotesProvider} from "./NotesProvider";
import {CurrentNoteIdProvider} from "./CurrentNoteIdProvider";
import {CurrentNoteProvider} from "./CurrentNoteProvider";
import {InputsProvider} from "./InputsProvider";
import {WorkspaceProvider} from "./WorkspaceProvider";
import {SearchProvider} from "./SearchProvider";
import {FilteredNotesProvider} from "./FilteredNotesProvider";
import {LockedNotesProvider} from "./LockedNotesProvider";

const CombinedProvider = ({children}) => {
    return (
        <SearchProvider>
            <NotesProvider>
                <FilteredNotesProvider>
                    <CurrentNoteIdProvider>
                        <CurrentNoteProvider>
                            <LockedNotesProvider>
                                <InputsProvider>
                                    <WorkspaceProvider>
                                        {children}
                                    </WorkspaceProvider>
                                </InputsProvider>
                            </LockedNotesProvider>
                        </CurrentNoteProvider>
                    </CurrentNoteIdProvider>
                </FilteredNotesProvider>
            </NotesProvider>
        </SearchProvider>
    );
};

export default CombinedProvider;