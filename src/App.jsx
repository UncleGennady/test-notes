import logo from './logo.svg';
import './App.scss';
import {NotesProvider} from "./providers/NotesProvider";
import Layout from "./components/Layout";
import Sidebar from "./components/ Sidebar";

const App = () => {
  return (
    <NotesProvider>
      <div className="App">
        <Layout>
            <Sidebar/>
        </Layout>
      </div>
    </NotesProvider>
  );
}

export default App;
