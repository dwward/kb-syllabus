import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    green: {
        backgroundColor: "green",
        color: "white"
    },
    yellow: {
        backgroundColor: "yellow"
    },
    greenyellow: {
        color: "black",
        textShadow: "white 1px 0 5px",
        background: "linear-gradient(to bottom, green, green 50%, yellow 50%, yellow)"
    },
    purple: {
        color: "white",
        backgroundColor: "purple"
    },
    brown3: {
        color: "white",
        backgroundColor: "saddlebrown"
    },
    brown2: {
        color: "white",
        backgroundColor: "saddlebrown"
    },
    brown1: {
        color: "white",
        backgroundColor: "saddlebrown"
    }

}));

export default function BeltLabel(props) {
    const classes = useStyles();
    const beltColor = props.beltColor;
    const formattedBeltLabel = beltColor.replace(/\s+/g, '').toLowerCase();
    return (
        <div className={classes[formattedBeltLabel]+" beltLabelDefault"}>{props.beltColor} Belt</div>
    )
}


