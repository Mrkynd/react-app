import React from 'react';
import '../css/Footer.css';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      footer: (function () {
        let text;
        for (let i = 0; i <= 500; i++) {
          text += "The number is " + i;
        }
        return text;
      })() //anonymous function wrapped in closure to execute
    }
  }
  render() {
    return (
      <div className="footer_container">{this.state.footer}</div>
    )
  }
}

export default Footer
