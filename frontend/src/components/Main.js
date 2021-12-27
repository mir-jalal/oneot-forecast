import React, {Component} from "react";
import {Accordion, Col, Container, Row} from "react-bootstrap";
import Forecast from "./Forecast";
import GeneralInfo from "./GeneralInfo";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        };
    }

    componentDidMount(){
        fetch('http://localhost:8080',
            {method: 'GET',
                headers: { 'Content-Type': 'application/json' }})
            .then(response => response.json())
            .then(data => {
                this.setState({data: data})
            })
            .catch(error => this.setState({data: error}))
        ;

    }


    render(){
        const {data} = this.state

        if(data) {
            let count = 0;
            return (
                <Container>
                    <GeneralInfo day={data[0].day} night={data[0].night}/>
                    <Row>
                        <Col>
                            <Accordion defaultActiveKey="0">
                            {data.map(forecast =>
                                <Forecast key={count} count={count++} forecast={forecast} />
                            )}
                        </Accordion>
                        </Col>
                    </Row>
                </Container>
            )
        }
        else return(<Container>
            <Row>
                <Col>
                    null
                </Col>
            </Row>
        </Container>)
    }
}

export default Main;