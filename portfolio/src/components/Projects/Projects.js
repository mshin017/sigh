import React, { Component } from "react"
import { Grid, Row, Col } from "react-bootstrap"
import jamm from "../images/jamm.png"
import pistachio from "../images/pistachio.png"
import redpandas from "../images/redpandas.png"
// import zoo from '../images/gifzoo.png'
import "./Projects.css"

export default class Projects extends Component {
    render() {
        return (
            <div>
                <Grid className="center">
                    <Row>
                        <Col md="1" />
                        <Col md="3" className="stuff indent3">
                            <a href="https://math4pets.herokuapp.com/"  target="_blank" rel="noopener noreferrer"><img src={jamm} alt="jammproject"  className="projectpics"/></a>
                        </Col>
                        <Col md="3" className="stuff">
                        <a href="https://pistachio-1.github.io/pistachio/"  target="_blank" rel="noopener noreferrer"><img src={pistachio} alt="pistachioproject" className="projectpics"/></a>
                        </Col>
                        <Col md="3" className="stuff">
                        <a href="/"  target="_blank"><img src={redpandas} alt="redpandaproject" className="projectpics"/></a>
                        </Col>
                        <Col md="1" />
                    </Row>
                </Grid>

            </div>
        )
    }
}