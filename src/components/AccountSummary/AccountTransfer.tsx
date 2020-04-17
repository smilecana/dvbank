import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography, Container, TablePagination, Grid, Tooltip, Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';





function preventDefault(event: { preventDefault: () => void; }) {
    event.preventDefault();
};

const useStyles = makeStyles(theme => ({
    Title: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        borderLeft: "3px solid green",
        paddingLeft: "10px"
    },
    Pointer: {
        cursor: "pointer",
    },
    tableHead: {
        backgroundColor: '#cccccc',
        height: '3em',
    },
    fBold: {
        fontWeight: 'bold'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '70%',
    },
    table: {
        minWidth: 650,
    },
    root: {
        flexGrow: 1,
        height: 'auto',
        paddingTop: '10%',
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: theme.spacing(35),
    },
    container: {
        maxHeight: 440,
    },
    subDetailTitle: {
        padding: "0px 10px",
    },
    subDetailContent: {
        fontWeight: "bold",
        padding: "0px 10px",
    },
    margin: {
        
    }

}));

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#0E63B0',
            main: '#0E63B0',
            dark: '#007e1d',
            // contrastText: '#fff',
        },
        secondary: {
            main: '#1bb14c',
        },
    },
});

interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
    account: string;
  }

export default function AccountTransfer() {

    const classes = useStyles();

    const [account, setAccount] = React.useState('40');

    const inputLabel = React.useRef<HTMLLabelElement>(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current!.offsetWidth);
    }, []);

    // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    //     setAccount(event.target.value as string);
    // };

    const [values, setValues] = React.useState<State>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
        account: '40',
      });
    
      const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };

    return (
        <React.Fragment>
            <div className={classes.root}>
            <Container maxWidth="lg" >
                <ThemeProvider theme={theme} >

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                            Select your account
                    </InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={account}
                            // onChange={handleChange}
                            labelWidth={labelWidth}
                        >
                            <MenuItem value={40} >Chequing(00-33-99-00)$1000.99</MenuItem>
                            <MenuItem value={10}>Saving(00-00-99-99)$3300.88 </MenuItem>
                            <MenuItem value={20}>RESP(11-22-33-44)$2000.99</MenuItem>
                            <MenuItem value={30}>Credit(11-33-55-77)$6666.12</MenuItem>
                        </Select>
                    </FormControl>
                    <div>
                        <Typography component="h3" variant="h5" className={classes.Title}>
                            Set up transfer details
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>From:</TableCell>
                                        <TableCell align="right">dropdown</TableCell>

                                    </TableRow>
                                    <TableRow >
                                        <TableCell component="th" scope="row">
                                            To:
                                            </TableCell>
                                        <TableCell align="right">dropdown</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell component="th" scope="row">
                                            Amount:
                                            </TableCell>
                                        <TableCell align="right">
                                        <FormControl fullWidth className={classes.margin} variant="filled">
                                        <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                                        <FilledInput
                                            id="filled-adornment-amount"
                                            value={values.amount}
                                            onChange={handleChange('amount')}
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        />
                                        </FormControl>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell component="th" scope="row">
                                            How often:
                                            </TableCell>
                                        <TableCell align="right">dropdown</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell component="th" scope="row">
                                            Transfer date:
                                            </TableCell>
                                        <TableCell align="right">dropdown</TableCell>
                                    </TableRow>
                                    
                                </TableHead>
                                
                                <TableBody>
                                    
                                        <TableRow >
                                            <TableCell component="th" scope="row"></TableCell>
                                            <TableCell align="right">
                                                <Button variant="contained" color="secondary">
                                                    Next
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                 
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>


                </ThemeProvider>
            </Container>
            </div>
        </React.Fragment>
    )
}