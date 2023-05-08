import React, {useContext} from 'react';
import {NotesContext} from "../../providers/NotesProvider";

const ListItem = () => {
    const {notes} = useContext(NotesContext)
    return (
        <ul>
            {notes.map(note=>(<li key={note.id}>
                <h3>
                    {note.title}
                </h3>
                <div>
                    <span>
                       {note.data}
                    </span>
                    <p>
                        {note.text}
                    </p>
                </div>
            </li>)
            )}
        </ul>
    );
};

export default ListItem;