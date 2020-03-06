import React from "react";
import {
    BrowserRouter ,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import './App.scss';
import AppBar from '@material-ui/core/AppBar';
import Home from '../components/Home/Home';
import Event from './Basic/Event';
import Faq from './Basic/Faq';
import Product from "./Basic/Product";
import Register from '../components/Register/Register';
import Bottom from '../components/Bottom/Bottom';
import Login from '../components/Login/Login'
import {Container, Toolbar, Typography, Button} from "@material-ui/core";
import AccountSummary from "./AccountSummary/accountSummary";
import AccountDetail from "./AccountSummary/accountDetail";
import SideBar from "./SideBar/SideBar";
import { store } from './store';
import { useStore } from 'react-stores';
import { Nav } from './Nav';

export default function App() {
    const login: boolean = false;
    const authStoreState = useStore(store);
    return (
        <BrowserRouter>
            <Nav />
            {/* <AppBar position="fixed" className='menu'>
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
                        <Typography variant="h6" align="right" className='login'>
                            <Link to="/signIn"><Button>SignIn</Button></Link>
                        </Typography>
                        <Typography align="right">
                            <Link to="/register"><Button>Register</Button></Link>
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
            {(login) ? (<SideBar/>) : ''} */}
            <Switch>
                <Route exact path="/products" component={Product}/>
                <Route exact path="/event" component={Event}/>
                <Route exact path="/faq" component={Faq}/>
                <Route exact path="/signIn">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/accounts/summary" component={AccountSummary}/>
                <Route path="/accounts/details" component={AccountDetail}/>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
            <Bottom/>
        </BrowserRouter>
    );
}
