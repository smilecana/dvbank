import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import './App.scss';
import AppBar from '@material-ui/core/AppBar';
import Home from '../components/Home/Home';
import Event from '../components/Basic/Event/Event'
import Faq from '../components/Basic/Faq/Faq'
import Register from '../components/Register/Register';
import Bottom from '../components/Bottom/Bottom';

import Login from '../components/Login/Login'
// import UserMenu from "./UserMenu/UserMenu";

import {Container, Toolbar, Typography, Button} from "@material-ui/core";
import UserDetail from "./UserDetail/UserDetail";
import Product from "./Basic/Products/Product";


export default function App() {
    return (
            <Router>
                <AppBar position="fixed" className='menu'>
                    <Container>
                        <Toolbar>
                            <Typography variant="h6"  align="left">
                                <Link to="/products"><Button>Products</Button></Link>
                            </Typography>
                            <Typography variant="h6"  align="left" >
                                <Link to="/event"><Button>Event</Button></Link>
                            </Typography>
                            <Typography variant="h6" align="left">
                                <Link to="/faq"><Button>FAQ</Button></Link>
                            </Typography>
                            <Typography variant="h6"  align="left">
                                <Link to="/usermenu"><Button>UserMenu</Button></Link>
                            </Typography>
                            <Typography variant="h6" align="right" className='login'>
                                <Link to="/signIn"><Button>SignIn</Button></Link>
                            </Typography>
                            <Typography align="right">
                                <Link to="/register"><Button>Register</Button></Link>
                            </Typography>
                        </Toolbar>
                    </Container>
                </AppBar>
                <Switch>
                    <Route path="/usermenu">
                        <UserDetail/>
                    </Route>
                    <Route path="/products">
                        <Product/>
                    </Route>
                    <Route path="/event">
                        <Event/>
                    </Route>
                    <Route path="/faq">
                        <Faq/>
                    </Route>
                    <Route path="/signIn">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <div className="register-wrap">
                            <Register/>
                        </div>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
                <Bottom/>
            </Router>
    );
}
