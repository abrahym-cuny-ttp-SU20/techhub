import React from "react";

const UserProfilePageView = (props) => {
  return (
      <div className="page">
        <div className="user-details">
          <div className="profile-image">
          </div>
          <div className="qr-code">
          </div>
          <div className="skills">
            <div className="add-skill-btn"></div>
            <div>Skill Component goes here</div>
          </div>
        </div>
        <div className="links">
          <div className="add-link-button"></div>
          <div>Link Component Goes here</div>
        </div>
      </div>
  );
};

export default UserProfilePageView;
