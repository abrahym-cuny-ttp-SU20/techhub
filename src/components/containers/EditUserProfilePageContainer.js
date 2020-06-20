import React, { Component } from "react";
import PropTypes from "prop-types";
import { EditUserProfilePageView } from "../views";
import { connect } from "react-redux";
import { updateUserSessionThunk, fetchUserPageLinksThunk } from "../../thunks";

class EditUserProfilePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [],
    };
  }
  componentDidMount() {
    this.setState({ user: this.props.user });
    this.props
      .fetchUserPageLinks(this.props.user.id)
      .then(({ payload }) => this.setState({ links: payload }));
  }

  handleChange = (e) => {};

  render() {
    return <EditUserProfilePageView links={this.props.user.links} />;
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.session.user,
    links: state.links,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserSession: (user) => dispatch(updateUserSessionThunk(user)),
    fetchUserPageLinks: (id) => dispatch(fetchUserPageLinksThunk(id)),
  };
};

EditUserProfilePageContainer.propTypes = {
  user: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserProfilePageContainer);
