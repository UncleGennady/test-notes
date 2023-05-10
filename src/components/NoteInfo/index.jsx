import React, {useContext} from 'react';
import {text, title} from "../../model";
import {CurrentNoteContext} from "../../providers/CurrentNoteProvider";
import './styles.scss'
import {getDate} from "../../utils";


const NoteInfo = () => {
    const {currentNote} = useContext(CurrentNoteContext)

    return (
        <div className={'info'}>
            <p className={'date'}>
                {getDate(currentNote.created_at)}
            </p>
            <p className={'title'}>
                {currentNote.values[title]}

            </p>
            <p className={'text'}>
                {currentNote.values[text]}
            </p>
        </div>
    );
};

export default NoteInfo;