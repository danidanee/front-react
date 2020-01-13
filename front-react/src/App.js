import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Main from "./routes/Main"
import Signup from "./routes/Signup"
import Login from "./routes/Login"
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Main}>
        <Navigation/>
      </Route>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
    </HashRouter>
  );
}

export default App;
