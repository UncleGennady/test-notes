import React, {useContext} from 'react';
import './styles.scss'
import Editor from "../Editor";
import NoteInfo from "../NoteInfo";
import {WorkspaceContext} from "../../providers/WorkspaceProvider";
import {workspaceValues} from "../../model";
import {CurrentNoteIdContext} from "../../providers/CurrentNoteIdProvider";
import {CurrentNoteContext} from "../../providers/CurrentNoteProvider";
const Workspace = ({createHandle, editHandle}) => {
    const {workspace} = useContext(WorkspaceContext)
    const {currentNoteId} = useContext(CurrentNoteIdContext)
    const {currentNote} = useContext(CurrentNoteContext)


    return (
        <>
            {workspace === workspaceValues.note && !!currentNoteId  && !!currentNote && <NoteInfo/>}
            {workspace === workspaceValues.edit ? <Editor submitHandle={editHandle}/> : <></>}
            {workspace === workspaceValues.add ? <Editor submitHandle={createHandle}/> : <></>}
        </>
    );
};

export default Workspace;