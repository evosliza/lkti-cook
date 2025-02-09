import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Register from './auth/Register';
import Login from './auth/Login';
import Home from './home/Home';

import { getIsLoggedIn } from '../store/selectors';

function MainRoutes() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  const loggedInRoutes = (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>

      <Redirect to="/home" />
    </Switch>
  );

  const notLoggedInRoutes = (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>

      <Redirect to="/login" />
    </Switch>
  );

  return (
    isLoggedIn ? loggedInRoutes : notLoggedInRoutes
  );
}

export default MainRoutes;
