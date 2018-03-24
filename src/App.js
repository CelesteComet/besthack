import React, { Component } from 'react';
import './App.css';

import VideoBox from './components/VideoBox';
import ChatBox from './components/ChatBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Header</header>
        <main>
          <VideoBox />
          <ChatBox />
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
