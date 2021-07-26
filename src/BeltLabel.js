import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import {green} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    green: {
        backgroundColor: "green",
        color: "white",
    },
    yellow: {
        backgroundColor: "yellow",
    },
    yellowGreen: {
        color: "white",
        textShadow: "black 1px 0 10px",
        background: "linear-gradient(to bottom, green, green 50%, yellow 50%, yellow)"
    }
}));

export default function BeltLabel(props) {
    const classes = useStyles();
    const beltColor = props.beltColor;
    return (
        <div className={classes[beltColor]+" beltLabelDefault"}>{beltColor} Belt</div>
    )
}


