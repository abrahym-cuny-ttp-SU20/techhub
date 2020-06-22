import React, {Component} from "react";
import '../../app/App.css';
import { Router, Route } from "react-router-dom";
// import {useProfile} from '../../Backend_Socials/Profile/useProfile';
import Profile from '../../Backend_Socials/Profile/Profile';
import GoogleLogin  from 'react-google-login';
//import ProfilePage from '../../Backend_Socials/Options';
require('dotenv').config();


class SignupView extends Component{
  constructor(props){
    super(props)
    this.state={
      email='',
      social='',
      imageUrl='',
      socialId=''
    }
  }
// Declared a new state variable called "google"
// This state varible will hold the google login response
// The google login response is stored in a object called profileObj
    const [google, setGoogle] = useProfile({obj:{}});
    const responseGoogle = (response) => {
        console.log(response);
        //I am having trouble storing the profileObj
        //object in the state varible
        //it returns undefined every time

        setGoogle(response.profileObj);
        /*
          As of now protent that it works and it returns the following fields
          -The name of the social media (Google)
          -The username (email)
          -The social Id
          -Profile URL
        */
        // setIsLoggedIn(true);
        // setUsername(response.profileObj.email);
        // setSocialId(response.profileObj.googleId);
        // setImageUrl(response.profileObj.imageUrl);
        // setSocial('Google');
        console.log({google});
        //After successfully storing/aceesing google login
        //it should send you to the profile page
        return(
          <Router>
            <Route path="/Profile" exact component={Profile} />
          </Router>
        )
    }
    const divButtonStyle = {
        float: "left",
        display:"inline"
    }
  return (
      <form onSubmit={props.handleSubmit}>
        <div className="name">
          <input name="firstName" type="text" placeholder="First Name" value={props.firstName} onChange={props.handleChange}/>
          <input name="lastName" type="text" placeholder="Last Name" value={props.lastName} onChange={props.handleChange}/>
        </div>
        <div className="email">
          <input name="email" type="email" placeholder="Email Address" value={props.email} onChange={props.handleChange}/>
        </div>
        <div className="password">
          <input name="password" type="password" placeholder="Password" value={props.password} onChange={props.handleChange}/>
        </div>
        <div className="password-confirmation">
          <input
            name="passwordConfirmation"
            type="password"
            placeholder="Password Confirmation"
            value={props.passwordConfirmation}
            onChange={props.handleChange}
          />
        </div>
        <button type="submit">Signup</button>
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
  );
};
export default SignupView;
