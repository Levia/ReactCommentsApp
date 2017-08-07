import React, { Component } from 'react';

var FontAwesome = require('react-fontawesome');

class WindowFooter extends Component {
  render() {
    return(
      <div className='window-footer'>
        <div className='footer-content'>
          <div className='add-comment'>
            <FontAwesome name='reply-all' />
            <input type='text' placeholder='Start typing your message or drop file...'/>
          </div>
          <div className='footer-actions'>
            <a href='#'><FontAwesome name='paperclip' /></a>
            <a href='#' className='send-comment'>SEND</a>
          </div>
        </div>
      </div>
    )
  }
}

export default WindowFooter;
