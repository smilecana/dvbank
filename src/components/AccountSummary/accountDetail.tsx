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





// Generate Order Data
function AccountData(id: number, Account: string, Balance: number) {
    return { id, Account, Balance };
}

const accounts = [
    AccountData(1, 'Basic- *********-7890', 312.44),
    AccountData(2, 'Basic- *********-2340', 1899.44),
    // createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
    // createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    // createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
    // createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];
// Generate Order Data
function AccountDetailData(id: number, Date: string, Transaction: string,
    Withdrawals: string, Deposites: string, Balance: number) {
    return { id, Date, Transaction, Withdrawals, Deposites, Balance };
}
const accountDetails = [
    AccountDetailData(1, 'Mar 23th', '302 Branch', '300', '', 312.44),
    AccountDetailData(2, 'Mar 23th', '302 Branch', '300', '', 312.44),
    AccountDetailData(3, 'Mar 23th', '302 Branch', '300', '', 312.44),
    AccountDetailData(4, 'Mar 23th', '302 Branch', '300', '', 312.44),
    AccountDetailData(5, 'Mar 23th', '302 Branch', '300', '', 312.44),
    AccountDetailData(6, 'Mar 23th', '302 Branch', '300', '', 312.44),
    AccountDetailData(7, 'Mar 23th', '302 Branch', '300', '', 312.44),
    AccountDetailData(8, 'Mar 23th', '302 Branch', '300', '', 312.44),
    AccountDetailData(9, 'Mar 23th', '302 Branch', '300', '', 312.44),
    AccountDetailData(10, 'Mar 23th', '302 Branch', '300', '', 312.44),
    AccountDetailData(11, 'Mar 23th', '302 Branch', '300', '', 312.44),
    AccountDetailData(12, 'Mar 23th', '302 Branch', '300', '', 312.44),
    AccountDetailData(13, 'Mar 23th', '302 Branch', '300', '', 312.44),


    // createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
    // createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    // createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
    // createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

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
        paddingTop: '10%'
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

export default function AccountDetail() {

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const [account, setAccount] = React.useState('40');

    const inputLabel = React.useRef<HTMLLabelElement>(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current!.offsetWidth);
    }, []);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAccount(event.target.value as string);
    };

    return (
        <React.Fragment>
            <Container className={classes.root} maxWidth="lg" >
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
                            <MenuItem value={40} >Chequing(00-33-99-00)$1000.99</MenuItem>
                            <MenuItem value={10}>Saving(00-00-99-99)$3300.88 </MenuItem>
                            <MenuItem value={20}>RESP(11-22-33-44)$2000.99</MenuItem>
                            <MenuItem value={30}>Credit(11-33-55-77)$6666.12</MenuItem>
                        </Select>
                    </FormControl>
                    <div>
                        <Typography component="h3" variant="h5" className={classes.Title}>
                            Account Details
                    </Typography>
                        <Grid container spacing={4}>
                            <Grid item xs={6}>
                                <Grid container >
                                    <Grid item container xs={6}>
                                        <Tooltip title="Add" placement="left-start">
                                            <Typography className={classes.subDetailTitle}>Current Balance:</Typography>
                                        </Tooltip>
                                        <br />
                                        <Tooltip title="Add" placement="left">
                                        <Typography  className={classes.subDetailTitle}>Current Balance:</Typography>

                                        </Tooltip>
                                        <br />
                                        <Tooltip title="Add" placement="left-end">
                                        <Typography  className={classes.subDetailTitle}>Current Balance:</Typography>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item container xs={6} alignItems="flex-end" direction="column">
                                        <Grid item>
                                            <Tooltip title="Add" placement="right-start">
                                            <Typography variant="subtitle1" className={classes.subDetailContent}>$1234.12</Typography>

                                            </Tooltip>
                                        </Grid>
                                        <Grid item>
                                            <Tooltip title="Add" placement="right">
                                            <Typography variant="subtitle1" className={classes.subDetailContent}>$1234.12</Typography>
                                            </Tooltip>
                                        </Grid>
                                        <Grid item>
                                            <Tooltip title="Add" placement="right-end">
                                            <Typography variant="subtitle1" className={classes.subDetailContent}>$1234.12</Typography>
                                            </Tooltip>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container >
                                    <Grid item container xs={6}>
                                        <Tooltip title="Add" placement="left-start">
                                        <Typography variant="subtitle1" className={classes.subDetailTitle}>Current Balance:</Typography>
                                        </Tooltip>
                                        <br />
                                        <Tooltip title="Add" placement="left">
                                        <Typography variant="subtitle1" className={classes.subDetailTitle}>Current Balance:</Typography>
                                        </Tooltip>
                                        <br />
                                        <Tooltip title="Add" placement="left-end">
                                        <Typography variant="subtitle1" className={classes.subDetailTitle}>Current Balance:</Typography>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item container xs={6} alignItems="flex-end" direction="column">
                                        <Grid item>
                                            <Tooltip title="Add" placement="right-start">
                                            <Typography variant="subtitle1" className={classes.subDetailContent}>$1234.12</Typography>
                                            </Tooltip>
                                        </Grid>
                                        <Grid item>
                                            <Tooltip title="Add" placement="right">
                                            <Typography variant="subtitle1" className={classes.subDetailContent}>$1234.12</Typography>
                                            </Tooltip>
                                        </Grid>
                                        <Grid item>
                                            <Tooltip title="Add" placement="right-end">
                                            <Typography variant="subtitle1" className={classes.subDetailContent}>$1234.12</Typography>
                                            </Tooltip>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>

                    <div>
                        <Typography component="h3" variant="h5" className={classes.Title}>
                            Transaction History
                    </Typography>
                        <Table className={classes.container} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell align="right">Transaction</TableCell>
                                    <TableCell align="right">Withdrawals</TableCell>
                                    <TableCell align="right">Deposites</TableCell>
                                    <TableCell align="right">Balance</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {accountDetails.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                                    return (
                                        <TableRow key={row.id}>
                                            <TableCell component="th" scope="row">
                                                {row.Date}
                                            </TableCell>
                                            <TableCell align="right">{row.Transaction}</TableCell>
                                            <TableCell align="right">{row.Withdrawals}</TableCell>
                                            <TableCell align="right">{row.Deposites}</TableCell>
                                            <TableCell align="right">{row.Balance}</TableCell>

                                        </TableRow>
                                    );
                                })}

                            </TableBody>
                        </Table>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={accountDetails.length}
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