import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginStudent from './Auth/LoginStudent';
import RegisterStudent from './Auth/RegisterStudent';
import Header from './Components/Header';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = '/RegisterStudent'>
                    <RegisterStudent />
                </Route>
                <Route path = '/LoginStudent'>
                    <LoginStudent />
                </Route>
                <Route path = '/'>
                    <Header />
                    <div>Home</div>
                </Route>
            </Switch>
        </BrowserRouter>
    
)}

export default Router
