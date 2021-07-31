import syllabus from './data/syllabus.json';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Button} from "@material-ui/core";
import YouTubePlayer from 'react-player/lib/players/YouTube'
import ReactPlayer from "react-player";


export default function ViewTechnique(props) {

    return (
        <div align={"center"}>
            <div className="viewTechniqueBackButton">
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<ArrowBackIcon/>}
                    onClick={() => props.setTechniqueId('-1')}
                >
                    Return to Techniques
                </Button>
            </div>
            <ReactPlayer url={props.technique.video}/>
            <p>{props.technique.name}</p>

        </div>
    );
}

