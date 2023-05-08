import React, {useContext} from 'react';
import {NotesContext} from "../../providers/NotesProvider";
import {CurrentNoteContext} from "../../providers/CurrentNoteProvider";
import './styles.scss'

const ListItem = () => {
    const {notes} = useContext(NotesContext)
    const {currentNote, setCurrentNote} = useContext(CurrentNoteContext)

    const strLength = 20
    const handleClick = (id)=>()=>{
        setCurrentNote(id)
    }
    return (
        <ul className={'list'}>
            {notes.map(note=>(<li key={note.id} className={`item_wrapper ${currentNote === note.id ? 'item_active' : ''}`} onClick={handleClick(note.id)}>
               <div className={'item'}>
                   <h3>
                       {note.title.length > 20 ? `${note.title.slice(0, strLength)}...` : note.title}
                   </h3>
                   <div>
                    <span>
                       {note.date}
                    </span>
                       <p>
                           {note.text.length > 20 ? `${note.text.slice(0, strLength)}...` : note.text}
                       </p>
                   </div>
               </div>
            </li>)
            )}
        </ul>
    );
};

export default ListItem;