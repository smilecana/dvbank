import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

interface Column {
  id: 'date' | 'code' | 'population' | 'size' | 'density';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'date', label: 'Date', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString(),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString(),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
    Date: string;
    Transaction: string;
    Withdrawals: number;
    Deposite: any;
    Balance: number;
}

function createData(Date: string, Transaction: string, Withdrawals: number, Deposite: any): Data {
  const Balance = Withdrawals - Deposite;
  return { Date, Transaction, Withdrawals, Deposite, Balance };
}

const rows = [
  createData('Mar 2, 2020', 'Branch Transaction', 200 ,''),
  createData('Mar 2, 2020', 'Branch Transaction', 200 ,''),
  createData('Mar 2, 2020', 'Branch Transaction', 200 ,''),
  createData('Mar 2, 2020', 'Branch Transaction', 200 ,''),
  createData('Mar 2, 2020', 'Branch Transaction', 200 ,''),
  createData('Mar 2, 2020', 'Branch Transaction', 200 ,''),
  createData('Mar 2, 2020', 'Branch Transaction', 200 ,''),
  createData('Mar 2, 2020', 'Branch Transaction', 200 ,''),
  createData('Mar 2, 2020', 'Branch Transaction', 200 ,''),
  createData('Mar 2, 2020', 'Branch Transaction', 200 ,''),
  createData('Mar 2, 2020', 'Branch Transaction', 200 ,''),
  createData('Mar 2, 2020', 'Branch Transaction', 200 ,''),
  createData('Mar 2, 2020', 'Branch Transaction', 200 ,''),
  createData('Mar 2, 2020', 'Branch Transaction', 200 ,''),
  createData('Mar 2, 2020', 'Branch Transaction', 200 ,''),
 
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    // maxHeight: 440,
  },
});

export default function StickyHeadTable() {
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

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
