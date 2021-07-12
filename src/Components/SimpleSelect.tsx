import {createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select, Theme} from "@material-ui/core";
import {useState} from "react";

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            formControl: {
                margin: theme.spacing(1),
                minWidth: 120,
            },
            selectEmpty: {
                marginTop: theme.spacing(2),
            },
        }),
    );

    export default function SimpleSelect() {
        const classes = useStyles();
        const [level, setLevel] = useState('');

        const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
            setLevel(event.target.value as string );
        };


        return (
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Level</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={level}
                        onChange={handleChange}
                    >
                        <MenuItem value={'Beginner'}>Beginner</MenuItem>
                        <MenuItem value={'Intermediate'}>Intermediate</MenuItem>
                        <MenuItem value={'Advanced'}>Advanced</MenuItem>
                    </Select>
                </FormControl>
            </div>
        );
    }
