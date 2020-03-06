// Nav.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import {Container, Toolbar, Typography, Button} from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import { store } from './store';
import { useStore } from 'react-stores';
import { login, logout } from './authActions';


export const Nav: React.FC = () => {
    const authStoreState = useStore(store);
    return (
        <AppBar position="fixed" className='menu'>
                <Container>
                    <Toolbar>
                        <Typography variant="h6" align="left">
                            <Link to="/products"><Button>Products</Button></Link>
                        </Typography>
                        <Typography variant="h6" align="left">
                            <Link to="/event"><Button>Event</Button></Link>
                        </Typography>
                        <Typography variant="h6" align="left">
                            <Link to="/faq"><Button>FAQ</Button></Link>
                        </Typography>
                        {(authStoreState.authorized) ? 
                        (
                            <Typography variant="h6" align="right" className='login'>
                                <Button onClick={logout}>SignOut</Button>
                            </Typography>
                         ) : (
                        <React.Fragment>
                            <Typography variant="h6" align="right" className='login'>
                                <Link to="/signIn"><Button>SignIn</Button></Link>
                            </Typography>
                            <Typography align="right">
                                <Link to="/register"><Button>Register</Button></Link>
                            </Typography>
                        </React.Fragment>
                            
                    )}
                        
                    </Toolbar>
                </Container>
                <SideBar/>
            </AppBar>
            
    )
};