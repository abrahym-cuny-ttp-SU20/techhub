import React, { Component } from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { NavBarView } from "../views";
import {logoutThunk} from "../../thunks";
import { withRouter } from "react-router-dom";

class NavBarContainer extends Component {


  handleLogout = () => {
    console.log("logout method ran")
    this.props.logout(this.props.history);
  }

  render() {
    console.log(this.props);
    return <NavBarView handleLogout={this.handleLogout} isLoggedIn={this.props.authenticated}/>;
  }
}
const mapStateToProps = (state) => {
  return {
    authenticated: state.session.authenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (location) => dispatch(logoutThunk(location)),
  };
};

NavBarContainer.propTypes = {
  logout: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBarContainer));