import logo from './logo.svg';
import './App.scss';
import {useContext, useEffect} from "react";
import {CurrentNoteIdContext} from "./providers/CurrentNoteIdProvider";
import {CurrentNoteContext} from "./providers/CurrentNoteProvider";
import {createNote, deleteNote, getNote, getNotes, updateNote} from "./api";
import Layout from "./components/Layout";
import Sidebar from "./components/ Sidebar";
import Workspace from "./components/ Workspace";
import {NotesContext} from "./providers/NotesProvider";
import {InputsContext} from "./providers/InputsProvider";
import {inputsInitialValue, workspaceValues} from "./model";
import {WorkspaceContext} from "./providers/WorkspaceProvider";



const App = () => {
    const {currentNoteId, setCurrentNoteId} = useContext(CurrentNoteIdContext)
    const {currentNote, setCurrentNote} = useContext(CurrentNoteContext)
    const {notes, setNotes} = useContext(NotesContext)
    const {inputs, setInputs} = useContext(InputsContext)
    const {setWorkspace} = useContext(WorkspaceContext)



    useEffect(()=>{
        getNotes()
            .then(({records})=>setNotes(records))
    },[] )

    useEffect(()=>{
        if(!!currentNoteId){
            getNote(currentNoteId)
                .then(({record})=>setCurrentNote(record))
        }
    },[currentNoteId])

    const deleteHandle = (id) => ()=>{
        deleteNote(id)
        setCurrentNoteId(null)
        setCurrentNote(null)
        setInputs({...inputsInitialValue})
        setWorkspace(workspaceValues.note)
        const newNotes = [...notes].filter(item=> item.id!==id)
        setNotes(newNotes)
    }

    const createHandle = () =>{
        createNote(inputs)
            .then(({record})=> setNotes([{...record}, ...notes ]))
        setInputs({...inputsInitialValue})
        setWorkspace(workspaceValues.empty)

    }

    const editHandle = () =>{
        updateNote(inputs, currentNoteId)
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

    return (
          <div className="App">
            <Layout deleteHandle={deleteHandle(currentNoteId)}>
                <div className={'wrapper'}>
                    <Sidebar/>
                    <Workspace createHandle={createHandle} editHandle={editHandle}/>
                </div>
            </Layout>
          </div>
  );
}

export default App;
