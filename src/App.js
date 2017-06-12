import React from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './css/App.css';

import Landing from './Components/Landing';
import Whyus from './Components/Whyus';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="landing_container">
          <Landing />
        </div>
        <div className="whyus_container">
          <Whyus isInt={45}/>
        </div>
        <div className="content_container">
          <Sidebar />
          <Footer />
        </div>
      </div>
    )
  }
}
//
// App.propTypes = {
//   items: React.propTypes.string
// }

export default App
