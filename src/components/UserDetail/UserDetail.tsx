import React from 'react';
import {createMuiTheme, createStyles, makeStyles, Theme, ThemeProvider} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PaymentIcon from '@material-ui/icons/Payment';
import SendIcon from '@material-ui/icons/Send';
import {Link} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#5ee279',
            main: '#1aaf4b',
            dark: '#007e1d',
            contrastText: '#fff',
        },
        secondary: {
            main: '#1bb14c',
        },
    },
});
const drawerWidth = 270;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            minHeight: '800px'
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        toolbar: theme.mixins.toolbar,
    }),
);

export default function ClippedDrawer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classes.appBar}
                >
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            DV Bank
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar}/>
                    <List>
                        <ListItem button >
                            <ListItemIcon><HomeIcon/></ListItemIcon>
                            <ListItemText primary='Home' />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button key='Accounts'>
                            <ListItemIcon><AccountBalanceIcon/></ListItemIcon>
                            <ListItemText primary='Accounts'/>
                        </ListItem>
                        <ListItem button key='Transfers'>
                            <ListItemIcon><SendIcon/></ListItemIcon>
                            <ListItemText primary='Transfers'/>
                        </ListItem>
                        <ListItem button key='Bill Payment'>
                            <ListItemIcon><PaymentIcon/></ListItemIcon>
                            <ListItemText primary='Bill Payment'/>
                        </ListItem>
                    </List>
                    <Divider />
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />

                </main>
            </ThemeProvider>
        </div>
    );
}
