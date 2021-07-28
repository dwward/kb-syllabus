import syllabus from './data/syllabus.json';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function TechniqueFilter() {

    return (
        <div style={{ width: '80%', padding: 0 }}>
            <Autocomplete
                freeSolo={true}
                includeInputInList={true}
                id="technique-filter"
                options={syllabus.techniques}
                // strips the categories of any labels in parenthesis () and concatenates them with delimiter '>'
                groupBy={(option) => option.categories.map(opt => (opt.indexOf(' \(')==-1 ? opt : opt.slice(0, opt.indexOf(' \(')))).join(' > ')}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                    <TextField {...params} label="Search..." margin="normal" variant="outlined" />
                )}
            />

        </div>
    );
}
