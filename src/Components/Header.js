import React from 'react';
import '../css/Header.css';
import logo from '../img/b-icon.png';

class Header extends React.Component {
  render() {
    return (
      <div id="nav" className="container-fluid">
        <div className="container nav_container">
          <nav>
            <ul className="nav_ul">
              <li className="nav_li nav_left">
                <a className="nav_logo" href="#"><img src={logo} alt="logo"/></a>
              </li>
              <li className="nav_li nav_right"><a className="nav_a active" href="#">Home</a></li>
              <li className="nav_li nav_right"><a className="nav_a" href="#">Products</a></li>
              <li className="nav_li nav_right"><a className="nav_a" href="#">Demo</a></li>
              <li className="nav_li nav_right"><a className="nav_a" href="#">Resources</a></li>
              <li className="nav_li nav_right"><a className="nav_a" href="#">Sign in</a></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
