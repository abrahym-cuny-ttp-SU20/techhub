import React, { Component } from "react";
import PropTypes from "prop-types";
import { EditUserProfilePageView } from "../views";
import { connect } from "react-redux";
import {
  updateUserSessionThunk,
  fetchUserPageLinksThunk,
  editPageLinkThunk,
  deletePageLinkThunk,
  addPageLinkThunk,
  addUserSkillThunk,
  removeUserSkillThunk,
  fetchUserSkillsThunk,
} from "../../thunks";

class EditUserProfilePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillInput: "",
      pageLinks: [],
      skills: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ user: this.props.user });
    this.props
      .fetchUserPageLinks(this.props.user.id)
      .then(({ payload }) => this.setState({ pageLinks: payload }));
    this.props
      .fetchUserSkills(this.props.user.id)
      .then(({ payload }) => this.setState({ skills: payload }));
  }

  handleChange = (e, id) => {
    this.setState({
      pageLinks: this.state.pageLinks.map((pageLink) =>
        pageLink.id === id
          ? { ...pageLink, [e.target.name]: e.target.value }
          : pageLink
      ),
    });
  };

  handleSkillChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDeletePageLink = (e, id) => {
    this.props
      .deletePageLink(id)
      .then(() => this.props.fetchUserPageLinks(this.props.user.id))
      .then(({ payload }) => this.setState({ pageLinks: payload }));
  };

  handleDeleteSkill = (skillToDelete) => () => {
    this.props
      .removeUserSkill(skillToDelete.id, this.state.user.id)
      .then(() => this.props.fetchUserSkills(this.props.user.id))
      .then(({ payload }) => this.setState({ skills: payload }));
  };

  handleSavePageLink = (e, id) => {
    e.preventDefault();
    const pageLink = this.state.pageLinks.filter(
      (pageLink) => pageLink.id === id
    );
    this.props.editPageLink(...pageLink);
  };

  handleAddPageLink = (e) => {
    const pageLink = {
      link: "",
      imageURL: "",
      title: "",
      userId: this.props.user.id,
    };
    this.props.addPageLink(pageLink).then(({ payload }) => {
      console.log(payload);
      this.setState((prevState) => {
        return {
          pageLinks: [payload, ...prevState.pageLinks],
        };
      });
    });
  };

  handleAddSkill = (e) => {
    const skill = {
      name: this.state.skillInput,
    };
    this.props
      .addUserSkill(skill, this.state.user.id)
      .then(() => this.props.fetchUserSkills(this.props.user.id))
      .then(({ payload }) => this.setState({ skills: payload }));
  };

  render() {
    return (
      <EditUserProfilePageView
        handleSavePageLink={this.handleSavePageLink}
        handleDeletePageLink={this.handleDeletePageLink}
        handleAddPageLink={this.handleAddPageLink}
        handleDeleteSkill={this.handleDeleteSkill}
        handleAddSkill={this.handleAddSkill}
        handleChange={this.handleChange}
        handleSkillChange={this.handleSkillChange}
        user={this.props.user}
        pageLinks={this.state.pageLinks}
        skills={this.state.skills}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.session.user,
    pageLinks: state.pageLinks,
    skills: state.skills,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserSession: (user) => dispatch(updateUserSessionThunk(user)),
    fetchUserPageLinks: (id) => dispatch(fetchUserPageLinksThunk(id)),
    editPageLink: (pageLink) => dispatch(editPageLinkThunk(pageLink)),
    deletePageLink: (id) => dispatch(deletePageLinkThunk(id)),
    addPageLink: (pageLink) => dispatch(addPageLinkThunk(pageLink)),
    fetchUserSkills: (id) => dispatch(fetchUserSkillsThunk(id)),
    addUserSkill: (skill, userId) => dispatch(addUserSkillThunk(skill, userId)),
    removeUserSkill: (id, userId) => dispatch(removeUserSkillThunk(id, userId)),
  };
};

EditUserProfilePageContainer.propTypes = {
  user: PropTypes.object.isRequired,
  fetchUserPageLinks: PropTypes.func.isRequired,
  editPageLink: PropTypes.func.isRequired,
  deletePageLink: PropTypes.func.isRequired,
  addPageLink: PropTypes.func.isRequired,
  fetchUserSkills: PropTypes.func.isRequired,
  addUserSkill: PropTypes.func.isRequired,
  removeUserSkill: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserProfilePageContainer);
