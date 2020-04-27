import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography, Container, TablePagination, Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { dvTheme } from "../../constants/theme";
import { store } from '../store';
import { useStore } from 'react-stores';
import { Link } from 'react-router-dom';


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
        padding: theme.spacing(4),
        paddingBottom: '2%',
        backgroundColor: '#ffffff',
        borderRadius: '5px',
        border: '1px solid #eeeeee',
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


}));

const theme = dvTheme;
export default function AccountDetail() {

    const classes = useStyles();
    //account data
    var customerAccounts = useStore(store).customer['accounts'];
    // new account with no data
    var tempDate = new Date();
    var date = tempDate.getMonth()+1 + '/'+ tempDate.getDate() +'/'+tempDate.getFullYear() ;

    var dataOrg = [{'number':'xxxx','type':'chequing','balance':'0','creation date':date,'transactions':[]},
                    {'number':'xxxx','type':'saving','balance':'0','creation date':date, 'transactions':[]},
                    {'number':'xxxx','type':'credit','balance':'0','creation date':date,'creditLimit':1000, 'transactions':[]}]
    if(!customerAccounts) customerAccounts=dataOrg;

    // pagenation
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // select bar, account is current account number(0,1,2)
    const [account, setAccount] = React.useState('0');

    const inputLabel = React.useRef<HTMLLabelElement>(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current!.offsetWidth);
    }, []);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAccount(event.target.value as string);
        // console.log(Object.keys(customerAccounts[account]));
    };

    return (
        <React.Fragment>
                <Container maxWidth="lg" className={classes.root}>
                    <ThemeProvider theme={theme} >
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                                Select your account
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={account}
                                onChange={handleChange}
                                labelWidth={labelWidth}
                            >
                                {customerAccounts.map((item, index) => {
                                    return (<MenuItem value={index}>
                                        {item['type']}-({item['number']}) ${item['balance']}
                                    </MenuItem>)
                                })}

                            </Select>
                        </FormControl>
                        <div >
                            <Typography component="h3" variant="h5" className={classes.Title}>
                                Account Details
                            </Typography>
                            <Table className={classes.container} aria-label="simple table">

                                <TableBody>
                                    {(Object.keys(customerAccounts[account])
                                        .filter(item => {
                                            // filter creditLimit if not a credit card
                                            if (customerAccounts[account]['type'] !== "credit") {
                                                return item !== "id" && item !== "transactions" && item !== "creditLimit"
                                            }
                                            else {
                                                return item !== "id" && item !== "transactions"
                                            }
                                        })
                                        .map(row => {
                                            return (
                                                (<TableRow key={row}>
                                                    <TableCell component="th" scope="row">
                                                        {row.toUpperCase()}
                                                    </TableCell>

                                                    <TableCell align="right">{(row === "balance") ? "$" + customerAccounts[account][row] : customerAccounts[account][row]}</TableCell>

                                                </TableRow>)
                                            )
                                            
                                        })
                                    )}
                                    
                                </TableBody>
                            </Table>
                        </div>
                        {(customerAccounts[account]['type']==='credit')? (
                                        <Link to="/creditbillpayment">
                                            <Button  variant="contained" color="primary">Bill Payment</Button>
                                        </Link>
                            ):''}

 

                        <div>
                            <Typography component="h3" variant="h5" className={classes.Title}>
                                Transaction History
                            </Typography>
                            <Table className={classes.container} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell >Date</TableCell>
                                        <TableCell align="right">Source</TableCell>
                                        <TableCell align="right">Type</TableCell>
                                        <TableCell align="right">Amount $</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {customerAccounts[account]['transactions'].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                                        return (
                                            <TableRow key={row.id}>
                                                <TableCell component="th" scope="row">
                                                    {row.timeStamp}
                                                </TableCell>
                                                <TableCell align="right">{row.source}</TableCell>
                                                <TableCell align="right">{row.type}</TableCell>
                                                <TableCell align="right">{row.amount}</TableCell>
                                                {/* <TableCell align="right">{row.Balance}</TableCell> */}

                                             </TableRow>
                                         );} 
                                    )}

                                </TableBody>
                            </Table>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 50]}
                                component="div"
                                count={customerAccounts[account]['transactions'].length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                            />
                    </div>

                    </ThemeProvider>
                </Container>
        </React.Fragment>
    )
}