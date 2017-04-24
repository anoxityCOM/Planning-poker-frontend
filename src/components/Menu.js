require('styles/Menu.css');

import React from 'react';

class MenuComponent extends React.Component {
  render() {

    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <div className="container">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">Navbar</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {
                (this.props.children.map(children => (
                  <li className="nav-item">
                    {children}
                  </li>
                )))
              }


            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default MenuComponent;
