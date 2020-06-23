import React from "react";
// import PopoverContent from 'react-bootstrap/PopoverContent';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import PopoverTitle from 'react-bootstrap/PopoverTitle';
import Container from 'react-bootstrap/Container';
import Popover from 'react-bootstrap/Popover';
import GoogleLogin from 'react-google-login';
import Button from 'react-bootstrap/Button';
import Media from 'react-bootstrap/Media';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Info from './ProfileInfo';

require('dotenv').config();

export default function Profile() {
    let topBackgroundImage="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80";
    let profileImage="https://us.123rf.com/450wm/sam74100/sam741001503/sam74100150300102/38081248-portrait-of-a-young-african-american-business-woman-black-people.jpg?ver=6";
    let headerStyle ={
        backgroundImage: `url(${topBackgroundImage})`,
        backgroundSize: "100% 100%",
        backgroundHeight:'200%'
    }
    let profileImageStyle={
        borderRadius: '100%',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
    let mediaStyle={
        display: 'flex',  
        justifyContent:'center', 
        alignItems:'center',
        textAlign: 'center',
        backgroundColor: 'rgb(0,255,255,0.3)'
    }
    // let socialResultStyle={
    //     display: 'flex',  
    //     justifyContent:'center', 
    //     alignItems:'center',
    //     textAlign: 'center',
    //     backgroundColor: 'rgb(0,255,255,0.3)'
    // }
    let googleButtonStyle={
        borderRadius: '100%',
        fontSize: '6px'
    }
    const de =(console.log('k'))
    const addPopover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Select Social</Popover.Title>
          <Popover.Content>
              <div>
                <GoogleLogin
                    style={googleButtonStyle}
                    clientId={process.env.REACT_APP_Google_ID}
                    buttonText="Google"
                    onSuccess={de}
                    onFailure={de}
                    cookiePolicy={'single_host_origin'}
                />
              </div>
            
              <Button variant="outline-primary">Facebook</Button>
           
              <Button variant="outline-primary">Github</Button>
           
              <Button variant="outline-primary">Instagram</Button>
    
          </Popover.Content>
        </Popover>
      );
    
    return (
        <div>
        <Container fluid="md" style={headerStyle}>
            <Row>
                <Col>This is the header</Col>
            </Row>        
            <Row>
                <Col>This is the header</Col>
            </Row> 
            <Row>
                <Col>This is the header</Col>
            </Row> 
            <Row>
                <Col>This is the header</Col>
            </Row> 
            <Row>
                <Col>This is the header</Col>
            </Row> 
            <Row>
                <Col>This is the header</Col>
            </Row> 
            <Row>
                <Col>This is the header</Col>
            </Row> 
        </Container>,
        <Container fluid="md" style={mediaStyle}>
            
            <Row >
                <Col >
                    <div>
                        <img
                            width={190}
                            height={190}
                            className="ml-3"
                            src={profileImage} 
                            alt="Generic placeholder"
                            style={profileImageStyle}
                        />
                    </div>
                    <Media>                        
                        <Media.Body>
                            <h5 >Socials</h5>
                            <Info />
                            <Container>
                                <div>

                                </div>
                                <Row>
                                    <Col>
                                    <OverlayTrigger trigger="click" placement="top" overlay={addPopover}>
                                        <Button variant="outline-primary">Add Socials + </Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger trigger="click" placement="top" overlay={addPopover}>
                                        <Button variant="outline-primary">Remove Socials + </Button>
                                    </OverlayTrigger>
                                    </Col>
                                </Row>
                            </Container>
                        </Media.Body>
                    </Media>
                </Col>
            </Row>
        </Container>       
        </div>
      
    );
    
  }

//-----------------------------------Ignore Everything pass this point------------------------------

//   <div className="oauth" style={divButtonStyle}>
                   
                    {/* <div className="google-auth" style={divButtonStyle}>
                    <GoogleLogin
                        clientId={process.env.REACT_APP_Google_ID}
                        render={renderProps => (
                        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
                        )}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    </div> */}
                    {/* <div className="instagram-auth" style={divButtonStyle}>
                        <InstagramLogin
                            clientId="process.env.Instagram_ID"
                            buttonText="Instagram"
                            onSuccess={responseInstagram}
                            onFailure={responseInstagram}
                            //cssClass={divButtonStyle}
                        />
                    </div> */}
                    {/* <button>jvjv</button>
                    <div className="facebook-auth" style={divButtonStyle}>
                        <FacebookLogin
                            appId={process.env.Facebook_ID}
                            //autoLoad={true}
                            //fields="name,email,picture"
                            // onClick={componentClicked}
                            callback={responseFacebook} 
                            //cssClass={divButtonStyle}
                        />
                    </div> */}
                    {/* <div className="facebook-auth" style={divButtonStyle}></div>
                    <FacebookLogin
                        appId={process.env.Facebook_ID}
                        //autoLoad
                        callback={responseFacebook}
                        render={renderProps => (
                            <button onClick={renderProps.onClick}>This is my custom FB button</button>
                        )}
                    />
                    </div> */}
                    {/* <div className="github-auth" style={divButtonStyle}>
                        <GitHubLogin 
                            clientId="process.env.Github_ID"
                            onSuccess={responseGithub}
                            //onFailure={responseGithub}
                        />
                    </div> */}
               // </div> 

                // let state={
    //     isGoogleLoggedIn:false,
    //     googleEmail:'',
    //     googleId:'',
    //     googleName:'',
    //     isFacebookLoggedIn:'',
    //     facebookName:'',
    //     facebookUsername:'',
    //     facebookUserID:''
    // }

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