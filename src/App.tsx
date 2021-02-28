import React, { useEffect } from 'react';

import './App.css';
import MainRoutes from './pages/MainRoutes';
import { useDispatch } from 'react-redux';
import { firebaseService } from './firebase';
import actions from './store/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebaseService.handleAuthStateChange((user) => {
      dispatch(actions.setLoggedInUser(user));
    })
  }, [dispatch]);

  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
