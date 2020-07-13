import React from 'react';
import './App.css';
import { Switch, Router } from "react-router-dom";
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Switch>
      <Router exact path="/login">
        <LoginPage></LoginPage>
      </Router>
    </Switch>
  );
}

export default App;
