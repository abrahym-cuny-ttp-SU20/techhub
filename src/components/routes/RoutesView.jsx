import React from "react";
import { Switch, Route } from "react-router-dom";
import * as Container from "../containers";

const RoutesView = () => {
  return (
    <Switch>
        <Route exact path="/" component={Container.HomePage} />
        <Route exact path="/about" component={Container.AboutPage} />
        <Route exact path="/jobs" component={Container.JobsPage} />      
    </Switch>
  );
};

export default RoutesView;
