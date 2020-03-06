import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.background.default,
            },
        },
    }),
)(TableRow);

function createData(title: string, data: string) {
    return { title, data };
}

const rows = [
    createData('Item One', 'Item One'),
    createData('Item Two', 'Item Two'),
    createData('Item Three', 'Item Three'),
    createData('Item Four', 'Item Four'),
    createData('Item Five', 'Item Five'),
    createData('Item Six', 'Item Six'),

];

const useStyles = makeStyles({
    table: {
        minWidth: 300,
    },
    th:{
        backgroundColor:'#1aaf4b'
    }
});

export default function CustomizedTables() {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead className={classes.th}>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Data</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow  key={row.title}>
                            <TableCell  component="th" scope="row">
                                {row.title}
                            </TableCell >
                            <TableCell  align="right">{row.data}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}