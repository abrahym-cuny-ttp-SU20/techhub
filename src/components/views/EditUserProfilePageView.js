import React from "react";
import { EditPageLinkContainer } from "../containers";

const EditUserProfilePageView = (props) => {
  const pageLinks = () =>
    props.pageLinks.map((pageLink) => (
      <EditPageLinkContainer
        key={pageLink.id}
        {...pageLink}
        handleChange={props.handleChange}
        handleSavePageLink={props.handleSavePageLink}
      />
    ));
  return (
    <div className="page">
      <div className="user-details">
        <div className="profile-image"></div>
        <div className="qr-code"></div>
        <div className="skills">
          <div className="add-skill-btn"></div>
          <div>Skill Component goes here</div>
        </div>
      </div>
      <div className="links">
        <div className="add-link-button"></div>
        {pageLinks()}
      </div>
    </div>
  );
};

export default EditUserProfilePageView;
