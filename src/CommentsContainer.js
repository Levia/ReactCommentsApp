import React, { Component } from 'react';

import Comment from './Comment.js';

class CommentsContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      comments: props.comments
    }
  }

  render() {
    return(
      <div className="comments-container">
        <div className='date'>7 August 2017</div>
        { this.loadComments() }
      </div>
    )
  }

  loadComments() {
    var comments = this.state.comments;
    var comment_elements = []
    comments.map(function(comment, index) {
      comment_elements.push(
        <Comment
          key={index}
          profile={comment.profile}
          username={comment.username}
          text={comment.text}
          time={comment.time}
        />
      )
    });
    return comment_elements;
  }

}

export default CommentsContainer;
