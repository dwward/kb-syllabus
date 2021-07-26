import React from 'react';
import Belts from "../../Belts";
import {Typography} from "@material-ui/core";
import TechniqueFilter from "../../TechiniqueFilter";
import TechniqueList from "../../TechniqueList";

const HomeLayout = ({children}) => {
    return (
        <div className="App">
            <header className="App-header">
                <Typography variant="h4" component="h4">Kaiwan Budokai Syllabus</Typography>
                <TechniqueFilter />
            </header>
            <Belts />
            <TechniqueList />
        </div>
    )
}

export default Layout;