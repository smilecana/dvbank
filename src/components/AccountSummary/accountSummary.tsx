import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles, createMuiTheme, ThemeProvider, Theme, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography, Button, Divider, Container, Toolbar } from '@material-ui/core';
import { useProtectedPath } from "../useProtectedPath";
import { Redirect } from "react-router";
import { dvTheme } from "../../constants/theme";
import NewAccount from "./NewAccount/NewAccount";
import { store } from '../store';
import { useStore } from 'react-stores';

// // Generate Order Data
// function createData(id: number, Account: string, Balance: number) {
//     return {id, Account, Balance};
// }

// const rows = [
//     createData(1, 'Basic- *********-7890', 312.44),
//     createData(2, 'Basic- *********-2340', 1899.44),
// ];

// function preventDefault(event: { preventDefault: () => void; }) {
//     event.preventDefault();
// };

const useStyles = makeStyles(theme => ({
    nested: {
        // marginTop: '5%',
        // paddingBottom: '2%',
        // marginLeft: theme.spacing(35),
        // padding: theme.spacing(4),
        // // backgroundColor: '#ffffff',
        // // borderRadius: '5px',
        // border: '1px solid #eeeeee'
        marginTop: '5%',
        padding: theme.spacing(4),
        paddingBottom: '2%',
        backgroundColor: '#ffffff',
        borderRadius: '5px',
        border: '1px solid #eeeeee',
        marginLeft: theme.spacing(32),
        marginRight: 0
    },
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
        // backgroundColor: '#cccccc',
        height: '3em',
    },
    fBold: {
        fontWeight: 'bold'
    },


}));

const theme = dvTheme;
export default function AccountSummary() {
    const classes = useStyles();
    const accessGrant = useProtectedPath();
    const customer = useStore(store).customer;


    if (!accessGrant) {
        return <Redirect to="/signIn" />;
    }
    return (
        <ThemeProvider theme={theme}>
            <Container >
                <div className={classes.nested}>
                    <div>
                        <Typography component="h3" variant="h5" className={classes.Title} align="left" >
                            {customer['accounts'][0]['type']}
                        </Typography>
                        <NewAccount type='account' />
                        <Table size="small">
                            <TableHead>
                                <TableRow className={classes.tableHead}>
                                    <TableCell>Account</TableCell>
                                    <TableCell align="right">Balance $</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow key={customer['accounts'][0]['number']}>

                                    {/* <TableCell><Link color="primary"
                                                     className={classes.Pointer}>{customer['accounts'][0]['number']}</Link></TableCell> */}
                                    <TableCell>{customer['accounts'][0]['number']}</TableCell>
                                    <TableCell align="right">$ {customer['accounts'][0]['balance']}</TableCell>
                                </TableRow>


                                <TableRow>
                                    <TableCell align="right" className={classes.fBold}>Total Banking Balance
                                    (CAD)</TableCell>
                                    <TableCell align="right" className={classes.fBold}>$ {customer['accounts'][0]['balance']}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <div>
                        <Typography component="h3" variant="h5" className={classes.Title}>
                            {customer['accounts'][1]['type']}
                        </Typography>
                        <NewAccount />
                        <Table size="small">
                            <TableHead>
                                <TableRow className={classes.tableHead}>
                                    <TableCell>Account</TableCell>
                                    <TableCell align="right">Balance</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow key={customer['accounts'][1]['number']}>
                                    <TableCell>{customer['accounts'][1]['number']}</TableCell>
                                    <TableCell align="right">$ {customer['accounts'][1]['balance']}</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align="right" className={classes.fBold}>Total Banking Balance
                                    (CAD)</TableCell>
                                    <TableCell align="right" className={classes.fBold}>$ {customer['accounts'][1]['balance']}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <div>
                        <Typography component="h3" variant="h5" className={classes.Title}>
                            {customer['accounts'][2]['type']}
                        </Typography>
                        <NewAccount />
                        <Table size="small">
                            <TableHead>
                                <TableRow className={classes.tableHead}>
                                    <TableCell>Account</TableCell>
                                    <TableCell align="right">Balance</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow key={customer['accounts'][2]['number']}>
                                    <TableCell>{customer['accounts'][2]['number']}</TableCell>
                                    <TableCell align="right">$ {customer['accounts'][2]['balance']}</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align="right" className={classes.fBold}>Total Banking Balance
                                    (CAD)</TableCell>
                                    <TableCell align="right" className={classes.fBold}>$ {customer['accounts'][2]['balance']}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </Container>
        </ThemeProvider>
    )
}