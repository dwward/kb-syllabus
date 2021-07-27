import './App.css';
import BeltFilter from './BeltFilter'
import TechniqueFilter from "./TechiniqueFilter";
import TechniqueList from "./TechniqueList";
import {Typography} from "@material-ui/core";
import Data from './data/syllabus.json';
import React, {useState} from "react";


function App() {

    const originalSyllabusData = Data;
    const [syllabus, setSyllabus] = useState(Data);
    const [selectedBelt, setSelectedBelt] = useState(null);
    const filterBelt = (color) => {
        setSelectedBelt(color);
        let tmpSyllabus = Object.assign({}, originalSyllabusData);
        let filterTechs = tmpSyllabus.techniques.filter(t => t.belt.toUpperCase() == color.toUpperCase());
        tmpSyllabus.techniques = filterTechs;
        setSyllabus(tmpSyllabus);
    }
    const filterTechniques = () => {
        // call setstate of child should cause re-render
        // techniquelist.setstate(...)
    }

    return (
        <div className="App">
            <header className="App-header">
                <Typography variant="h4" component="h4">Kaiwan Budokai Syllabus</Typography>
                <TechniqueFilter />
                {/*<img src={'kblogo-lg.jpg'} class="kblogo" />*/}
            </header>
            Selected Belt: {selectedBelt}
            <BeltFilter setSelectedBelt={filterBelt} />
            <TechniqueList syllabus={syllabus} />
        </div>
);
}

export default App;
