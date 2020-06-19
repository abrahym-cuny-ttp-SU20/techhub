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
                    <div className="left-align image-container">
                        <img src="https://via.placeholder.com/150" alt="placeholder"/>
                    </div>
                    <div className="right-align text-container">
                        <h3>Use it anywhere</h3>
                        <br />
                        <p>One link that directs your audience to all your content</p>
                    </div>
                </div>
                <div className="content">
                    <div className="left-align text-container">
                        <h3>Easily managed</h3>
                        <br />
                        <p>One link that directs your audience to all your content</p>
                    </div>
                    <div className="right-align image-container">
                        <img src="https://via.placeholder.com/150" alt="placeholder"/>
                    </div>
                </div>
            </div>  
        </>
    )
}
export default HomePageView;