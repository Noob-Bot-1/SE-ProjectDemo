import React, { useContext } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginStudent from './Auth/LoginStudent';
import RegisterStudent from './Auth/RegisterStudent';
import Header from './Components/Header';
import AuthContext from './Context/AuthContext';

function Router() {
    const {loggedIn} = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                {!loggedIn && (
                    <>
                        <Route path = '/RegisterStudent'>
                            <RegisterStudent />
                        </Route>
                        <Route path = '/LoginStudent'>
                            <LoginStudent />
                        </Route>
                    </>
                )}
                <Route path = '/'>
                    <div>Home</div>
                </Route>
            </Switch>
        </BrowserRouter>
    
)}

export default Router
