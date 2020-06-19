import React from 'react';

const HomePageView = (props) => {
    return(
    	<>
        	<div className="landing-container">
            	<div className="">
            		<h1>The One Stop Shop <span>for Tech Heads</span></h1>

            		<div class="button_cont" align="center">
                        <a className="landing_cta-btn" href="add-website-here" target="_blank" rel="nofollow noopener">Sign Up for Free</a>
                    </div>
            	</div>
            </div>
            <div className="content-container">
                <div className="content">
                    <div className="left-align image-container">
                        <img src="https://via.placeholder.com/150" alt="placeholder"/>
                    </div>
                    <div className="right-align text-container">
                        <h3>Use it anywhere</h3>
                        <br />
                        <p>One link that directs your audience to all your content for their consumption. </p>
                    </div>
                </div>
                <div className="content">
                    <div className="left-align text-container">
                        <h3>Easily managed</h3>
                        <br />
                        <p>Creating a Techhub takes seconds to setup. Explore all the websites you can connect.</p>
                    </div>
                    <div className="right-align image-container">
                        <img src="https://via.placeholder.com/150" alt="placeholder"/>
                    </div>
                </div>
                <div className="content">
                    <div className="left-align image-container">
                        <img src="https://via.placeholder.com/150" alt="placeholder"/>
                    </div>
                    <div className="right-align text-container">
                        <h3>Jobs Board</h3>
                        <br />
                        <p>Connect with employers using one singular link that directly connects them to your professional streams.</p>
                    </div>
                </div>
            </div>  
        </>
    )
}
export default HomePageView;