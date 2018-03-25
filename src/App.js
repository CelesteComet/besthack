import React, { Component } from 'react';
import './App.css';

// Import Actions
import { fetchSpeaker } from './frontend/actions/speakers_actions';
import { setToken } from './frontend/actions/auth_actions';

// Import React-Redux
import { connect } from 'react-redux';

// Import our components:
import VideoBox from './components/VideoBox';
import ChatBox from './components/ChatBox';
import NameEntry from './components/NameEntry';



class App extends Component {

  componentDidMount() {
    const { getSpeaker } = this.props;
    getSpeaker();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="App-container">
        {
          currentUser &&
          <div className="App">
            <main className="App__wrapper">
              <VideoBox />
              <ChatBox />
            </main>
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
    getSpeaker: () => { dispatch(fetchSpeaker()) },
    setToken: token => { dispatch(setToken(token)) }
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
