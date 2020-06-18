import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { LoginView } from "../views/";
import { loginThunk } from "../../thunks";
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
    e.preventDefault();
    this.props.login(this.state);
  };

  render() {
    return <LoginView {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />;
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (loginCred) => dispatch(loginThunk(loginCred,ownProps)),
  };
};

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginContainer);
