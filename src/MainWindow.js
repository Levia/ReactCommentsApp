import React, { Component } from 'react';

import './MainWindow.css';
import './WindowHeader.css';
import './WindowFooter.css';
import './CommentsContainer.css';

import WindowHeader from './WindowHeader';
import WindowFooter from './WindowFooter';
import CommentsContainer from './CommentsContainer';
import Comment from './Comment';

import $ from 'jquery';

class MainWindow extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      comments: this.getComments()
    }

    this.addComment = this.addComment.bind(this);
  }

  render() {
    return(
      <div className="main-window">
        <WindowHeader />
        <CommentsContainer comments={this.state.comments} />
        <WindowFooter addComment={this.addComment} />
      </div>
    )
  }

  addComment() {
    var comments = this.state.comments;
    var currentDate = new Date();
    var new_comment = {
      profile: 'vivi',
      username: 'Ferdinando Primerano',
      text: $('#new_comment').val(),
      time: currentDate.getHours() + '.' + currentDate.getMinutes()
    }
    comments.push(new_comment)
    this.setState({
      comments: comments
    })
  }

  getComments() {
    return [
      {
        profile: 'vivi',
        username: 'Ferdinando Primerano',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        time: '14.43'
      },
      {
        profile: 'mint',
        username: 'Mint Labs',
        text: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        time: '14.40'
      },
      {
        profile: 'vivi',
        username: 'Ferdinando Primerano',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        time: '14.43'
      },
      {
        profile: 'mint',
        username: 'Mint Labs',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        time: '14.45'
      }
    ]
  }
}

export default MainWindow;
