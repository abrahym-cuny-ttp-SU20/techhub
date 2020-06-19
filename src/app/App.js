import React, {Component} from 'react';
import './App.css';
import RoutesContainer from "../components/routes/RoutesContainer";
import { NavBar } from "../components/containers";

class App extends Component {
  render() {
    return (
      <div className="App">
      	<NavBar />

        <div className="App-header">
          <RoutesContainer />
        </div>

      </div>
    );
  }  
}

export default App;
