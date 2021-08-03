import './App.css';
import BeltFilter from './BeltFilter'
import TechniqueFilter from "./TechiniqueFilter";
import TechniqueList from "./TechniqueList";
import {Grid} from "@material-ui/core";
import Data from './data/syllabus.json';
import React, {useState} from "react";
import ViewTechnique from "./ViewTechnique";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";


function App() {

    const originalSyllabusData = Data;
    const [syllabus, setSyllabus] = useState(Data);
    const [selectedBelt, setSelectedBelt] = useState('');
    const [keyAutocomplete, setKeyAutocomplete] = useState(1);
    const [techniqueId, setTechniqueId] = useState(-1)


    const filterBelt = (color) => {
        let newKey = keyAutocomplete + 1
        setKeyAutocomplete(newKey)
        if (color === '') {
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
        let tmpSyllabus = Object.assign({}, originalSyllabusData);
        let filterTechs = tmpSyllabus.techniques.filter(t => t.name.toUpperCase().indexOf(text.toUpperCase()) >= 0);
        tmpSyllabus.techniques = filterTechs;
        setSyllabus(tmpSyllabus);
    }

    const getComponent = () => {
        let component;
        if (techniqueId >= 1) {
            // Techniques start at 1 and are in order.
            component = <ViewTechnique setTechniqueId={setTechniqueId}
                                       technique={originalSyllabusData.techniques[techniqueId - 1]}/>
        } else {
            component = <TechniqueList syllabus={syllabus} setTechniqueId={setTechniqueId}/>
        }
        return component
    }


    return (
        <React.Fragment>
            <CssBaseline/>
            <div className="App">
                <header className="App-header">
                    <Grid container spacing={1} align={"center"} alignItems={"center"}>
                        <Grid item xs={2}>
                            <a href="https://www.kaiwanbudokai.org">
                                <img src="/kblogo-sm.png" className="kblogo" alt="Kaiwan Budokai Logo"/>
                            </a>

                        </Grid>
                        <Grid item xs={6}>
                            <TechniqueFilter keyAutocomplete={keyAutocomplete} filterText={filterText}
                                             class="techniqueFilter"/>
                        </Grid>
                        <Grid item xs={4}>
                            <BeltFilter beltColor={selectedBelt} filterBelt={filterBelt} class="beltFilter"/>
                        </Grid>
                    </Grid>
                </header>
                <div>
                    {getComponent()}
                </div>
                <div>
                    <Typography variant="subtitle2" color="inherit">
                        Except where otherwise noted, this website is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons Attribution 3.0 Unported License</a>.
                    </Typography>
                </div>
            </div>
        </React.Fragment>
    )
}

export default App;
