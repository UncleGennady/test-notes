import React, {useContext} from 'react';
import {NotesContext} from "../../providers/NotesProvider";
import {CurrentNoteIdContext} from "../../providers/CurrentNoteIdProvider";
import {text, title, workspaceValues, status, lockStatus} from "../../model";
import {WorkspaceContext} from "../../providers/WorkspaceProvider";
import {SearchContext} from "../../providers/SearchProvider";
import {FilteredNotesContext} from "../../providers/FilteredNotesProvider";
import {getDate} from "../../utils";
import './styles.scss'

const ListItem = () => {
    const {notes} = useContext(NotesContext)
    const {filteredNotes} = useContext(FilteredNotesContext)

    const {search} = useContext(SearchContext)

    const {currentNoteId, setCurrentNoteId} = useContext(CurrentNoteIdContext)
    const {setWorkspace} = useContext(WorkspaceContext)


    const strLength = 20
    const handleClick = (id)=>()=>{
        setCurrentNoteId(id)
        setWorkspace(workspaceValues.note)
    }
    if(!notes){
        return (
            <div>
                No entries
            </div>
        )
    }
    if(!search){
        return (
            <ul className={'list'}>
                {notes.map(note=>(<li key={note.id} className={`item_wrapper  ${note.values[status] === lockStatus.lock ? 'lock' : ''} ${currentNoteId === note.id ? 'item_active' : ''}`} onClick={handleClick(note.id)}>
                        <div className={'item'}>
                            <h3>
                                {note.values[title].length > 20 ? `${note.values[title].slice(0, strLength)}...` : note.values[title]}
                            </h3>
                            <div>
                    <span>
                       {getDate(note.created_at)}
                    </span>
                                <p>
                                    {note.values[text].length > 20 ? `${note.values[text].slice(0, strLength)}...` : note.values[text]}
                                </p>
                            </div>
                        </div>
                    </li>)
                )}
            </ul>
        )

    }

    if(!filteredNotes.length){
        return (
            <div>
                There are no enries for this query
            </div>
        )
    }

    return (
        <ul className={'list'}>
            {filteredNotes.map(note=>(<li key={note.id} className={`item_wrapper ${note.values[status] === lockStatus.lock ? 'lock' : ''} ${currentNoteId === note.id ? 'item_active' : ''}`} onClick={handleClick(note.id)}>
               <div className={'item'}>
                   <h3 dangerouslySetInnerHTML={{__html: note.values[title].length > 20 ? `${note.values[title].slice(0, strLength)}...` : note.values[title] }}>
                   </h3>
                   <div>
                    <span>
                       {getDate(note.created_at)}
                    </span>
                       <p dangerouslySetInnerHTML={{__html:note.values[text].length > 20 ? `${note.values[text].slice(0, strLength)}...` : note.values[text]}}>
                       </p>
                   </div>
               </div>
            </li>)
            )}
        </ul>
    );
};

export default ListItem;