import React from "react";
import {
    BrowserRouter ,
    Switch,
    Route
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
import SideBar from "./Menus/SideBar";
import { MainBar } from "./Menus/MainBar";

export default function App() {
    const authStoreState = useStore(store);
    let location = window.location.pathname;
    const publicMenus= ['/home','/products','/event','/faq','/signIn'];
    return (
        <BrowserRouter>
            <MainBar />
            {
                (authStoreState.authorized && !publicMenus.includes(location)) ?
                (<SideBar/>) : ''

            }
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/event" component={Event}/>
                <Route exact path="/faq" component={Faq}/>
                <Route exact path="/signIn">
                    <Login/>
                </Route>
                <Route path="/user/:userId" component={Detail}/>
                <Route path="/register" component={Register}/>
                <Route path="/accounts/summary" component={AccountSummary}/>
                <Route path="/accounts/details" component={AccountDetail}/>
                <Route path="/transfer/new" component={AccountTransfer}/>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
            {(!authStoreState.authorized) ?
            (<Bottom/>) : '' }
        </BrowserRouter>
    );
}
