import React, {Component} from "react";
import {Badge, ListGroup} from "react-bootstrap";

class Wind extends Component{
    constructor(props) {
        super(props);

        this.state = {
            wind: this.props.wind
        };
    }

    render() {
        const {wind} = this.state

        return(
            <ListGroup.Item
                variant={"primary"}
                as="li"
                className="d-flex justify-content-between align-items-start list-group-item"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{wind.name}</div>
                    {wind.direction}
                </div>
                <Badge variant={"info"} pill>
                    {wind.speedMin} / {wind.speedMax}
                </Badge>
            </ListGroup.Item>
        )
    }
}

export default Wind;