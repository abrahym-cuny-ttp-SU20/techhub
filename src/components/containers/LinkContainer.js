import React, { Component } from "react";
import { LinkView } from "../views";

class LinkContainer extends Component {
  render() {
    return <LinkView linkDetails={this.props.linkDetails}/>;
  }
}
export default LinkContainer;
