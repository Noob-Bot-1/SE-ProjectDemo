import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
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
                    <div>Login Student</div>
                </Route>
                <Route path = '/'>
                    <Header />
                    <div>Home</div>
                </Route>
            </Switch>
        </BrowserRouter>
    
)}

export default Router
