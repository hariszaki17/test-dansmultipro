import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'

function App() {
  return (
    <Switch>
      <Route exact path="/login">
        <LoginPage></LoginPage>
      </Route>
      <Route path="/positions">
        <MainPage></MainPage>
      </Route>
    </Switch>
  );
}

export default App;
