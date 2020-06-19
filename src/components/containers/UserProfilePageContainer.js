import React, { Component } from "react";
import PropTypes from "prop-types";
import { UserProfilePageView } from "../views";
import { connect } from "react-redux";
import { fetchUserThunk } from "../../thunks";

class UserProfilePageContainer extends Component {
  componentDidMount() {
    const { id } = this.props.history.match.params;
    this.props.fetchUser(id);
  }

  render() {
    return <UserProfilePageView links={this.props.links} />;
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUserThunk(id)),
  };
};

UserProfilePageContainer.propTypes = {
  fetchUser: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfilePageContainer);
