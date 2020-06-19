import React, { Component } from "react";
import PropTypes from "prop-types";
import { SignupPageView } from "../views";
import { connect } from "react-redux";
import { userSignupThunk } from "../../thunks";

class SignupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.userSignup(this.state);
  };

  render() {
    return (
      <SignupPageView
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userSignup: (newUser) => dispatch(userSignupThunk(newUser, ownProps)),
  };
};

SignupContainer.propTypes = {
  userSignup: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(SignupContainer);
