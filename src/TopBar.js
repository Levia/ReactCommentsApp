import React, { Component } from 'react';

var FontAwesome = require('react-fontawesome');

class TopBar extends Component {
  render() {
    return(
        <div className="top-bar">
          <FontAwesome name="users" />
        </div>
    )
  }
}

export default TopBar;
