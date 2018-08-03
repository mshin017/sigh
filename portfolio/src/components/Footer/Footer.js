import React, { Component } from "react"
import "./Footer.css"

export default class Footer extends Component {
    constructor() {
        super()
        this.state = {
            isHidden: true
        }
    }
    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    toggleHiddenPhone() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        return (
            <footer>
                <div className="icons">
                    <button onClick={this.toggleHidden.bind(this)}><i className="fas fa-address-card fa-3x socialmedia"></i> </button> 
                    <a href="https://www.linkedin.com/in/michelle-shin-42821a162/" className="socialmedia" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin fa-3x"></i></a>
                    <a href="https://github.com/mshin017" className="socialmedia" rel="noopener noreferrer" target="_blank"><i class="fab fa-github fa-3x"></i></a>
                </div>
                <p>{!this.state.isHidden && "MSHIN830@GMAIL.COM"}</p>
                <p>{!this.state.isHidden && "714) 833 - 9972"}</p>
                
            </footer>
        )
    }
}