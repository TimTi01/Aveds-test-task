import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Home} from "../Pages/Home";
import {MainPage} from "../Pages/MainPage";
import {Contacts} from "../Pages/Contacts";

export const Routers = () => {

    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/main-page' component={MainPage}/>
            <Route exact path='/contacts' component={Contacts}/>
        </Switch>
    )
}