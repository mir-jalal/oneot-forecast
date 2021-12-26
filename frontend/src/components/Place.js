import React, {Component} from "react";

class Place extends Component{
    constructor(props) {
        super(props);

        this.state = {
            message: null
        };
    }

    componentDidMount(){
        fetch('http://localhost:8080',
            {method: 'GET',
                headers: { 'Content-Type': 'application/json' }})
            .then(response => response.text())
            .then(data => {
                this.setState({message: data})
            })
            .catch(error => this.setState({message: error}))
        ;

    }

    render() {

        return(
            <div>
                <ul>
                    <li>{this.state.message}</li>
                </ul>
            </div>
        )
    }
}

export default Place;