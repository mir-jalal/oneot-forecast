import React, {Component} from "react";
import {Badge, ListGroup} from "react-bootstrap";

class Place extends Component{
    constructor(props) {
        super(props);

        this.state = {
            place: this.props.place
        };
    }

    render() {
        const {place} = this.state

        return(
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start list-group-item"
                >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{place.name}</div>
                    {place.phenomenon}
                </div>
                <Badge variant="primary" pill>
                    {place.tempMin} / {place.tempMax}
                </Badge>
            </ListGroup.Item>
        )
    }
}

export default Place;