import React, { Component } from 'react';
import './App.css';

import VideoBox from './components/VideoBox';
import ChatBox from './components/ChatBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App2">
          <VideoBox />
          <ChatBox />
        </div>
      </div>
    );
  }
}

export default App;
