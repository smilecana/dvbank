import React, {useState, useEffect} from 'react';
import {makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {
    Typography,
    Container,
    Button,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import {useStore} from 'react-stores';
import {store} from '../store';
import axios from "axios";
import {setCustomer} from "../authActions";


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4),
        paddingBottom: '2%',
        backgroundColor: '#ffffff',
        borderRadius: '5px',
        border: '1px solid #eeeeee',
        marginTop:'1%'
    },
    Title: {
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
        // margin: theme.spacing(1),
        width: '100%',
    },
    table: {
        minWidth: 650,
        width: '95%',
        margin: 'auto'
    },

    container: {
        // maxHeight: 440,
    },
    subDetailTitle: {
        padding: "0px 10px",
    },
    subDetailContent: {
        fontWeight: "bold",
        padding: "0px 10px",
    },
    amount: {
        width: "100%"
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


// how often times
const often = ['Once', 'Every week', 'Every two weeks', 'Every month', 'Every three months'];

export default function AccountTransfer() {

    const classes = useStyles();
    const customer = useStore(store).customer;
    const [values, setValues] = React.useState({
        amount: '',
        fromAccountIndex: 'select',
        toAccountIndex: 'select',
        transferDate: '',
        howOften: 'Once',
        fromAccountId:'',
        toAccountId: '',
        type: 'Deposit'
    });
    // show comfirm dialog
    const [open, setOpen] = React.useState(false);


    let handleChange = (evt) => {
        const value = evt.target.value;
        setValues({
            ...values,
            [evt.target.name]: value
        });

    }

    let handleClick = () => {
        if (customerAccounts[values.toAccountIndex]) {
            setOpen(true);
        }
    }
    // account info by id
    let getAccountInfo = (index) => {
        if (index === 'select') {
            return ''
        } else {
            return customerAccounts[index]['type'] + '-' + customerAccounts[index]['number'] + ' $' + customerAccounts[index]['balance'];
        }
    }


    //account data
    var customerAccounts = useStore(store).customer['accounts'];

    const inputLabel = React.useRef<HTMLLabelElement>(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        // setLabelWidth(inputLabel.current!.offsetWidth);

    }, []);


    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = () => {
        console.log(values);
        axios.post(`/account/${customer['id']}/${customerAccounts[values.fromAccountIndex]['id']}/${customerAccounts[values.toAccountIndex]['id']}/${values['amount']}/transfer`, values)
            .then((response) => {
                if(response.data === 'Success'){
                    alert(response.data);
                    axios.get(`/customer/getByID/${customer['id']}`)
                        .then(response => {
                            setCustomer(response.data);
                        });
                }
            }, (error) => {
                console.log(error);
            });
        setOpen(false);
    };
    return (
        <React.Fragment>
            <div>
                <Container maxWidth="lg" className={classes.root}>
                    <ThemeProvider theme={theme}>
                            <TableContainer>
                                <Typography component="h3" variant="h5" className={classes.Title}>
                                    Between My Accounts
                                </Typography>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>From:</TableCell>
                                            <TableCell style={{width: '40%'}}>
                                                <FormControl variant="outlined" className={classes.formControl}>
                                                    <Select
                                                        labelId="demo-simple-select-outlined-label"
                                                        id="demo-simple-select-outlined"
                                                        name="fromAccountIndex"
                                                        value={values.fromAccountIndex}
                                                        onChange={handleChange}
                                                        labelWidth={labelWidth}
                                                    >
                                                        <MenuItem value="select">Select an account</MenuItem>
                                                        {customerAccounts.map((item, index) => {
                                                            return (<MenuItem value={index}>
                                                                {item['type']}-({item['number']}) ${item['balance']}
                                                            </MenuItem>)
                                                        })}

                                                    </Select>
                                                </FormControl>
                                            </TableCell>

                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                To:
                                            </TableCell>
                                            <TableCell>

                                                <FormControl variant="outlined" className={classes.formControl}>

                                                    <Select
                                                        labelId="demo-simple-select-outlined-label"
                                                        id="demo-simple-select-outlined"
                                                        name="toAccountIndex"
                                                        // className={classes.selector}
                                                        value={values.toAccountIndex}
                                                        onChange={handleChange}
                                                        labelWidth={labelWidth}
                                                    >
                                                        <MenuItem value="select">Select an account</MenuItem>
                                                        {customerAccounts.map((item, index) => {
                                                            return (<MenuItem value={index}>
                                                                {item['type']}-({item['number']}) ${item['balance']}
                                                            </MenuItem>)
                                                        })}

                                                    </Select>
                                                </FormControl>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                Amount:
                                            </TableCell>
                                            <TableCell>
                                                <FormControl fullWidth className={classes.amount} variant="filled">
                                                    <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                                                    <FilledInput
                                                        id="filled-adornment-amount"
                                                        name="amount"
                                                        value={values.amount}
                                                        onChange={handleChange}
                                                        startAdornment={<InputAdornment
                                                            position="start">$</InputAdornment>}
                                                    />
                                                </FormControl>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                How often:
                                            </TableCell>
                                            <TableCell>

                                                <FormControl variant="outlined" className={classes.formControl}>

                                                    <Select
                                                        labelId="demo-simple-select-outlined-label"
                                                        id="demo-simple-select-outlined"
                                                        name="howOften"
                                                        // className={classes.selector}
                                                        value={values.howOften}
                                                        onChange={handleChange}
                                                        labelWidth={labelWidth}
                                                    >
                                                        {often.map((item, index) => {
                                                            return (<MenuItem value={item}>
                                                                {item}
                                                            </MenuItem>)
                                                        })}

                                                    </Select>
                                                </FormControl>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                Transfer date:
                                            </TableCell>
                                            <TableCell>
                                                <form className={classes.container} noValidate>
                                                    <TextField
                                                        id="demo-simple-select-outlined"
                                                        name="transferDate"
                                                        value={values.transferDate}
                                                        onChange={handleChange}
                                                        // label="Birthday"
                                                        type="date"
                                                        // className={classes.textField}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                </form>

                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <div style={{float: 'right', marginTop: '10px', marginRight:'30px'}}>
                                    <Button variant="contained" color="primary" onClick={handleClick}>
                                        Next
                                    </Button>
                                </div>

                            </TableContainer>
                        {/* comfirm dialog */}
                        <div>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"TRANSFERS – VERIFICATION"}</DialogTitle>

                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        You are about to make the following transfer. Do you want to continue?
                                    </DialogContentText>

                                    <Table aria-label="simple table">
                                        <TableHead>

                                            <TableRow>
                                                <TableCell>From:</TableCell>
                                                <TableCell
                                                    align="right">{getAccountInfo(values.fromAccountIndex)}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>To:</TableCell>
                                                <TableCell
                                                    align="right">{getAccountInfo(values.toAccountIndex)}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Amount:</TableCell>
                                                <TableCell align="right">${values.amount}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>How often:</TableCell>
                                                <TableCell align="right">{values.howOften}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Transfer Date:</TableCell>
                                                <TableCell align="right">{values.transferDate}</TableCell>
                                            </TableRow>
                                        </TableHead>
                                    </Table>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="secondary">
                                        Cancel
                                    </Button>
                                    <Button onClick={handleSubmit} color="primary" autoFocus>
                                        Confirm
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </ThemeProvider>
                </Container>
            </div>
        </React.Fragment>
    )
}