import React from "react";
import { Link } from "react-router-dom";

const NavBarView = (props) => {
  return (
    <nav>
      	<Link to="/" className="nav-link">Home</Link>
      	<Link to="/about" className="nav-link">About</Link>
      	<Link to="/jobs" className="nav-link">Jobs</Link>
    </nav>
  );
};

export default NavBarView;