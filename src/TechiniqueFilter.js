import syllabus from './data/syllabus.json';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function TechniqueFilter(props) {

    const handleChange = (event, data) => {
        if (data == null) {
            data = ''
        }
        props.filterText(typeof(data)=="string" ? data : data.name);
    }

    return (
            <Autocomplete
                native={"true"}
                key={props.keyAutocomplete}
                freeSolo={true}
                options={syllabus.techniques}
                // strips the categories of any labels in parenthesis () and concatenates them with delimiter '>'
                groupBy={(option) => option.categories.map(opt => (opt.indexOf(' (')===-1 ? opt : opt.slice(0, opt.indexOf(' (')))).join(' > ')}
                getOptionLabel={(option) => typeof(option)=="string" ? option : option.name}
                renderInput={(params) => (
                    <TextField {...params} label="Search..." margin="normal" variant="outlined" />
                )}
                onChange={handleChange}
                className="techniqueFilter"
            />
    );
}
