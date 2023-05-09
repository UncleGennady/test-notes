import React, {useContext} from 'react';
import {NotesContext} from "../../providers/NotesProvider";
import {CurrentNoteIdContext} from "../../providers/CurrentNoteIdProvider";
import './styles.scss'
import {text, title, workspaceValues} from "../../model";
import {WorkspaceContext} from "../../providers/WorkspaceProvider";

const ListItem = () => {
    const {notes} = useContext(NotesContext)
    const {currentNoteId, setCurrentNoteId} = useContext(CurrentNoteIdContext)
    const {setWorkspace} = useContext(WorkspaceContext)


    const strLength = 20
    const handleClick = (id)=>()=>{
        setCurrentNoteId(id)
        setWorkspace(workspaceValues.note)
    }
    return (
        <ul className={'list'}>
            {notes.map(note=>(<li key={note.id} className={`item_wrapper ${currentNoteId === note.id ? 'item_active' : ''}`} onClick={handleClick(note.id)}>
               <div className={'item'}>
                   <h3>
                       {note.values[title].length > 20 ? `${note.values[title].slice(0, strLength)}...` : note.values[title]}
                   </h3>
                   <div>
                    <span>
                       {note.created_at}
                    </span>
                       <p>
                           {note.values[text].length > 20 ? `${note.values[text].slice(0, strLength)}...` : note.values[text]}
                       </p>
                   </div>
               </div>
            </li>)
            )}
        </ul>
    );
};

export default ListItem;