import React from 'react';
import Header from './Header'
import '../css/Landing.css';
import hero from '../img/hero.png';

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: "Welcome to Azillabay"
    }
  }
  updateInput( e ) {
    console.log(e);
    this.setState({
      txt: e.target.value,
      word: ''
    })
  }
  render() {
    let stateTxt = this.state.txt
    return (
      <div>
        <Header />
        <div className="container">
          <div className="signup_container">
            <h1>{stateTxt}</h1>
            <input className="input" type="text" placeholder="sign up" onChange={this.updateInput.bind(this)}/>
            <Button>Sign Up</Button>
          </div>
        </div>
        <div className="hero_container">
          <img className="hero-image" src={hero} alt="I love React" />
        </div>
      </div>
    )
  }
}

const Button = (props) => <button className="signup_button">{props.children}</button>

Landing.propTypes = {
  txt: React.PropTypes.string.isRequired
}

Landing.defaultProps = {
  txt: "Welcome Home"
}

export default Landing
