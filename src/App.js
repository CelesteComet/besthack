import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import Actions 
import { fetchSpeaker } from './frontend/actions/speakers_actions';

// Import React-Redux
import { connect } from 'react-redux';

// Import our components:
import VideoBox from './components/VideoBox';
import ChatBox from './components/ChatBox';

// Import OpenTok
import opentok from 'opentok';

var myOpenTok = new opentok('46086882', '65c732f900b54d8b78184fe88def8230377a0761');

class App extends Component {

  componentDidMount() {
    const { fetchSpeaker } = this.props;
    // check if you are the host


    var sessionId = '2_MX40NjA4Njg4Mn5-MTUyMTkyNjUwMjA2MX5FL1JpeDdubzFqVnhXMG0zOGV2cmUyTDZ-fg'
    var tokenOptions = {};
    tokenOptions.role = "publisher";
    tokenOptions.data = "username=bob";

    // Generate a token.
    var token = myOpenTok.generateToken(sessionId, tokenOptions);
    console.log(token);


    // check if stream is speaker1
    fetchSpeaker()
    
  }

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

const mapDispatchToProps = dispatch => {
  return {
    fetchSpeaker: () => { dispatch(fetchSpeaker()) }
  };
};



export default connect(null, mapDispatchToProps)(App);
