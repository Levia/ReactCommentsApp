import React, { Component } from 'react';

var FontAwesome = require('react-fontawesome');

class WindowHeader extends Component {
  render() {
    return(
      <div className='window-header'>
        <div className='header-content'>
          <div className='username'>
            <span>Ferdinando Primerano</span>
          </div>
          <div className='status'>
            <span className='icon'>
              <FontAwesome name='circle'/>
            </span>
            <span className='status-text'>ONLINE</span>
          </div>
          <div className='comments-icon'>
            <FontAwesome name='commenting-o'/>
          </div>
        </div>
      </div>
    )
  }
}

export default WindowHeader;
