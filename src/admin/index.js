import React, { Component } from 'react';
import Dashboard from './dashboard';
import Login from './authentication/Login';
import cookies from 'react-cookies';

class Index extends Component {

    renderPage = () => {
        if(cookies.load('access_token') === undefined){
            return (
                <Login/>
            );
        } else {
            return (
                <Dashboard />
            );
        }
    }
    render(){
        return(
            <div>
                {this.renderPage()}
            </div>
        );
    }
}

export default Index;