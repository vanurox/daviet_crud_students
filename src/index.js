import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Admin from './admin/';
import Frontend from './frontend/';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Signup from './admin/authentication/Signup';
import Login from './admin/authentication/Login';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Frontend} />
            <Route path="/admin" component={Admin} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
