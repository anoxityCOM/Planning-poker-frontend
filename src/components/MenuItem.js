require('styles/Menu.css');

import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

class MenuItemComponent extends React.Component {

  static propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  };

  render() {
    return (
      <Link to={`${this.props.link}`} className="nav-link">
        {this.props.text}
      </Link>
    );
  }
}

export default MenuItemComponent;
