import React from "react";
import { Switch, Route } from "react-router-dom";
import * as Container from "../containers";

const RoutesView = () => {
  return (
    <Switch>
        <Route exact path="/" component={Container.HomePage} />
        <Route exact path="/about" component={Container.AboutPage} />
        <Route exact path="/jobs" component={Container.JobsPage} />
        <Route exact path="/login" component={Container.LoginPage} />
        <Route exact path="/signup" component={Container.SignupPage}/>
    </Switch>
  );
};

export default RoutesView;
