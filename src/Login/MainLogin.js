import React from "react";
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Login from "./Login";
import Logout from "./Logout";
import Admin from "./Admin";

export default function MainLogin ({loggedIn, isLoggedin}){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"
                       render={({match}) => <Login loggedIn={loggedIn} isLoggedin={isLoggedin}/>}/>
                <Route exact path="/admin"
                       render={({match}) => <Admin loggedIn={loggedIn} isLoggedin={isLoggedin}/>}/>
                <Route exact path="/logout"
                       render={({match}) => <Logout loggedIn={loggedIn} isLoggedin={isLoggedin}/>}/>
            </Switch>
        </BrowserRouter>
    );
}
