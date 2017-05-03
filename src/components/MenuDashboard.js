require('styles/Menu.css');

import React, { PropTypes } from 'react';
import Menu from './Menu';
import MenuItem from './MenuItem';

class MenuDashboardComponent extends React.Component {

  render() {
    return (
      <Menu>
        <MenuItem link="/dashboard" text="Dashboard"/>
        <MenuItem link="/dashboard/projects" text="Projects"/>
        <MenuItem link="/dashboard/teams" text="Teams"/>
        <MenuItem link="/dashboard/account" text="Account"/>
        <MenuItem link="/dashboard/logout" text="Logout"/>
      </Menu>
    );
  }
}

export default MenuDashboardComponent;
