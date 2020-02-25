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
import Register from '../components/Register/Register';
import Bottom from '../components/Bottom/Bottom';
import {Container, Toolbar, Typography, Button} from "@material-ui/core";

export default function App() {
    return (
            <Router>
                <AppBar position="static" className='menu'>
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
                    <Route path="/products">
                        <Home/>
                    </Route>
                    <Route path="/event">
                    </Route>
                    <Route path="/faq">
                    </Route>
                    <Route path="/signIn">
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
                <Bottom/>
            </Router>
    );
}
