import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { LoginView } from "../views/";
import { userLoginThunk } from "../../thunks";
class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    this.props.userLogin(this.state);
  }

  render() {
    return <LoginView {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />;
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userLogin: (loginCred) => dispatch(userLoginThunk(loginCred, ownProps)),
  };
};

LoginContainer.propTypes = {
  userLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginContainer);
