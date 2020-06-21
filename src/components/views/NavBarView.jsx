import React from "react";
import { Link } from "react-router-dom";

const NavBarView = (props) => {
  return (
    <nav>
      <div className="left-align nav-item">
        <div className="image-container">
          <Link to="/" className="nav-link">
            <img src="#" alt="Logo" />
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/jobs" className="nav-link">
            Jobs
          </Link>
        </div>
      </div>
      <div className="right-align nav-item">
        <ul>
          {props.isLoggedIn ? (
            <>
              <li className="nav-link">
                <Link to="/edit" className="reg-btn login-btn">
                  <button>Profile</button>
                </Link>
              </li>
              <li className="nav-link">
                <Link
                  to="/logout"
                  onClick={props.handleLogout}
                  className="reg-btn"
                >
                  <button>Logout</button>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-link">
                <Link to="/login" className="reg-btn login-btn">
                  <button>Log In</button>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/signup" className="reg-btn">
                  <button>Sign Up</button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBarView;
