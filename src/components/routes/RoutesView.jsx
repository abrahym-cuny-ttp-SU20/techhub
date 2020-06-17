import React from "react";
import { Switch, Route } from "react-router-dom";
import {HomePageContainer, LoginContainer} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/login" component={LoginContainer} />
    </Switch>
  );
};

export default RoutesView;
