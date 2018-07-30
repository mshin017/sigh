import React, { Component } from 'react';
import Name from "./components/Name"
import Navbutton from "./components/Navbutton"
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Navbutton />
        <Name />
      </div>
    );
  }
}

export default App;
