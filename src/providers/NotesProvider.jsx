import React, {useState} from 'react';
import { createContext } from "react";

const initialValue = [
    {
        id:1,
        date: '22.05.2023',
        title:'qwerty asd ad  smkm kma ldkf s asdasd  ag hdf df ',
        text:'qwerty asd ad  smkm kma ldkf s asdasd  ag hdf df qwerty asd ad  smkm kma ldkf s asdasd  ag hdf df qwerty asd ad  smkm kma ldkf s asdasd  ag hdf df ',
    },
    {
        id:2,
        date: '22.05.2023',
        title:'qwerty asd ad  smkm kma ldkf s asdasd  ag hdf df ',
        text:'qwerty asd ad  smkm kma ldkf s asdasd  ag hdf df qwerty asd ad  smkm kma ldkf s asdasd  ag hdf df qwerty asd ad  smkm kma ldkf s asdasd  ag hdf df ',
    },
    {
        id:3,
        date: '22.05.2023',
        title:'qwerty asd ad  smkm kma ldkf s asdasd  ag hdf df ',
        text:'qwerty asd ad  smkm kma ldkf s asdasd  ag hdf df qwerty asd ad  smkm kma ldkf s asdasd  ag hdf df qwerty asd ad  smkm kma ldkf s asdasd  ag hdf df ',
    },
    {
        id:4,
        date: '22.05.2023',
        title:'qwerty asd ad  smkm kma ldkf s asdasd  ag hdf df ',
        text:'qwerty asd ad  smkm kma ldkf s asdasd  ag hdf df qwerty asd ad  smkm kma ldkf s asdasd  ag hdf df qwerty asd ad  smkm kma ldkf s asdasd  ag hdf df ',
    },
    {
        id:5,
        date: '22.05.2023',
        title:'qwerty asd ad  smkm kma ldkf s asdasd  ag hdf df ',
        text:'qwerty asd ad  smkm kma ldkf s asdasd  ag hdf df qwerty asd ad  smkm kma ldkf s asdasd  ag hdf df qwerty asd ad  smkm kma ldkf s asdasd  ag hdf df ',
    }
]
export const NotesContext = createContext(initialValue)

export const NotesProvider = ({children}) => {
    const [notes, setNotes] = useState(initialValue)
    return (
        <NotesContext.Provider value={{notes, setNotes}}>
            {children}
        </NotesContext.Provider>
    );
};

