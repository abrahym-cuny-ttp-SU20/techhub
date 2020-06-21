import React, { Component } from "react";
import { PageLinkView } from "../views";

class PageLinkContainer extends Component {
  render() {
    return <PageLinkView linkDetails={this.props.linkDetails} />;
  }
}
export default PageLinkContainer;
