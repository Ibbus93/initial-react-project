import React from 'react';
import {Route, Switch} from "react-router-dom";
import {HOME, LOGIN} from './paths';
import Login from "../views/login";
import Home from "../views/home";

const Routes = () => (
    <Switch>
      <Route path={LOGIN.path}>
        <Login/>
      </Route>
      <Route path={HOME.path}>
        <Home/>
      </Route>
    </Switch>
);

export default Routes;
