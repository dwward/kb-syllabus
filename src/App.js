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
    const [selectedBelt, setSelectedBelt] = useState('');
    const [keyAutocomplete, setKeyAutocomplete] = useState(1);
    const [searchText, setSearchText] = useState('');


    const filterBelt = (color) => {
        let newKey=keyAutocomplete+1
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
        let filterTechs = tmpSyllabus.techniques.filter(t => t.name.toUpperCase().indexOf(text.toUpperCase())>=0);
        tmpSyllabus.techniques = filterTechs;
        setSyllabus(tmpSyllabus);
    }

    return (
        <div className="App">
            <header className="App-header">
                <Typography variant="h4">Kaiwan Budokai Syllabus</Typography>
                <TechniqueFilter keyAutocomplete={keyAutocomplete} filterText={filterText} />
                {/*<img src={'kblogo-lg.jpg'} class="kblogo" />*/}
            </header>
            {/*<CategoryFilter category={selectedCategory} filterCategory={filterCategory} />*/}
            <BeltFilter beltColor={selectedBelt} filterBelt={filterBelt} />
            <TechniqueList syllabus={syllabus} />
        </div>
);
}

export default App;
