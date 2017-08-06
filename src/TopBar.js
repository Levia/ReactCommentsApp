import React, { Component } from 'react';

import Navigation from './Navigation';

class TopBar extends Component {
  render() {
    var leftNavigation = ['users', 'bars', 'search'];
    var rightNavigation = ['calendar-check-o', 'envelope-o', 'profile'];
    return(
        <div className="top-bar">
          <div className='navigation'>
            <Navigation elements={leftNavigation} position='left'/>
            <Navigation elements={rightNavigation} position='right'/>
          </div>
        </div>
    )
  }
}

export default TopBar;
