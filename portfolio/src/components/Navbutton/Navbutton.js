import React, { Component } from "react"
import Sidebar from 'react-sidebar';
// import MaterialTitlePanel from '../MaterialTitlePanel';
// import PropTypes from 'prop-types';
import "./Nav.css"

const styles = {
    sidebar: {
        width: 200,
        height: '100%',
        background: 'white'
    },
    sidebarLink: {
        display: 'block',
        padding: '15px',
        color: '#757575',
        textDecoration: 'none',
    },
    divider: {
        margin: '8px 0',
        height: 1,
        backgroundColor: '#757575',
    },
    content: {
        padding: '16px',
        height: '100%',
        backgroundColor: 'white',
    },
};



export default class Navbutton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }


    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
    }

    render() {
        return (
            <div>
               <Sidebar
                    sidebar={<p className="top">Menu</p>}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={styles}
                    touchHandleWidth={20}
                    sidebarLink={<b>About</b>}
                >
                    <button className="menu" onClick={() => this.onSetSidebarOpen(true)} ><i class="fas fa-bars fa-2x"></i></button>
                </Sidebar>
            </div >
        )
    }

}