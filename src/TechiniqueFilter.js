import syllabus from './data/syllabus.json';
import {Input} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function TechniqueFilter() {

    function selectBelt(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    return (
        <div style={{ width: 300, paddingLeft: 60 }}>
            <Autocomplete
                id="technique-filter"
                options={syllabus.techniques.map(t => t.name)}
                renderInput={(params) => (
                    <TextField {...params} label="Search..." margin="normal" variant="outlined" />
                )}
            />
        </div>
    );
}
