import React, { Component } from 'react';
import './App.css';
import './TopBar.css';
import './Navigation.css';
import TopBar from './TopBar';
import MainWindow from './MainWindow';

class App extends Component {
  render() {
    return(
      <div className="App">
        <TopBar/>
        <div className="upper-body"></div>
        <div className="lower-body"></div>
        <MainWindow />
      </div>
    )
  }
}

export default App;
