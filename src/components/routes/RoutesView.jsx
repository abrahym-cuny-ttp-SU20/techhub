import React from "react";
import { Switch, Route } from "react-router-dom";
import * as Container from "../containers";
import PrivateRoute from "./PrivateRoute";

const RoutesView = (props) => {
  return (
    <Switch>
      {props.checked && (
        <>
          <Route exact path="/" component={Container.HomePage} />
          <Route exact path="/about" component={Container.AboutPage} />
          <Route exact path="/jobs" component={Container.JobsPage} />
          <Route exact path="/login" component={Container.LoginPage} />
          <Route exact path="/signup" component={Container.SignupPage} />
          <PrivateRoute
            exact
            path="/edit"
            component={Container.EditUserProfilePage}
            authenticated={props.authenticated}
          />
        </>
      )}
    </Switch>
  );
};

export default RoutesView;
