import React, { Component } from 'react';

import Comment from './Comment.js';

class CommentsContainer extends Component {
  render() {
    return(
      <div className="comments-container">
        <div className='date'>7 August 2017</div>
        { this.loadComments() }
      </div>
    )
  }

  loadComments() {
    var comments = this.getComments();
    var comment_elements = []
    Object.keys(comments).forEach(function(key) {
      var comment = comments[key];
      comment_elements.push(
        <Comment
          key={key}
          profile={comment.profile}
          username={comment.username}
          text={comment.text}
          time={comment.time}
        />
      )
    });
    return comment_elements;
  }

  getComments() {
    return {
      0: {
        profile: 'vivi',
        username: 'Ferdinando',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        time: '14.43'
      },
      1: {
        profile: 'mint',
        username: 'Mint Labs',
        text: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        time: '14.40'
      },
      2: {
        profile: 'vivi',
        username: 'Ferdinando',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        time: '14.43'
      },
      3: {
        profile: 'mint',
        username: 'Mint Labs',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        time: '14.45'
      }
    }
  }
}

export default CommentsContainer;
