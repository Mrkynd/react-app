import React from 'react';
import '../css/Whyus.css';
import hero from '../img/hero.png';

class Whyus extends React.Component {
  render() {
    return (
      <div className="container whyus_section">
        <div className="row">
          <div className="col-lg-4">
            <img className="why_us_img img-circle" src={hero} alt="why us" width="100" height="100"/>
            <h4 className="why_us_h4"><Words words="Russell Crowe"/></h4>
            <p className="why_us_p_tags">This is just some text to demonstrate this section</p>
            <p className="why_us_p_tags"><a className="btn btn-default" href="http://www.google.com" role="button">View Details</a></p>
          </div>
          <div className="col-lg-4">
            <img className="why_us_img img-circle" src={hero} alt="why us" width="100" height="100"/>
            <h4 className="why_us_h4"><Words words="Russell Crowe"/></h4>
            <p className="why_us_p_tags">This is just some text to demonstrate this section</p>
            <p className="why_us_p_tags"><a className="btn btn-default" href="http://www.google.com" role="button">View Details</a></p>
          </div>
          <div className="col-lg-4">
            <img className="why_us_img img-circle" src={hero} alt="why us" width="100" height="100"/>
            <h4 className="why_us_h4"><Words words="Russell Crowe"/></h4>
            <p className="why_us_p_tags">This is just some text to demonstrate this section</p>
            <p className="why_us_p_tags"><a className="btn btn-default" href="http://www.google.com" role="button">View Details</a></p>
          </div>
        </div>
      </div>
    )
  }
}

const Words = (props) => <h1>{props.words}</h1> //Validation for


//THIS IS AN EXAMPLE OF USING STATELESS COMPONENTS WITH CUSTOM Validation
//SINCE REACT DOESN'T DO MUCH MORE IN TERMS OF STATELESS COMPONENTS. FUCKING BIAS

Whyus.propTypes = {
  isInt: React.PropTypes.number.isRequired //Example of React inbuilt validation for class based components
}

Words.propTypes = {
  words(props, propName, component) {
    if(!(propName in props)) {
      console.log("You missed " + propName + " you fuck!");
      return new Error(`Missing "${propName}" in the "${component}" component.`)
    }
    if(props[propName] !== "Russell Crowe") {
      return new Error(`${propName} Password incorrect`)
    } else {
      console.log('Password ACCEPTED');
    }
  }
}

export default Whyus
