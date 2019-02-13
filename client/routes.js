import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Greeting from "./components/Greeting";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/name" component={Greeting} />
      </Switch>
    );
  }
}

export default Routes;
