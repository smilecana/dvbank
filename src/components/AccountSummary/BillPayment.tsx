import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography, Container, Button, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, InputLabel } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { useStore } from 'react-stores';
import { store } from '../store';
import axios from "axios";
import { setCustomer } from '../authActions';
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';



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
        padding: theme.spacing(4),
        paddingBottom: '2%',
        backgroundColor: '#ffffff',
        borderRadius: '5px',
        border: '1px solid #eeeeee',
        marginTop:'1%'
    },
    container: {
        maxHeight: 440,
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

    //account data since login
    var customerAccounts = useStore(store).customer['accounts'];
    // set the input data
    const [values, setValues] = React.useState({
        amount: '',
        payFromAccountId: customerAccounts[0]['id'],
        paymentDate: '',
        customerId: useStore(store).customer['id'],
        sucessMesg:''
    });
    // select bar account Id only credit card
    const [account, setAccount] = React.useState(customerAccounts[2]['id']);

    const inputLabel = React.useRef<HTMLLabelElement>(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current!.offsetWidth);
    }, []);

    // show comfirm dialog
    const [open, setOpen] = React.useState(false);

    let handleChange = (evt) => {
        const value = evt.target.value;
        setValues({
            ...values,
            [evt.target.name]: value,
            sucessMesg:''
        });
       
    }
    // next click
    let handleClick = ()=>{ setOpen(true); }  
    //cancel click in dialog panel
    const handleClose = () => { setOpen(false); };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(false);
        axios.post(`/transaction/${values.customerId}/${account}/add`, 
                    {source:`Internet Banking - ${customerAccounts.filter(item=>item['id']===values.payFromAccountId)[0]['number']}`, amount:values.amount, type: 'Payment'})
            .then((response) => {
                console.log(response.data)
                axios.post(`/transaction/${values.customerId}/${values.payFromAccountId}/add`, 
                    {source:`Internet Banking - ${customerAccounts.filter(item=>item['id']===account)[0]['number']}`, amount:values.amount, type: 'Withdraw'})
                .then((response) => {
                    console.log(response.data)
                    axios.get(`/customer/getByID/${values.customerId}`)
                    .then(response => {
                        setCustomer(response.data);
                        // window.location.reload();
                        setValues({...values,sucessMesg:"You have completed the credit payment. "})
                    });
                    }, (error) => {
                    
                });
            }, (error) => {
               
        });
        
       
    };
    // account info by id
    let getAccountInfo = (id) =>{
        let accountInfo = customerAccounts.filter(item => item['id'] === id);
        return accountInfo[0]['type'] +'-'+ accountInfo[0]['number'] +' $'+ accountInfo[0]['balance'];
        
    }

    return (
        <React.Fragment>
            <div>
                <Container maxWidth="lg"  className={classes.root}>
                    <ThemeProvider theme={theme} >
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                                Select your credit account
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={account}
                                onChange={(e) => setAccount(e.target.value)}
                                labelWidth={labelWidth}
                            >
                                {customerAccounts
                                .filter(item => item['type'] === 'credit')
                                .map((item) => {
                                    return (<MenuItem value={item["id"]}>
                                        {item['type']}-({item['number']}) ${item['balance']}
                                    </MenuItem>)
                                })}

                            </Select>
                        </FormControl>
                            {(values.sucessMesg==='')?'':(
                                <Typography variant="h6" color="secondary">
                                    <CheckCircleOutlineSharpIcon fontSize="inherit" color="secondary" />
                                    {values.sucessMesg}
                                </Typography>

                            )}
                        <div>
                            <Typography component="h3" variant="h5" className={classes.Title}>
                                Credit Bill Payment
                            </Typography>
                            <TableContainer>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Current balance:</TableCell>
                                            <TableCell style={{width: '40%'}}>
                                                $ {customerAccounts.filter(item => item['id'] === account)[0]['balance']}<br></br>
                                                Credit Card {customerAccounts.filter(item => item['id'] === account)[0]['number']}
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
                                                        name="payFromAccountId"
                                                        // className={classes.selector}
                                                        value={values.payFromAccountId}
                                                        onChange={handleChange}
                                                        // labelWidth={payFromIndex}
                                                    >
                                                        {/* <MenuItem value="select">Select an account</MenuItem> */}
                                                        {customerAccounts
                                                        .filter(item=>item['type']!=="credit")
                                                        .map((item) => {
                                                            return (<MenuItem value={item['id']}>
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
                                                ${customerAccounts.filter(item => item['id'] === account)[0]['balance']} (Current Balance)
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
                                            <TableCell align="right">{getAccountInfo(values.payFromAccountId)}</TableCell>
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