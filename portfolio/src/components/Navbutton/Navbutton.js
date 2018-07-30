import React, { Component } from "react"
import Sidebar from 'react-sidebar';
import "./Nav.css"

export default class Navbutton extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: false,
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }
    
      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }
    render() {
        return (
            <div>
                <Sidebar
                    sidebar={<b>Menu</b>}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: { background: "white" } }}
                    touchHandleWidth= {20}
                >
                    <button className="menu" onClick={() => this.onSetSidebarOpen(true)} ><i class="fas fa-bars fa-2x"></i></button>
                </Sidebar>
            </div >
        )
    }
}