import React from 'react';

const HomePageView = (props) => {

    return(
    	<>
        	<div className="landing-container">
            	<div className="">
            		<h1>The One Stop Shop for Tech Heads</h1>

            		<button>Sign Up for Free</button>
            	</div>
            </div>
            <div className="content-container">
                <div className="content">
                    <div class="left-align-image-container">
                        <img src="#" />
                    </div>
                    <div class="right-align-text-container">
                        <h3>Use it anywhere</h3>
                        <br />
                        <p>One link that directs your audience to all your content</p>
                    </div>
                </div>
                <div className="content">
                    {/* Content similar to above, fitting the design */}
                </div>
            </div>  
            <div class="footer-container">
                {/* Footer styling fitting the design */}
            </div> 
        </>
    )
}
export default HomePageView;