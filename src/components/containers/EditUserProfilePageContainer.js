import React, { Component } from "react";
import PropTypes from "prop-types";
import { EditUserProfilePageView } from "../views";
import { connect } from "react-redux";
import { fetchUserThunk } from "../../thunks";

class EditUserProfilePageContainer extends Component {
  componentDidMount() {
    const { id } = this.props.history.match.params;
    this.props.fetchUser(id);
  }

  render() {
    return <EditUserProfilePageView links={this.props.links} />;
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

EditUserProfilePageContainer.propTypes = {
  fetchUser: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserProfilePageContainer);
