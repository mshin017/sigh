import React, { Component } from "react"
import { Grid, Row, Col } from "react-bootstrap"
import "./Name.css"


const copy = "MICHELLE SHIN".split('')
const display = copy.map(copy => {
    return copy + " "
})

export default class Name extends Component {
    render() {
        return (
            <Grid>
                <Row className="break">
                    <Col md="3" className="col" />
                    <Col md="6" className="col">
                        <div className="barTop" />
                        <div className="name">
                            {display}
                        </div>
                        <div className="barBottom" />
                    </Col>
                    <Col md="3" className="col" />
                </Row>
            </Grid>
        )
    }
}