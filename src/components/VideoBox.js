import React from 'react';
import Draggable from 'react-draggable';
import {connect} from 'react-redux';
import {createSession} from 'opentok-react';

import Publisher from './Publisher';
import Subscriber from './Subscriber';
import firebase from '../firebase/firebase.js';

class VideoBox extends React.Component {
  constructor() {
    super();
    this.state = { queue: {}, inQueue: false};
  }

  componentWillMount() {
    this.sessionHelper = createSession({
      apiKey: '46086882',
      sessionId: '2_MX40NjA4Njg4Mn5-MTUyMTkyNjUwMjA2MX5FL1JpeDdubzFqVnhXMG0zOGV2cmUyTDZ-fg',
      token: 'T1==cGFydG5lcl9pZD00NjA4Njg4MiZzaWc9Yzk4OTZiZDdmMDViMWNjNDViYjc1ZTk1YzU5MTYzMDE1YjU0YjBmYjpzZXNzaW9uX2lkPTJfTVg0ME5qQTROamc0TW41LU1UVXlNVGt5TmpVd01qQTJNWDVGTDFKcGVEZHViekZxVm5oWE1HMHpPR1YyY21VeVREWi1mZyZjcmVhdGVfdGltZT0xNTIxOTMxMzUxJm5vbmNlPTAuMjg4OTgwNzE3MDc3NDYyMSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTI0NTIzMzQ5JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9',
      onStreamsUpdated: streams => { this.setState({ streams }); }
    });

    this.sessionHelper.session.on('signal:speaker', function(event) {
      // This is when other user receive signal to update redux store when speaker changes:


    });
  }

  componentDidMount() {
    firebase.database().ref('queue').on('value', (snapshot) => {
      if ( snapshot.val() ) {
        this.setState({ queue: snapshot.val() });
      }
    });
  }

  raiseQuestion() {
    firebase.database().ref(`queue/${this.props.currentUser.currentUser}`).set({
      name: this.props.currentUser.currentUser
    });
    this.setState({inQueue: true});
  }

  updateSpeaker() {
    // Update Speaker in the backend: (Bruce)


    // Send signal to other users to update redux store after we update speaker in the backend:
    this.sessionHelper.session.signal({
      type: 'speaker',
      data: 'update'
    }, function(error) {
      if (error) {
        console.log('Error sending signal:', error.name, error.message);
      }
    });
  }

  renderQuestionSection() {
    const userToken = 10;
    if (this.state.inQueue) {// already in the queue
      return <div className="queue-wait-text"> You are in the Question Queue</div>;
    } else {
      return (
        <div className="question-button"
          onClick={() => this.raiseQuestion()}>
          Ask Question
        </div>
      );
    }
  }

  render() {
    const queue = Object.values(this.state.queue);
    return(
      <div className="video-box">
        <div className="main-video">
          <Publisher />
          <Draggable bounds="parent">
            <div className="popup-video">
              <Subscriber />
            </div>
          </Draggable>
        </div>
        {this.renderQuestionSection()}
        <p>Queue (Total {queue.length})</p>
        <ul className="queue">
          {queue.slice(0,12).map((user, idx) => {
            return (
              <li key={idx} className="queue-item"
                onClick={(e) => this.updateSpeaker(e)}>
                {user.userToken} {user.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

export default connect(mapStateToProps, null)(VideoBox);
