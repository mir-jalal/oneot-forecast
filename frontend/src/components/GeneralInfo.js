import React, {Component} from "react";
import {Accordion, Card, Col, ListGroup, Row} from "react-bootstrap";

class GeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            day: this.props.day,
            night: this.props.night
        };
    }

    render() {
        const {day, night} = this.state

        return (
            <Row >
                <Col className={"info"} xs={6}><Card bg={"light"} text={"dark"}>
                    <Card.Header>Daytime 🌞</Card.Header>
                    <Card.Body>{day.text}</Card.Body>
                </Card></Col>
                <Col className={"info"} xs={6}><Card bg={"secondary"} text={"white"}>
                    <Card.Header>Nighttime 🌚</Card.Header>
                    <Card.Body>{night.text}</Card.Body>
                </Card></Col>
            </ Row>
        )
    }
}

export default GeneralInfo;