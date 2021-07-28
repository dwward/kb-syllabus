import React from "react";
import Data from './data/syllabus.json';
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

export default function BeltFilter(props) {

    const beltTestColors = Data.belts.slice(1, -1);
    const handleChange = (event) => {
        let tmpBelt = event.target.value;
        props.filterBelt(tmpBelt);
    };

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 250,
            width: "80%"
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));
    const classes = useStyles();

    return (
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel htmlFor="filled-age-native-simple">Belt Test</InputLabel>
            <Select
                    value={props.beltColor}
                    onChange={handleChange}
            >
                <MenuItem value=''>Show All</MenuItem>
                {
                    beltTestColors.map(curr => {
                        return <MenuItem value={curr}>{curr}</MenuItem>
                    })
                }
            </Select>
        </FormControl>

    )
}


