import './App.scss';
import {useContext, useEffect} from "react";
import {CurrentNoteIdContext} from "./providers/CurrentNoteIdProvider";
import {CurrentNoteContext} from "./providers/CurrentNoteProvider";
import {LockedNotesContext} from "./providers/LockedNotesProvider";
import {NotesContext} from "./providers/NotesProvider";
import {FilteredNotesContext} from "./providers/FilteredNotesProvider";
import {InputsContext} from "./providers/InputsProvider";
import {WorkspaceContext} from "./providers/WorkspaceProvider";
import {SearchContext} from "./providers/SearchProvider";
import {createNote, deleteNote, getNote, getNotes, updateNote} from "./api";
import Layout from "./components/Layout";
import Sidebar from "./components/ Sidebar";
import Workspace from "./components/ Workspace";
import {inputsInitialValue, status, lockStatus, text, title, workspaceValues} from "./model";

import {searchNotes} from "./utils";


import './App.scss';

const App = () => {
    const {currentNoteId, setCurrentNoteId} = useContext(CurrentNoteIdContext)
    const {currentNote, setCurrentNote} = useContext(CurrentNoteContext)
    const {notes, setNotes} = useContext(NotesContext)
    const {lockedNotes, setLockedNotes} = useContext(LockedNotesContext)

    const {filteredNotes, setFilteredNotes} = useContext(FilteredNotesContext)
    const {inputs, setInputs} = useContext(InputsContext)
    const {search} = useContext(SearchContext)

    const {setWorkspace} = useContext(WorkspaceContext)



    useEffect(()=>{
        getNotes()
            .then(({records})=>setNotes(records))
    },[] )

    useEffect(()=>{
        const lockedList = notes.reduce((acc,i)=>{
            if(i.values[status] === lockStatus.lock){
                acc.push(i.id)
            }
            return acc
        },[] )
        setLockedNotes([...lockedList])

    }, [notes])

    useEffect(()=>{
        if(!!currentNoteId){
            getNote(currentNoteId)
                .then(({record})=>setCurrentNote(record))
        }
    },[currentNoteId])

    useEffect( ()=>{
        if(!!(search.trim()) && !!notes.length){
            const  newNotes = searchNotes(structuredClone(notes), [title, text], search)

            setFilteredNotes([...newNotes]);
        }

    },[search])

    const deleteHandle = (id) => ()=>{
        if(window.confirm("Delete entry ?")){
            deleteNote(id)
            setCurrentNoteId(null)
            setCurrentNote(null)
            setInputs({...inputsInitialValue})
            setWorkspace(workspaceValues.note)
            const newNotes = [...notes].filter(item=> item.id!==id)
            setNotes(newNotes)
            if(!!search){
                const newFilteredNotes = [...filteredNotes  ].filter(item=> item.id!==id)
                setFilteredNotes(newFilteredNotes)
            }
        }
        return

    }

    const createHandle = () =>{
        createNote({...inputs, "status": lockStatus.unlock})
            .then(({record})=> setNotes([{...record}, ...notes ]))
        setInputs({...inputsInitialValue})
        setWorkspace(workspaceValues.empty)

    }

    const editHandle = () =>{

        if(window.confirm("Edit entry ?")){
            updateNote({...inputs, "status": lockStatus.unlock}, currentNoteId)
                .then(({record})=>{
                    const newNotes = [...notes];
                    const index = notes.findIndex(({id})=>id===currentNoteId);
                    newNotes[index] = {...record}
                    setNotes([...newNotes])
                })
            setInputs({...inputsInitialValue})
            setCurrentNoteId(null)
            setCurrentNote(null)
            setWorkspace(workspaceValues.empty)
        }
        return
    }

    const lockUnlockHandle = (statusValue) => ()=>{
        updateNote({title: currentNote[title], text: currentNote[text], status: statusValue}, currentNoteId)
            .then(({record})=>{
                const newNotes = [...notes];
                const index = notes.findIndex(({id})=>id===currentNoteId);
                newNotes[index] = {...record}
                setNotes([...newNotes])
            })
        if(statusValue===lockStatus.lock){
            setLockedNotes([...lockedNotes, currentNoteId])
        }else{
            const newLockedNotes = [...lockedNotes].filter(i=>i!==currentNoteId)
                setLockedNotes(newLockedNotes)
        }

    }



    return (
          <div className="App">
            <Layout deleteHandle={deleteHandle(currentNoteId)} lockHandle={lockUnlockHandle(lockStatus.lock)} unlockHandle={lockUnlockHandle(lockStatus.unlock)}>
                <div className={'wrapper'}>
                    <Sidebar/>
                    <Workspace createHandle={createHandle} editHandle={editHandle}/>
                </div>
            </Layout>
          </div>
  );
}

export default App;
