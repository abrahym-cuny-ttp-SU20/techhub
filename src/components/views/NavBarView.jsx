import React from "react";
import { Link } from "react-router-dom";

const NavBarView = (props) => {
    console.log(typeof props.handleLogout)
  return (
    <nav>
      	<Link to="/" className="nav-link">Home</Link>
      	<Link to="/about" className="nav-link">About</Link>
      	<Link to="/jobs" className="nav-link">Jobs</Link>
        {
            props.isLoggedIn ?
                (
                    <>
                        <Link to="/edit" className="nav-link">Profile</Link>
                        <button type="button" onClick={props.handleLogout}>Logout</button>
                    </>
                ) :
                (
                    <>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/signup" className="nav-link">Signup</Link>
                    </>
                )
        }

    </nav>
  );
};

export default NavBarView;
