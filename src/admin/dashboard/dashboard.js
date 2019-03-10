import React, { Component, Suspense } from 'react';
// import DashboardRoute from './DashboardRoute';
// import SideNav from './SideNav';
import './dashboard.css'
import HeaderBar from './HeaderBar';
const SideNavComponent = React.lazy(() => import('./SideNav'));
const DashbaordRouteComponent = React.lazy(() => import('./DashboardRoute'));


class Dashboard extends Component {
    render() {
        return (
            <div className="main-container">
                <HeaderBar />
                <div className="middle-container">
                    <Suspense fallback={<div>Loading SideNav...</div>}>
                        <SideNavComponent/>
                    </Suspense>
                    {/* <SideNav/> */}
                    <div className="detail-info-container">
                       <Suspense fallback={<div>Loading Dashboard Content....</div>}>
                            <DashbaordRouteComponent match={this.props.match}/>
                       </Suspense>
                        {/* <DashboardRoute match={this.props.match} /> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard; 
