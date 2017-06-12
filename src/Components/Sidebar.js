import React from 'react';
import '../css/Sidebar.css';

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <aside className="sidebar_aside">
          <div className="Sidebar_button_container">
            <ButtonComponent>Latest</ButtonComponent>
            <ButtonComponent>Categories</ButtonComponent>
          </div>
          <ul className="sidebar_ul">
            <li className="sidebar_li"><a className="sidebar_a" href="#"></a></li>
            <li className="sidebar_li"><a className="sidebar_a" href="#">One</a></li>
            <li className="sidebar_li"><a className="sidebar_a" href="#">One</a></li>
            <li className="sidebar_li"><a className="sidebar_a" href="#">One</a></li>
            <li className="sidebar_li"><a className="sidebar_a" href="#">One</a></li>
          </ul>
        </aside>
      </div>
    )
  }
}

const ButtonComponent = (props) => <button>{props.children}</button> //Stateless function component

export default Sidebar
