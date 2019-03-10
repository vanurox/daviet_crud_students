import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideNav extends Component {
    render() {
        return (
            <div className="side-nav">
                <ul>
                    <li>
                        <Link to="/admin">
                            <div> Dashboard</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/user">
                            <div> Users</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/order">
                            <div> Orders</div>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SideNav;