import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles,  Theme, createStyles, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography,  Container } from '@material-ui/core';
import { useProtectedPath } from "../useProtectedPath";
import { Redirect } from "react-router";
import { dvTheme } from "../../constants/theme";
import NewAccount from "./NewAccount/NewAccount";
import { store } from '../store';
import { useStore } from 'react-stores';


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
    const accounts = useStore(store).filterAccounts;
    const accountTypes = ['chequing', 'savings', 'credit'];
    if (!accessGrant) {
        return <Redirect to="/signIn"/>;
    }
    return (
        <ThemeProvider theme={theme}>
            <Container >
                <div className={classes.nested}>
                    {customer['accounts'].map(item => {
                         
                         return (<div key={item['number']}>
                                <Typography component="h3" variant="h5" className={classes.Title} align="left" >
                                    {item['type']} 
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

                                        <TableRow key={item['number']}>

                                            {/* <TableCell><Link color="primary"
                                                            className={classes.Pointer}>{customer['accounts'][0]['number']}</Link></TableCell> */}
                                            <TableCell>{item['type']} {item['number']}</TableCell>
                                            <TableCell align="right">$ {item['balance']}</TableCell>
                                        </TableRow>


                                        <TableRow>
                                            <TableCell align="right" className={classes.fBold}>Total Banking Balance
                                            (CAD)</TableCell>
                                            <TableCell align="right" className={classes.fBold}>$ {item['balance']}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>);

                    })}
                    
                </div>
            </Container>
        </ThemeProvider>
    )
}