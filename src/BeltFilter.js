import React from "react";
import Data from './data/syllabus.json';
import {Button} from "@material-ui/core";

export default function BeltFilter(props) {

    return (
        <ul>
            {
                Data.belts.map(b => {
                    return (
                        <Button variant="outlined"
                                key={b}
                                onClick={() => props.setSelectedBelt(b)}
                        >{b}</Button>
                    )
                })
            }
        </ul>
    )
}


