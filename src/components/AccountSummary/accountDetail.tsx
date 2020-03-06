import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography, Container } from '@material-ui/core';
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
function AccountDetailData(id: number, Account: string, Balance: number) {
    return { id, Account, Balance };
}
const accountDetails = [
    AccountDetailData(1, 'Basic- *********-7890', 312.44),
    AccountDetailData(2, 'Basic- *********-2340', 1899.44),
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
                <Typography component="h3" variant="h5" className={classes.Title}>
                    Account Details
                    </Typography>
                <div>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {accountDetails.map(row => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.Account}
                                        </TableCell>
                                        <TableCell align="right">{row.Balance}</TableCell>
                                        
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                </div>
                
            </ThemeProvider>
            </Container>
        </React.Fragment>
    )
}