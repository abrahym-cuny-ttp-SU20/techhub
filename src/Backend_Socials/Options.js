//This is the profile page

import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
//import Button from './Buttons';
import Info from './ShowInfo'
export default class Options extends Component {
    constructor(props) {
        super(props);
        this.state={
        isGoogleLoggedIn:false,
        googleEmail:'',
        googleId:'',
        googlrImageUrl:'',
        social:'',
        isFacebookLoggedIn:false,
        username:'',
        facebookUserID:'',
        auto:false
    }}
    responseGoogle = (response) => {
        this.setState({
            isGoogleLoggedIn: true,
            username: response.profileObj.email,
            googleId: response.profileObj.googleId,
            googlrImageUrl: response.profileObj.googleImageUrl,
            social:'Google'
        });

        const data = {
            isGoogleLoggedIn: true,
            username: response.profileObj.email,
            googleId: response.profileObj.googleId,
            googlrImageUrl: response.profileObj.googleImageUrl,
            social:'Google',
            auto:true
        }
    }
    responseFacebook = (response) => {
        this.setState({
            isFacebookLoggedIn: true,
            username:response.name,
            facebookUserID:response.id,
            social:'Facebook'
        });

        const data = {
            isFacebookLoggedIn: true,
            username:response.name,
            facebookUserID:response.id,
            social:'Facebook',
            auto:true
        }
    }
    divStyle = {
        backgroundColor: '#00FFFF'
      };

    render() {
        let ggContent;
        if (this.state.isGoogleLoggedIn) {
            ggContent = (
              <div style={this.divStyle}>
                <p>imageUrl: {this.state.googlrImageUrl} </p>
                <p>Email: {this.state.username}</p>
                {/* <Info /> */}
              </div>
            )
        } else {
            ggContent = (
                <div>
                <GoogleLogin
                    clientId={REACT_APP_Google_ID}
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />,
                </div>
            );
        }
        let fbContent;        
        if (this.state.isFacebookLoggedIn) {
            fbContent = (
                <div style={this.divStyle}>
                <p>Facebook Name: {this.state.username} </p>
                </div>
            )
        } else {
            fbContent = (
                <div>
                <FacebookLogin
                    appId={REACT_APP_Facebook_ID}
                    fields="name,email,picture"
                    callback={this.responseFacebook} 
                />
                </div>
            );
        }
       // </div>
       const googleInfo={
           if(isGoogleLoggedIn){
               <Info {...responseGoogle.data}/>
           }
       }
       const facebookInfo={
            if(isFacebookLoggedIn){
                <Info {...responseFacebook.data}/>
            }
        }
        return (
            <div>
                {ggContent}
                {googleInfo}
                {fbContent}
                {facebookInfo}
                {/* <Info storeState={storeState}/> */}
            </div>  
            
        )
    }
}
