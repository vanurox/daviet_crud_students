import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import User from './User';
import Order from './Order';
import NoComponent from './NoComponent';
import DashboardInfo from './DashboardInfo';


class DashboardRoute extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={this.props.match.url} component={DashboardInfo} />
                <Route path={this.props.match.url + '/user'} component={User} />
                <Route path={this.props.match.url + "/order"} component={Order} />
                <Route component={NoComponent} />
            </Switch>
        );
    }
}

export default DashboardRoute;
