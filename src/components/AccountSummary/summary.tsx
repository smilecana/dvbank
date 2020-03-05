import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import {makeStyles, createMuiTheme, ThemeProvider, Theme, createStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Typography, Button, Divider, Container} from '@material-ui/core';


// Generate Order Data
function createData(id: number, Account: string, Balance: number) {
    return { id, Account, Balance };
}

const rows = [
    createData(1,'Basic- *********-7890',  312.44),
    createData(2,'Basic- *********-2340',  1899.44),
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
    nested: {
        paddingLeft: theme.spacing(4),
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
export default function Summary() {
    const classes = useStyles();

    return (
        <Container className={classes.nested}>
            <ThemeProvider theme={theme} >
            <div>
            
            <Typography component="h3" variant="h5" className={classes.Title}>
                Banking
            </Typography>
            <Table size="small">
                <TableHead>
                    <TableRow className={classes.tableHead}>
                        <TableCell>Account</TableCell>
                        <TableCell align="right">Balance $</TableCell>
                        {/* <TableCell>Ship To</TableCell>
                        <TableCell>Payment Method</TableCell>
                        <TableCell align="right">Sale Amount</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            {/* <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.shipTo}</TableCell> */}
                            <TableCell><Link color="primary" className={classes.Pointer}>{row.Account}</Link></TableCell>
                            <TableCell align="right">{row.Balance}</TableCell>
                        </TableRow>
                    ))}
                   
                    <TableRow>
                        <TableCell align="right" className={classes.fBold}>Total Banking Balance (CAD)</TableCell>
                        <TableCell align="right" className={classes.fBold}>$1234.12</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </div>
            <div>
            <Typography component="h3" variant="h5" className={classes.Title}>
                Investment
            </Typography>
            <Table size="small">
                <TableHead>
                    <TableRow className={classes.tableHead}>
                        <TableCell>Account</TableCell>
                        <TableCell align="right">Balance</TableCell>
                        {/* <TableCell>Ship To</TableCell>
                        <TableCell>Payment Method</TableCell>
                        <TableCell align="right">Sale Amount</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            {/* <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.shipTo}</TableCell> */}
                            <TableCell>{row.Account}</TableCell>
                            <TableCell align="right">{row.Balance}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell align="right" className={classes.fBold}>Total Banking Balance (CAD)</TableCell>
                        <TableCell align="right" className={classes.fBold}>$1234.12</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </div>
            <div>
            <Typography component="h3" variant="h5" className={classes.Title}>
                Credit
            </Typography>
            <Table size="small">
                <TableHead>
                    <TableRow className={classes.tableHead}>
                        <TableCell>Account</TableCell>
                        <TableCell align="right">Balance</TableCell>
                        {/* <TableCell>Ship To</TableCell>
                        <TableCell>Payment Method</TableCell>
                        <TableCell align="right">Sale Amount</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            {/* <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.shipTo}</TableCell> */}
                            <TableCell>{row.Account}</TableCell>
                            <TableCell align="right">{row.Balance}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell align="right" className={classes.fBold}>Total Banking Balance (CAD)</TableCell>
                        <TableCell align="right" className={classes.fBold}>$1234.12</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </div>

            </ThemeProvider>
        </Container>
    )
}