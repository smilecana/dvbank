import React, { useState } from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl:{
            width:'100%'
        }
    }),
);
export function AccountList(props){
    const classes = useStyles();
    const [type, setType] = useState('chequing');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        props["accountArr"]["type"] = event.target.value;
        setType(event.target.value as string);
        // console.log(event.target.value)
    }
    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Account Type</InputLabel>
            <Select
                // value={props["accountArr"]["type"]}
                value={type}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={handleChange}
                label="Account Type"
            >
                <MenuItem value={'savings'}>savings</MenuItem>
                <MenuItem value={'chequing'}>chequing</MenuItem>
                <MenuItem value={'credit'}>credit</MenuItem>
            </Select>
        </FormControl>
    )
}