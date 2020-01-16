import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Main from "./routes/Main"
import Signup from "./routes/Signup"
import Login from "./routes/Login"
import NotFound from "./routes/NotFound"
import PassChange from "./routes/PassChange"
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact={true} component={Main}>
          <Navigation/>
        </Route>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/passchange" component={PassChange} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
