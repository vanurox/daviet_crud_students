import React, { Component } from 'react';

class Bacha extends Component {
    constructor(props){
        super(props);
        this.state = {
            property: this.props.property
        };
        console.log("bacha's constructor fired");
    }

    componentWillReceiveProps(props){
        if(props.property !== this.state.property){
            this.setState({
                property: props.property
            });
        }
    }
    render(){
        return (
            <div>
                Bache ko Mila :- 
                {
                    this.state.property
                }
            </div>           
        );
    }
}

export default Bacha;