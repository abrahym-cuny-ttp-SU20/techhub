import React from "react";
import { Paper, Typography } from "@material-ui/core";

const PageLinkView = (props) => {
  return (
    <Paper className="page-link-container" onClick={()=>window.open(props.linkDetails.link,"_blank")}>
      <div className="logo-img">
        <img src="https://via.placeholder.com/150" alt="" />
      </div>
      <div className="page-link-title-container">
          <Typography>{props.linkDetails.title}</Typography>
      </div>
    </Paper>
  );
};

export default PageLinkView;
