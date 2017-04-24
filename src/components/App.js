import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Menu from './Menu';
import MenuItem from './MenuItem';


class AppComponent extends React.Component {
  render() {
    return (
      <Router>
        <div id="main">
          <Menu>
            <MenuItem link="Test1" text="Test1" />
            <MenuItem link="Test2" text="Test2" />
            <MenuItem link="Test3" text="Test3" />
          </Menu>
          <Route path="/:menu" render={({match}) => (<h2>{match.params.menu}</h2>)}/>
        </div>
      </Router>
    );
  }
}

export default AppComponent;
