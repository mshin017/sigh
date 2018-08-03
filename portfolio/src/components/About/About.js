import React, { Component } from "react"
import { Grid, Row, Col } from "react-bootstrap"
import Me from "../images/me.png"
import "./About.css"

export default class About extends Component {
    constructor(){
        super()
        this.state={
          isHide: true
        }
      }
      toggleHidden(){
        this.setState({
          isHide: !this.state.isHide
        })
      }
    render() {
        return (
            <div>
                <Grid className="center">
                    <Row>
                        <Col md="1" className="md2" />
                        <Col md="4" className="aboutme">
                            <img className="mepic" src={Me} alt="me" />
                        </Col>
                        <Col md="6" className="writing">
                            <h1>Hi!</h1>
                            <p> I'm Michelle Shin, a fullstack web developer based in Southern California.</p>
                            <p className="indent2"> I am a graduate from University of California, Irvine (UCI) Continuing Education Program full-stack program. 
                            I have enjoyed and excelled throughout this intensive program because, in my opinion, coding is just like solving a problem. By piecing the puzzles together 
                            in a specific order, you get your desired output. But, definitely easier said than done! Throughout this program, I was the Lead Developer for all the 
                            group projects, which consisted of facilitating group brainstorms, assisting in academic support, maintaining workflow, and fulfilling deadlines.</p>
                            <p className="indent2"> I take pride in my work, however, I am aware that coding is not confined to the skills that I know. 
                            Thus, I am constantly seek to improve my skills and grow as a developer. Please feel free to <a href="/">contact</a> me if you are interested in collobrating or hiring!!  </p>
                            <h3>What do I do? </h3>
                            <Row>
                                <Col md="6" className="web">
                                    <h4><i class="fas fa-pen-fancy fa-lg indent"></i> Web Design </h4>
                                    <p className="indent2">Based on your desires, content, and target market, we can work together to find an engaging and appealing 'look' and 'feel' that exemplifies you or your company on your website. 
                                    I personally enjoy the minimalistic look but feel free to check out my <a href="/">portfolio</a> for more designs!</p>
                                </Col>
                                <Col md="6" className="web">
                                    <h4><i class="fas fa-code fa-lg indent"></i> Web Development</h4>
                                    <p className="indent2">As well as design, I can create responsive websites to bring your website to a dynamic level, which is more captivating for users. Check out my <a href="/">skills</a> as well!</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="1" className="md2" />
                    </Row>
                </Grid>
            </div>
        )
    }
}