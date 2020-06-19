import React from 'react';
import { Link } from 'react-router-dom';


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
                    <li>social media icon</li>
                    <li>social media icon</li>
                </ul>
            </div>
        </nav>
	)
}

export default FooterView;