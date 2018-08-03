import React, { Component } from 'react';
import {Grid} from "react-bootstrap"
import Name from "./components/Name"
import Navbutton from "./components/Navbutton"
import About from "./components/About"
import Projects from "./components/Projects"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isHide: true,
      isGone: true
    }
  }
  toggleHidden() {
    this.setState({
      isHide: !this.state.isHide
    })
  }
  toggleGone(){
    this.setState({
      isGone: !this.state.isGone
    })
  }

  render() {
    return (
      <div className="App">

        <Navbutton />
        <Name />
        <Grid>
        <div className="divider"></div>
        <button className="about" onClick={this.toggleHidden.bind(this)}><i className="fas fa-plus"> </i> About </button>
        {!this.state.isHide && <About />}
        <div className="divider"></div>
        </Grid>
        <Grid>
        <button className="projectsection" onClick={this.toggleHidden.bind(this)}><i className="fas fa-plus"> </i> Projects </button>
        {!this.state.isHide && <Projects />}
        <div className="divider"></div>
        </Grid>

      </div>
    );
  }
}

export default App;
