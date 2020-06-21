import React from "react";
import { Paper, Switch, Input, Tooltip } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import SaveIcon from "@material-ui/icons/Save";
import "./styles/EditPageLinkView.css";

const EditPageLinkView = (props) => {
  const handleChange = (e) => {
    props.handleChange(e, props.id);
  };

  return (
    <Paper className="pageLink-container" elevation={2}>
      <div className="logo-img">
        <img src={props.imageURL} alt="" />
      </div>
      <div className="pageLink-inputs">
        <div className="pageLink-title-container">
          <Input
            placeholder="Enter Title"
            value={props.title}
            name="title"
            onChange={(e) => props.handleChange(e, props.id)}
            disableUnderline={true}
            inputProps={{ "aria-label": "page link title" }}
          />
        </div>
        <div className="pageLink-url-container">
          <Input
            placeholder="http://url"
            value={props.link}
            name="link"
            onChange={handleChange}
            disableUnderline={true}
            inputProps={{ "aria-label": "page link url" }}
          />
        </div>
      </div>
      <div className="option-buttons">
        <div className="pageLink-enable-switch">
          <Tooltip title="Enable/Disable Link">
            <Switch name="checkedB" color="primary" />
          </Tooltip>
        </div>
        <div className="pageLink-buttons">
          <Tooltip title="Save Changes">
            <SaveIcon
              color="primary"
              onClick={(e) => props.handleSavePageLink(e, props.id)}
            />
          </Tooltip>
          <Tooltip title="Delete Permanently">
            <DeleteForeverIcon
                type={"submit"}
              color="secondary"
              onClick={(e) => props.handleDeletePageLink(e, props.id)}
            />
          </Tooltip>
        </div>
      </div>
    </Paper>
  );
};
export default EditPageLinkView;
