import './App.css';
import BeltFilter from './BeltFilter'
import TechniqueFilter from "./TechiniqueFilter";
import TechniqueList from "./TechniqueList";
import {Typography} from "@material-ui/core";
import Data from './data/syllabus.json';
import React, {useState} from "react";
import ViewTechnique from "./ViewTechnique";


function App() {

    const originalSyllabusData = Data;
    const [syllabus, setSyllabus] = useState(Data);
    const [selectedBelt, setSelectedBelt] = useState('');
    const [keyAutocomplete, setKeyAutocomplete] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [techniqueId, setTechniqueId] = useState(-1)



    const filterBelt = (color) => {
        let newKey = keyAutocomplete + 1
        setKeyAutocomplete(newKey)
        if (color == '') {
            setSelectedBelt('');
            setSyllabus(originalSyllabusData);
            return;
        }
        setSelectedBelt(color);
        let tmpSyllabus = Object.assign({}, originalSyllabusData);
        let filterTechs = tmpSyllabus.techniques.filter(t => t.belt.toUpperCase() === color.toUpperCase());
        tmpSyllabus.techniques = filterTechs;
        setSyllabus(tmpSyllabus);
    }

    const filterText = (text) => {
        setSelectedBelt('')
        setSearchText(text);
        let tmpSyllabus = Object.assign({}, originalSyllabusData);
        let filterTechs = tmpSyllabus.techniques.filter(t => t.name.toUpperCase().indexOf(text.toUpperCase()) >= 0);
        tmpSyllabus.techniques = filterTechs;
        setSyllabus(tmpSyllabus);
    }

    const viewTechnique = (techniqueId) => {
        setTechniqueId(techniqueId)
    }

    const getComponent = () => {
        let component;
        if (techniqueId != -1) {
            // Techniques start at 1 and are in order.
            component = <ViewTechnique setTechniqueId={setTechniqueId}
                                       technique={originalSyllabusData.techniques[techniqueId - 1]}/>
        } else {
            component = <div><TechniqueList syllabus={syllabus} setTechniqueId={setTechniqueId} /></div>
        }
        return component
    }

    return (
        <div className="App">
            <header className="App-header">
                <Typography variant="h4">Kaiwan Budokai Syllabus</Typography>
                <TechniqueFilter keyAutocomplete={keyAutocomplete} filterText={filterText}/>
                <BeltFilter beltColor={selectedBelt} filterBelt={filterBelt}/>
            </header>
            {getComponent()}
        </div>
    )
}

export default App;
