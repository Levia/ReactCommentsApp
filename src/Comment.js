import React, { Component } from 'react';

import './Comment.css';

import vivi from './vivi.jpg';
import mint from './mintlabs.jpg';

import FontAwesome from 'react-fontawesome';

import $ from 'jquery';

class Comment extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      id: this.props.id,
      profile: this.props.profile,
      username: this.props.username,
      text: this.props.text,
      timestamp: this.props.timestamp,
      time: this.props.time,
      edited: false
    }
    this.editComment = this.editComment.bind(this);
    var that = this;
    $(document).on('click', '.'+this.props.id+' .fa-check', function(e) {
      e.preventDefault();
      var currentDate = new Date();
      that.setState({
        text: $('.editing').val(),
        edited: true
      });
    });
  }

  render() {
    var profiles = {
      'vivi': vivi,
      'mint': mint
    }
    var edit = null;
    if(this.canEdit()){
      edit = <a href='#!'><FontAwesome name='pencil' onClick={this.editComment}/></a>
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
          <div className='text-container'>
            <div className='comment-text'>
              <span className={this.state.id}>{ this.state.text }</span>
            </div>
            {edit}
          </div>
        </div>
      </div>
    )
  }

  canEdit() {
    var currentDate = new Date();
    var offset = 300000; /* 5 minutes in milliseconds */
    return this.state.timestamp + offset > currentDate.getTime()
  }

  editComment() {
    if(!(this.canEdit())) { return; }
    $('.text-container').find('.'+this.state.id).html(
      '<input tye="text" class="editing" value="'+this.state.text+'"/><a href="#!" class="fa fa-check"/>'
    )
  }
}

export default Comment;
