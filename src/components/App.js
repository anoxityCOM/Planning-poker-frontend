import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import MenuLanding from './MenuLanding';
import MenuDashboard from './MenuDashboard';
import Landing from './Landing';
import Dashboard from './Dashboard';


class AppComponent extends React.Component {
  render() {
    return (
      <Router>
        <div id="main">
          <Route path="/:menu(|how|pricing|register|login)" component={MenuLanding}/>
          <Route path="/:menu(|how|pricing|register|login)" component={Landing}/>
          <Route path="/dashboard/" component={MenuDashboard}/>
          <Route path="/dashboard/" component={Dashboard}/>
        </div>
      </Router>
    );
  }
}

export default AppComponent;
