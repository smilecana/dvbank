import React, { useState, useEffect } from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography, Container, TablePagination, Grid, Tooltip, Button, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { useStore } from 'react-stores';
import { store } from '../store';



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
    },
    root: {
        flexGrow: 1,
        height: 'auto',
        paddingTop: '3%',
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: theme.spacing(35),
    },
    

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


export default function BillPayment() {

    const classes = useStyles();

    //account data
    var customerAccounts = useStore(store).customer['accounts'];

    const [values, setValues] = React.useState({
        amount: '',
        payFromIndex: 'select',
        paymentDate: '',
        accountId: useStore(store).customer['id'],
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

    let handleClick = ()=>{
        setOpen(true);
        console.log(values)
    }  

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = () => {
        setOpen(false);
    };
    // account info by id
    let getAccountInfo = (index) =>{
        if(index === 'select') {
            return ''
        }
        else{
            return customerAccounts[index]['type'] +'-'+ customerAccounts[index]['number'] +' $'+ customerAccounts[index]['balance'];
        }
    }


    return (
        <React.Fragment>
            
            <div className={classes.root}>
                <Container maxWidth="lg" >
                    <ThemeProvider theme={theme} >

                        <div>
                            <Typography component="h3" variant="h5" className={classes.Title}>
                                Credit Bill Payment
                            </Typography>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Current balance:</TableCell>
                                            <TableCell style={{width: '40%'}}>
                                                $ {customerAccounts[2]['balance']}<br></br>
                                                Credit Card {customerAccounts[2]['number']}
                                            </TableCell>

                                        </TableRow>
                                        <TableRow >
                                            <TableCell component="th" scope="row">
                                                Pay from:
                                            </TableCell>
                                            <TableCell style={{width: '40%'}}>

                                                <FormControl variant="outlined" className={classes.formControl}>

                                                    <Select
                                                        labelId="demo-simple-select-outlined-label"
                                                        id="demo-simple-select-outlined"
                                                        name="payFromIndex"
                                                        // className={classes.selector}
                                                        value={values.payFromIndex}
                                                        onChange={handleChange}
                                                        // labelWidth={payFromIndex}
                                                    >
                                                        <MenuItem value="select">Select an account</MenuItem>
                                                        {customerAccounts
                                                        .filter(item=>item['type']!=="credit")
                                                        .map((item, index) => {
                                                            return (<MenuItem value={index}>
                                                                {item['type']}-({item['number']}) ${item['balance']}
                                                            </MenuItem>)
                                                        })}

                                                    </Select>
                                                </FormControl>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow >
                                            <TableCell component="th" scope="row">
                                                Payment Amount:
                                            </TableCell>
                                            <TableCell>
                                            <label>
                                                
                                                <input
                                                    type="radio"
                                                    name="amount"
                                                    value="10"
                                                    checked={values.amount === "10"}
                                                    onChange={handleChange}
                                                />
                                                $10.00 (Minimum Payment)
                                                </label>
                                                <br></br>
                                                <label>
                                                
                                                <input
                                                    type="radio"
                                                    name="amount"
                                                    value={customerAccounts[2]['balance']}
                                                    checked={values.amount === customerAccounts[2]['balance']}
                                                    onChange={handleChange}
                                                />
                                                ${customerAccounts[2]['balance']} (Current Balance)
                                                </label>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow >
                                            <TableCell component="th" scope="row">
                                                Payment date:
                                            </TableCell>
                                            <TableCell >
                                                    <TextField
                                                        id="demo-simple-select-outlined"
                                                        name="paymentDate"
                                                        value={values.paymentDate}
                                                        onChange={handleChange}
                                                        type="date"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />

                                            </TableCell>
                                        </TableRow>

                                        <TableRow >
                                            <TableCell component="th" scope="row"></TableCell>
                                            <TableCell align="right">
                                                <Button variant="contained" color="primary" onClick={handleClick}>
                                                    Next
                                                </Button>
                                            </TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>

                        {/* comfirm dialog */}
                        <div>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"CREDIT BILL PAYMENT – VERIFICATION"}</DialogTitle>
                                
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                Please confirm your payment details.
                                </DialogContentText>

                                <Table  aria-label="simple table">
                                    <TableHead>
                                        
                                        <TableRow>
                                            <TableCell>Current Balance:</TableCell>
                                            <TableCell align="right">
                                                $ {customerAccounts[2]['balance']}<br></br>
                                                Credit Card {customerAccounts[2]['number']}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Pay From:</TableCell>
                                            <TableCell align="right">{getAccountInfo(values.payFromIndex)}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Payment Amount:</TableCell>
                                            <TableCell align="right">$ {values.amount}</TableCell>
                                        </TableRow>
                                        
                                        <TableRow>
                                            <TableCell>Payment Date:</TableCell>
                                            <TableCell align="right">{values.paymentDate}</TableCell>
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