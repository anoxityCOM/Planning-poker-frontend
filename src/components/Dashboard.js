require('styles/Menu.css');

import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DashboardMain from './DashboardMain';


class DashboardComponent extends React.Component {

  render() {
    return (
      <div id="dashboard">
        <Route path="/dashboard" exact={true} component={DashboardMain} />
      </div>
  );
  }
}

export default DashboardComponent;
