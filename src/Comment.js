import React, { Component } from 'react';

import './Comment.css';

import vivi from './vivi.jpg';
import mint from './mintlabs.jpg';

class Comment extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      profile: this.props.profile,
      username: this.props.username,
      text: this.props.text,
      time: this.props.time
    }
  }

  render() {
    var profiles = {
      'vivi': vivi,
      'mint': mint
    }
    return(
      <div className='comment'>
        <div className='comment-profile'>
          <img src={profiles[this.state.profile]} />
        </div>
        <div className='comment-content'>
          <div className='comment-username'>
            <div className='username'>{ this.state.username }</div>
            <div className='timestamp'>{ this.state.time }</div>
          </div>
          <div className='comment-text'>
            { this.state.text }
          </div>
        </div>
      </div>
    )
  }
}

export default Comment;
