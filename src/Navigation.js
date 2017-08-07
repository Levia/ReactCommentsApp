import React, { Component } from 'react';
import profile from './vivi.jpg'

var FontAwesome = require('react-fontawesome');

class Navigation extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      elements: this.props.elements
    }
  }

  render() {
    return(
      <ul>
        {
          this.props.elements.map(function(element) {
            if(element === 'profile') {
              return <li key={element} className="profile"><img src={profile} alt="profile"></img></li>
            }
            else {
              return <li key={element} className={element}><FontAwesome name={element} /></li>
            }
          })
        }
      </ul>
    )
  }
}

export default Navigation;
