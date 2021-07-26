import './App.css';
import Belts from './Belts'
import TechniqueFilter from "./TechiniqueFilter";
import TechniqueList from "./TechniqueList";
import {Typography} from "@material-ui/core";

function App() {

    let state= {
        isViewingVideo: false
    }

    return (
        <div className="App">
            <header className="App-header">
                <Typography variant="h4" component="h4">Kaiwan Budokai Syllabus</Typography>
                <TechniqueFilter />
            </header>
            <Belts />
            <TechniqueList />
        </div>
);
}

export default App;