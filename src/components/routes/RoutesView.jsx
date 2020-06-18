import React from "react";
import { Switch, Route } from "react-router-dom";
import {HomePageContainer, LoginContainer, SignupContainer} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/signup" component={SignupContainer}/>
    </Switch>
  );
};

export default RoutesView;
