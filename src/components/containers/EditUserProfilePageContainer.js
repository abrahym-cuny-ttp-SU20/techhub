import React, { Component } from "react";
import PropTypes from "prop-types";
import { EditUserProfilePageView } from "../views";
import { connect } from "react-redux";
import {
  updateUserSessionThunk,
  fetchUserPageLinksThunk,
  editPageLinkThunk,
} from "../../thunks";

class EditUserProfilePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageLinks: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({ user: this.props.user });
    this.props
      .fetchUserPageLinks(this.props.user.id)
      .then(({ payload }) => this.setState({ pageLinks: payload }));
  }

  handleChange = (e, id) => {
    console.log(e.target.value, id);
    this.setState({
      pageLinks: this.state.pageLinks.map((pageLink) =>
        pageLink.id === id
          ? { ...pageLink, [e.target.name]: e.target.value }
          : pageLink
      ),
    });
  };

  handleSavePageLink = (e, id) => {
    e.preventDefault();
    const pageLink = this.state.pageLinks.filter((pageLink) => pageLink.id === id);
    this.props.editPageLink(...pageLink);
  };

  render() {
    return (
      <EditUserProfilePageView
        pageLinks={this.state.pageLinks}
        handleSavePageLink={this.handleSavePageLink}
        handleChange={this.handleChange}
      />
    );
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
    editPageLink: (pageLink) => dispatch(editPageLinkThunk(pageLink)),
  };
};

EditUserProfilePageContainer.propTypes = {
  user: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserProfilePageContainer);
