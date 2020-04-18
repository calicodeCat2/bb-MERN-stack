import React, { Component } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Home from "./containers/Home";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import Dashboard from "./containers/Dashboard/Dashboard";
import Register from "./containers/auth/Register";
import Login from "./containers/auth/Login";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/auth/register" exact component={Register} />
        <Route path="/auth/login" exact component={Login} />
      </Switch>
    );
    return (
      <div>
        <Toolbar />
        <Container className="App">{routes}</Container>
      </div>
    );
  }
}

export default App;
