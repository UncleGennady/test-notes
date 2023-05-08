import logo from './logo.svg';
import './App.scss';
import {useContext} from "react";
import {CurrentNoteContext} from "./providers/CurrentNoteProvider";

import Layout from "./components/Layout";
import Sidebar from "./components/ Sidebar";
import Workspace from "./components/ Workspace";

const App = () => {
    const {currentNote} = useContext(CurrentNoteContext)
    return (
          <div className="App">
            <Layout>
                <div className={'wrapper'}>
                    <Sidebar/>
                    {!!currentNote && <Workspace/>}
                </div>
            </Layout>
          </div>
  );
}

export default App;
