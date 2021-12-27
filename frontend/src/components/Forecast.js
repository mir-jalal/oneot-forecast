import React, {Component} from "react";
import {Accordion, Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import Place from "./Place";
import Wind from "./Wind";

class Forecast extends Component {
    constructor(props) {
        super(props);

        this.state = {
            forecast: this.props.forecast,
            count: this.props.count
        };
    }

    render() {
        const {forecast, count} = this.state
        return(
            <Accordion.Item eventKey={count}>
                <Accordion.Header>{forecast.date} ☀️Day: {forecast.day.tempMin} / {forecast.day.tempMax} 🌑 Night: {forecast.night.tempMin} / {forecast.night.tempMax} </Accordion.Header>
                <Accordion.Body>
                        <Row>
                            <Col className={"info"} xs={6}>
                                <Card bg={"light"} text={"dark"}>
                                    <Card.Header>
                                        Daytime
                                    </Card.Header>
                                    <Card.Body className={"font-size"}>
                                        {count === 0 ? "" : (forecast.day.text)}
                                        <ListGroup as="ol">
                                            {forecast.day.peipsi ? <ListGroup.Item as="li">Peipsi: {forecast.day.peipsi}</ListGroup.Item> : ""}
                                            {forecast.day.place.map(
                                                place => <Place place={place}/>
                                            )}
                                        </ListGroup>
                                    </Card.Body>
                                    <Card.Footer className={"font-size"}>
                                        <ListGroup as="ol">
                                            {forecast.day.wind.map(
                                                wind => <Wind wind={wind}/>
                                            )}
                                        </ListGroup>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col className={"info"} xs={6}>
                                <Card  bg={"secondary"} text={"white"}>
                                    <Card.Header>
                                        Nighttime
                                    </Card.Header>
                                    <Card.Body className={"font-size"}>
                                        {count === 0 ? "" : (forecast.night.text)}
                                        <ListGroup as="ol">
                                        {forecast.night.peipsi ? <ListGroup.Item as="li">Peipsi: {forecast.night.peipsi}</ListGroup.Item> : ""}
                                        {forecast.night.place.map(
                                            place => <Place place={place}/>
                                        )}
                                        </ListGroup>
                                    </Card.Body>
                                    <Card.Footer className={"font-size"}>
                                        <ListGroup as="ol">
                                            {forecast.night.wind.map(
                                                wind => <Wind wind={wind}/>
                                            )}
                                        </ListGroup>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                </Accordion.Body>
            </Accordion.Item>
        )
    }
}
export default Forecast;