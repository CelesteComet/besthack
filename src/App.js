import React, { Component } from 'react';
import './App.css';

// Import Actions
import { fetchSpeaker } from './frontend/actions/speakers_actions';

// Import React-Redux
import { connect } from 'react-redux';

// Import our components:
import VideoBox from './components/VideoBox';
import ChatBox from './components/ChatBox';
import NameEntry from './components/NameEntry';

// Import OpenTok
import opentok from 'opentok';

var myOpenTok = new opentok('46086882', '65c732f900b54d8b78184fe88def8230377a0761');

class App extends Component {

  componentDidMount() {
    const { fetchSpeaker } = this.props;
    // check if you are the host

    // check if stream is speaker1
    fetchSpeaker().then(speaker => {
      const sessionId = '2_MX40NjA4Njg4Mn5-MTUyMTkyNjUwMjA2MX5FL1JpeDdubzFqVnhXMG0zOGV2cmUyTDZ-fg'
      const tokenOptions = {};
      const speakerId = speaker[0].name;

      if (speakerId === 'bob') {
        tokenOptions.role = "subscriber";
        tokenOptions.data = "username=bob";
      } else {
        tokenOptions.role = "subscriber";
        tokenOptions.data = "username=bob";
      }

      // Generate a token.
      var token = myOpenTok.generateToken(sessionId, tokenOptions);
    });
  }

  render() {
    const { currentUser } = this.props;
    console.log(currentUser)
    return (
      <div>
        { currentUser &&
        <div className="App">
          <div className="App2">
            <VideoBox />
            <ChatBox />
          </div>
        </div>
        }

        { !currentUser && <NameEntry /> }


      </div>
    );
  }
}

const mapStateToProps = state => {
  return { currentUser: state.session.currentUser };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSpeaker: () => { return dispatch(fetchSpeaker()) }
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
