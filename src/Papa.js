import React, { Component } from 'react';
import Bacha from './Bacha';


class Papa extends Component {
    constructor() {
        super();
        this.state = {
            property: 'Ghar'
        };
    }

    changeProperty = () => {
        this.setState({
            property: 'Haveli'
        });
    }
    render() {
        return (
            <div>
                <Bacha property={this.state.property} />
                <button onClick={this.changeProperty}>Change Property</button>
            </div>
        );
    }
}

export default Papa;