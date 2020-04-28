import React from "react";
import AppBar from '@material-ui/core/AppBar';
import {Container, Toolbar, Typography, Button, Menu, MenuItem, IconButton} from "@material-ui/core";
import {
    Link,
} from "react-router-dom";
import {store} from '../store';
import {useStore} from 'react-stores';
import {logout} from "../authActions";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import logo from "../../asset/img/logo.png";
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: '#1BB14C',
            '& button': {
                color: 'white'
            },
            position: 'fixed',
            '& Toolbar': {
                height: '130px'
            },
            overflow: 'hidden',

            // marginBottom: "160px",
            zIndex: theme.zIndex.drawer + 1
        },
        login: {
            marginLeft: 'auto'
        },
        img: {
            width: "160px",
            // marginTop: "20px",
            // marginBottom: "20px",
            marginRight: "20px",
            cursor: "pointer"
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
    }),
);
export default function MainBar(props: any){
    const classes = useStyles();
    const authStoreState = useStore(store);
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout=()=>{
        logout();
        history.push('/home');
    }
    return (
        
            <AppBar className={classes.root}>
                <Container maxWidth={false}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={props.drawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: props.action,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <img className={classes.img} src={logo} alt="logo" onClick={()=> window.location.href='/home'} />
                        {(!authStoreState.authorized) ?
                            (
                                <>
                                    <Typography variant="h6" align="left">
                                        <Link to="/home"><Button>Home</Button></Link>
                                    </Typography>
                                    <Typography variant="h6" align="left">
                                        <Link to="/products"><Button>Products</Button></Link>
                                    </Typography>
                                    <Typography variant="h6" align="left">
                                        <Link to="/event"><Button>Event</Button></Link>
                                    </Typography>
                                    <Typography variant="h6" align="left">
                                        <Link to="/faq"><Button>FAQ</Button></Link>
                                    </Typography>

                                    <Typography variant="h6" align="right" className={classes.login}>
                                        <Link to="/signIn"><Button>SignIn</Button></Link>
                                    </Typography>
                                    <Typography align="right">
                                        <Link to="/register"><Button>Register</Button></Link>
                                    </Typography>
                                </>
                            ) : (
                                <>
                                    <Typography variant="h6" align="right" className={classes.login}>
                                        Hello!
                                    <Button aria-controls="user-menu" aria-haspopup="true" onClick={handleClick}>
                                            {authStoreState.customer['lastName']},{authStoreState.customer['firstName']}
                                        </Button>
                                        <Menu
                                            id="user-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}>
                                            <MenuItem onClick={handleClose} component={props => <Link {...props}
                                                to={`/user/${authStoreState.customer['id']}`} />}>My
                                            Profile</MenuItem>
                                            <MenuItem onClick={handleClose} component={props => <Link {...props}
                                                to={`/accounts/summary`} />}>My
                                            Accounts</MenuItem>
                                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                    </Menu>
                                </Typography>
                                </>
                            )}
                    </Toolbar>
                </Container>
            </AppBar>
        
    )
};