import React, {Component} from 'react';
import './App.css';
// import RoutesContainer from "../components/routes/RoutesContainer";
//import { NavBar } from "../components/containers";
// import SignIn from '../components/views/LoginView';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ProfilePage from '../Backend_Socials/Profile/Profile';
import Login from '../components/views/LoginView'
class App extends Component {
  render() {
    return (
    //<div className="App">
      // 	{/* <NavBar /> */}

    //  <div className="App-header">
          // <RoutesContainer /> 
          // <SignIn />
        <div>
          <Login />
          {/* <ProfilePage /> */}
        </div>
      
      // </div>
    );
  }  
}

export default App;
