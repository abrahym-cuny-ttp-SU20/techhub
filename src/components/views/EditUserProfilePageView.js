import React from "react";
import { EditPageLinkContainer } from "../containers";
import { Button, Chip, Paper, Input } from '@material-ui/core';
import "./styles/EditUserProfilePageContainer.css";

const EditUserProfilePageView = (props) => {
  const pageLinks = () =>
    props.pageLinks.map((pageLink) => (
      <EditPageLinkContainer
        key={pageLink.id}
        {...pageLink}
        handleChange={props.handleChange}
        handleSavePageLink={props.handleSavePageLink}
        handleDeletePageLink={props.handleDeletePageLink}
      />
    ));
  return (
    <div className="page">
      <div className="user-details">
        <div className="image-cropper">
            <img className="profile-pic" src={props.user.profileImageURL} alt="user"/>
        </div>
        <div className="qr-code"></div>
        <div className="skills">
          <div className="add-skill-btn">
                  <Input placeholder="Enter Skill" name="skillInput" onChange={props.handleSkillChange} value={props.skillInput} inputProps={{ 'aria-label': 'description' }} />
                  <Button color="primary" variant="contained" onClick={props.handleAddSkill}>Add Skill</Button>
          </div>
          <div>
              <Paper component="ul" className="skill-container">
              {props.skills.map((skill) => {
                  return (
                      <li key={skill.id}>
                          <Chip
                              label={skill.name}
                              onDelete={props.handleDeleteSkill(skill)}
                          />
                      </li>
                  );
              })}
          </Paper>
          </div>
        </div>
      </div>
      <div className="links">
        <div className="add-link-button-container">
            <Button className="add-link-button" size="large" variant="contained" color="primary" onClick={props.handleAddPageLink}>
                Add Link
            </Button>
        </div>
        {pageLinks()}
      </div>
    </div>
  );
};
export default EditUserProfilePageView;
