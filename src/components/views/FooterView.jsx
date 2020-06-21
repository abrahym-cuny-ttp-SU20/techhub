import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { 
    faFacebook, 
    faInstagram, 
    faLinkedin } from "@fortawesome/free-brands-svg-icons";


const FooterView = () => {
	return (
		<nav className="footer-container">
            <div className="left-align nav-item">
                <div className="image-container">
                    <Link to="/" className="nav-link">
                        <img src="#" alt="Logo"/>
                    </Link>
                </div>
            </div>  
            <div className="right-align nav-item">
                <ul>
                    <li><FontAwesomeIcon size="2x" icon={faInstagram} /></li>
                    <li><FontAwesomeIcon size="2x" icon={faFacebook} /></li>
                    <li><FontAwesomeIcon size="2x" icon={faLinkedin} /></li>
                </ul>
            </div>
        </nav>
	)
}

export default FooterView;