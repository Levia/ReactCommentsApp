import React, { Component } from 'react';

import './MainWindow.css';
import './WindowHeader.css';
import './WindowFooter.css';
import './CommentsContainer.css';

import WindowHeader from './WindowHeader';
import WindowFooter from './WindowFooter';
import CommentsContainer from './CommentsContainer';

class MainWindow extends Component {
  render() {
    return(
      <div className="main-window">
        <WindowHeader />
        <CommentsContainer />
        <WindowFooter />
      </div>
    )
  }
}

export default MainWindow;
