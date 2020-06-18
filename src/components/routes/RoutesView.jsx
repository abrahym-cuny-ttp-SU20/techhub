import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomePageContainer,
  LoginContainer,
  SignupContainer,
  UserProfileContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/signup" component={SignupContainer} />
      <Route exact path="/profile/:id" component={UserProfileContainer} />
    </Switch>
  );
};

export default RoutesView;
