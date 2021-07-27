import syllabus from './data/syllabus.json';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function TechniqueFilter() {

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
