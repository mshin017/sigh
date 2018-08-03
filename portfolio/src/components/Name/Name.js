import React, { Component } from "react"
import { Grid, Row, Col } from "react-bootstrap"
import Footer from "../Footer"
import "./Name.css"

const firstName = "MICHELLE".split('')
const firstdisplay = firstName.map(firstName => {
    return firstName + " "
})
const lastName = "SHIN".split('')
const lastdisplay = lastName.map(lastName => {
    return lastName + " "
})

export default class Name extends Component {
    render() {
        return (
            <Grid className="center">
                <Row className="break">
                    <Col md="3" className="col" />
                    <Col md="6" className="col">
                        <div className="barTop" />
                        <div className="name">
                            {firstdisplay}
                        </div>
                        <div className="name">
                            {lastdisplay}
                        </div>
                        <p>FULL STACK WEB DEVELOPER</p>
                        <div className="barBottom" />
                    </Col>
                    <Col md="3" className="col" />
                </Row>
                <Footer/>
            </Grid>
        )
    }
}