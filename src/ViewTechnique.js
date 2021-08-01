import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Button, Typography} from "@material-ui/core";
import ReactPlayer from "react-player";
import React from "react";


export default function ViewTechnique(props) {

    return (
        <div align={"center"}>
            <div className="viewTechniqueBackButton">
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<ArrowBackIcon/>}
                    onClick={() => {
                        props.setTechniqueId('-1')
                    }}
                >
                    Return to Techniques
                </Button>
            </div>
            <p>{props.technique.name}</p>
                    { props.technique.video &&
            <div className="maxWidthWrapper">
                <div className="wrapper">
                        <ReactPlayer className="player" url={props.technique.video} />
                </div>
            </div>
                    }
            {!props.technique.video &&
            <img src="/640x360.png" className="placeholder" alt="Video not available" />
            }
            <div className="detailWrapper">
                <Typography variant={"h6"}>Category:</Typography>
                <Typography variant={"body1"}>{props.technique.categories.join(" > ")}</Typography>
                <br/>
                <Typography variant={"h6"}>Belt Test:</Typography>
                <Typography variant={"body1"}>{props.technique.belt}</Typography>
                <br/>
                <Typography variant={"h6"}>References:</Typography>
                <Typography variant={"body2"}>
                    {(!props.technique.pages_kirby83 && !props.technique.pages_kirby99 && !props.technique.pages_kodokan97) ? "N/A" : ""
                    }
                </Typography>
                <ol>
                    {
                            props.technique.pages_kirby83 &&
                            <li>
                                <Typography variant={"body2"}>
                                    Kirby, George (1983).  Jujitsu: Basic techniques of the gentle art.
                                    Santa Clarita, CA.  Ohara Publications., Page(s): {props.technique.pages_kirby83}
                                </Typography>
                            </li>
                    }
                    {
                        props.technique.pages_kirby99 &&
                        <li>
                            <Typography variant={"body2"}>
                                Kirby, George (1999).  Intermediate techniques of jujitsu, the gentle art.
                                Santa Clarita, CA.  Ohara Publications., Page(s): {props.technique.pages_kirby99}
                            </Typography>
                        </li>
                    }
                    {
                        props.technique.pages_kodokan97 &&
                        <li>
                            <Typography variant={"body2"}>
                                Kanō, Jigorō (1860 – 1938), “Kodokan judo“, Tokyo, Japan, Kodansha International,
                                Page(s): {props.technique.pages_kodokan97}
                            </Typography>
                        </li>
                    }
                </ol>
            </div>
        </div>
    );
}

