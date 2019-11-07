import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import "normalize.css";
import './modules/animate/animate.css'
import * as serviceWorker from './serviceWorker';
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Login from './modules/Login/Login';
import UI from "./pages/UI/UI";
import Base from "./pages/common/Base";
import AppDownload from "./pages/AppDownload/AppDownload";
import Photo from "./pages/Photo/Photo";

let root = <>
    <Login/>
    <BrowserRouter>
        <Switch>
            <Route exact path={'/'} component={Base}/>
            <Route path={'/ui'} component={UI}/>
            <Route path={'/appDownload'} component={AppDownload}/>
            <Route path={'/photo/:c/:g/'} component={Photo}/>
            <Route path={'/photo'} component={Photo}/>
        </Switch>
    </BrowserRouter>
</>;
ReactDOM.render(root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();