import React from "react";
import {
    BrowserRouter,
    Switch,
    Route, Link
} from "react-router-dom";
import { useStore } from 'react-stores';
import './App.scss';
import Home from './Basic/Home';
import Event from './Basic/Event';
import Faq from './Basic/Faq';
import Register from './Register';
import Bottom from './Basic/Bottom';
import Login from './Login'
import AccountSummary from "./AccountSummary/accountSummary";
import AccountDetail from "./AccountSummary/accountDetail";
import Detail from "./User/detail"
import { store } from './store';
import AccountTransfer from "./AccountSummary/AccountTransfer";
import BillPayment from "./AccountSummary/BillPayment";
import SideBar from "./Menus/SideBar";
import MainBar from "./Menus/MainBar";
import Product from "./Basic/Product";
import {Redirect} from "react-router";

export default function App() {
    const authStoreState = useStore(store);
    let location = window.location.pathname;
    const publicMenus= ['/home','/products','/event','/faq','/signin','/register'];
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true)
    };
    const handleDrawerClose = () => {
        setOpen(false)
    };
    return (
        <BrowserRouter>
            <MainBar action = {open} drawerOpen={handleDrawerOpen}/>
            {
                (authStoreState.authorized && !publicMenus.includes(location)) ?
                (<SideBar action = {open} drawerClose={handleDrawerClose}/>) : ''
            }
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/event" component={Event}/>
                <Route exact path="/products" component={Product}/>
                <Route exact path="/faq" component={Faq}/>
                <Route exact path="/signIn">
                    <Login/>
                </Route>
                <Route path="/user/:userId" component={Detail}/>
                <Route path="/register" component={Register}/>
                <Route path="/accounts/summary" component={AccountSummary}/>
                <Route path="/accounts/details" component={AccountDetail}/>
                <Route path="/accounts" component={AccountSummary}/>
                <Route path="/transfer/myaccount" component={AccountTransfer}/>
                <Route path="/transfer" component={AccountTransfer}/>
                <Route path="/creditbillpayment" component={BillPayment} />
                <Route path="/" component={props => (<Redirect to="/home"/>)} />
            </Switch>
            {(!authStoreState.authorized) ?
            (<Bottom/>) : '' }
        </BrowserRouter>
    );
}
