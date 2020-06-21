import React from 'react';
import GoogleLogin  from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
//import GitHubLogin from 'react-github-login';
//import InstagramLogin from 'react-instagram-login';
require('dotenv').config();




const LoginView = (props) => {
    let state={
        isGoogleLoggedIn:false,
        googleEmail:'',
        googleId:'',
        googleName:'',
        isFacebookLoggedIn:'',
        facebookName:'',
        facebookUsername:'',
        facebookUserID:''
    }
    const responseGoogle = (response) => {
        console.log(response);
        console.log(state);
        state={
            isGoogleLoggedIn:true,
            googleEmail:response.profileObj.email,
            googleId:response.profileObj.googleId,
            imageUrl:response.profileObj.imageUrl,
            googleName:response.profileObj.name
        };
        console.log(state);
        console.log(state.googleId);
    }
    
    
    // const responseFacebook = (response) => {
    //     console.log(response);
    //     console.log(state);
    //     state={
    //         isFacebookLoggedIn:true,
    //         facebookUsername:response.name,
    //         facebookUserID:response.id,
    //         facebookName:'Facebook'
    //     };
    //     console.log(state);
        
    // }
    // const responseGithub = (response) => {
    //     console.log(response);
        
    //     // state={
    //     //     isGoogleLoggedIn:true,
    //     //     googleEmail:response.profileObj.email,
    //     //     googleId:response.profileObj.googleId,
    //     //     imageUrl:response.profileObj.imageUrl,
    //     //     googleName:response.profileObj.name
    //     // };
    // }
    // const responseInstagram = (response) => {
    //     console.log(response);
        
    //     // state={
    //     //     isGoogleLoggedIn:true,
    //     //     googleEmail:response.profileObj.email,
    //     //     googleId:response.profileObj.googleId,
    //     //     imageUrl:response.profileObj.imageUrl,
    //     //     googleName:response.profileObj.name
    //     // };
    // }
    const divButtonStyle = {
        float: "left",
        display:"inline"
        //borderRadius: "2px"
        //padding: "10px 24px",
        //width:"1px",
        //height:"1px"
    }
    return (
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
                </form>
                <div className="oauth" style={divButtonStyle}>
                    <div className="google-auth" style={divButtonStyle}>
                        <GoogleLogin
                            clientId={process.env.REACT_APP_Google_ID}
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            //onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            //cssClass={divButtonStyle}
                        />
                    </div>
                    {/* <div className="instagram-auth" style={divButtonStyle}>
                        <InstagramLogin
                            clientId="process.env.Instagram_ID"
                            buttonText="Instagram"
                            onSuccess={responseInstagram}
                            onFailure={responseInstagram}
                            //cssClass={divButtonStyle}
                        />
                    </div> */}
                    {/* <div className="facebook-auth" style={divButtonStyle}>
                        <FacebookLogin
                            appId={process.env.Facebook_ID}
                            //autoLoad={true}
                            //fields="name,email,picture"
                            // onClick={componentClicked}
                            callback={responseFacebook} 
                            //cssClass={divButtonStyle}
                        />
                    </div> */}
                    {/* <div className="github-auth" style={divButtonStyle}>
                        <GitHubLogin 
                            clientId="process.env.Github_ID"
                            onSuccess={responseGithub}
                            //onFailure={responseGithub}
                        />
                    </div> */}
                </div> 
            </div>
        </div>
    )
}   
// profileObj.
export default LoginView;