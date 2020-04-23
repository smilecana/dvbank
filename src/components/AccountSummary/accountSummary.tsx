import React, {useState, useEffect} from 'react';
import {makeStyles, createMuiTheme, ThemeProvider, Theme, createStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Typography, Button, Divider, Container, Toolbar} from '@material-ui/core';
import {useProtectedPath} from "../useProtectedPath";
import {Redirect} from "react-router";
import {dvTheme} from "../../constants/theme";
import NewAccount from "./NewAccount/NewAccount";
import {store} from '../store';
import {useStore} from 'react-stores';
import {filterAccounts} from "../common";

const useStyles = makeStyles(theme => ({
    nested: {
        marginTop: '5%',
        padding: theme.spacing(4),
        paddingBottom: '2%',
        backgroundColor: '#ffffff',
        borderRadius: '5px',
        border: '1px solid #eeeeee',
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
    useEffect(() => {
        console.log(customer,'test');
        filterAccounts(customer);
    }, []);
    const accounts = useStore(store).filterAccounts;
    const accountTypes = ['chequing', 'savings', 'credit'];
    if (!accessGrant) {
        return <Redirect to="/signIn"/>;
    }
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth={'lg'} className={classes.nested}>
                <NewAccount type='account'/>
                {
                    accountTypes.map(at => {
                        let balance = 0;
                            return (
                                <div>
                                    <Typography component="h3" variant="h5" className={classes.Title} align="left">
                                        {at}
                                    </Typography>
                                    <Table size="small">
                                        <TableHead>
                                            <TableRow className={classes.tableHead}>
                                                <TableCell>Account</TableCell>
                                                <TableCell align="right">Balance $</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {/* {accounts[at].map(account => {
                                                balance += parseFloat(account['balance']);
                                                return (
                                                    <>
                                                        <TableRow
                                                            key={account['number'] ? account['number'] : 0}>
                                                            <TableCell>{account['number'] ? account['number'] : 0}</TableCell>
                                                            <TableCell align="right">$ {account['balance'] ? account['balance'] : 0}</TableCell>
                                                        </TableRow>
                                                    </>
                                                )
                                            })} */}
                                            <TableRow>
                                                <TableCell align="right" className={classes.fBold}>Total Banking
                                                    Balance
                                                    (CAD)</TableCell>
                                                <TableCell align="right" className={classes.fBold}>
                                                    ${balance}
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            )
                        }
                    )}

            </Container>
        </ThemeProvider>
    )
}