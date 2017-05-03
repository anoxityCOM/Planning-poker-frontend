require('styles/Menu.css');

import React, { PropTypes } from 'react';
import Menu from './Menu';
import MenuItem from './MenuItem';

class MenuLandingComponent extends React.Component {

  render() {
    return (
      <Menu>
        <MenuItem link="/how" text="How it works"/>
        <MenuItem link="/pricing" text="Pricing"/>
        <MenuItem link="/register" text="Register"/>
        <MenuItem link="/login" text="Login"/>
      </Menu>
    );
  }
}

export default MenuLandingComponent;
