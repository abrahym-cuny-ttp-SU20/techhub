//This is the login page. 
//The next page that will show after a
//successful login will be the profile page
import React, { useState } from 'react';
import '../../app/App.css';
import GoogleLogin  from 'react-google-login';

//import ProfilePage from '../../Backend_Socials/Options';
require('dotenv').config();
const LoginView = (props) => {
    
// Declared a new state variable called "google"
// This state varible will hold the google login response
// The google login response is stored in a object called profileObj
    const [google, setGoogle] = useState();
    const responseGoogle = (response) => {
        console.log(response);
        //I am having trouble storing the profileObj
        //object in the state varible
        //it returns undefined every time
        setGoogle(response.profileObj);
        // setIsLoggedIn(true);
        // setUsername(response.profileObj.email);
        // setSocialId(response.profileObj.googleId);
        // setImageUrl(response.profileObj.imageUrl);
        // setSocial('Google');
        console.log({google});
        //After successfully storing/aceesing google login
        //it should send you to the profile page

    }
    const divButtonStyle = {
        float: "left",
        display:"inline"
    }
    return (
        <div className="App-header">
        <div id="login">
            <div className="logo">
                <div>Login</div>
                
                <form onSubmit={props.handleSubmit}>
                    <div className="email">
                        <input type="email" name="email"  placeholder="Email Address" value={props.email} onChange={props.handleChange}/>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" value={props.password} onChange={props.handleChange}/>
                    </div>
                    <button type="submit">Login</button>
                    <div className="google-auth" style={divButtonStyle}>
                        <GoogleLogin
                            clientId={process.env.REACT_APP_Google_ID}
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                </form>
                
            </div>
            </div>
        </div>
        
    )
}   

export default LoginView;