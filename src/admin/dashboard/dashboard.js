import React, { Component, Suspense } from 'react';
import './dashboard.css'
import HeaderBar from './HeaderBar';
const SideNavComponent = React.lazy(() => import('./SideNav'));
const DashbaordRouteComponent = React.lazy(() => import('./DashboardRoute'));


class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            vadhakam: 'mixing '
        };
    }

    changeMixing = () => {
        this.setState({
            vadhakam: 'na na na na na na'
        }, () => {
            console.log(this.state.vadhakam);
        });
    }

    render() {
        return (
            <div className="main-container">
                <HeaderBar />
                <div className="middle-container">
                    <Suspense fallback={<div>Loading SideNav...</div>}>
                        <SideNavComponent />
                    </Suspense>
                    {/* <SideNav/> */}

                    <div className="detail-info-container">
                        {
                            this.state.vadhakam
                        }
                        <button onClick={this.changeMixing}>Change mixing</button>
                        <Suspense fallback={<div>Loading Dashboard Content....</div>}>
                            <DashbaordRouteComponent match={this.props.match} />
                        </Suspense>
                        {/* <DashboardRoute match={this.props.match} /> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard; 
