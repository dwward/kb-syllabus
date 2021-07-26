import React from "react";
import Data from './data/syllabus.json';
import {Button} from "@material-ui/core";

export default function Belts() {

    function selectBelt(e) {
        e.preventDefault();

        console.log('You clicked submit.');
    }

    return (
        <ul>
            {
                Data.belts.map(b => {
                    return (
                        <Button variant="outlined" key={b} onClick={selectBelt}>{b}</Button>
                    )
                })
            }
        </ul>
    )
}


