import React, { Component } from 'react';
import './App.css';
import './TopBar.css';
import './Navigation.css';
import TopBar from './TopBar';

class App extends Component {
  render() {
    return(
      <div className="App">
        <TopBar/>
        <div className="upper-body"></div>
        <div className="lower-body"></div>
      </div>
    )
  }
}

export default App;
