import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Register from './pages/Register';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register">
          <Register />
        </Route>

        <Redirect to="/register" />
      </Switch>
    </div>
  );
}

export default App;
