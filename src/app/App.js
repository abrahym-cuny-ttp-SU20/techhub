import React, {Component} from 'react';
import './App.css';
import RoutesContainer from "../components/routes/RoutesContainer";
import { NavBar} from "../components/containers";

class App extends Component {
  render() {
    return (
      <div className="App">
      	<NavBar />

        <header className="App-header">
          <RoutesContainer />
        </header>
      </div>
    );
  }  
}

export default App;
