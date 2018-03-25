import React from 'react';
import Draggable from 'react-draggable';
import {connect} from 'react-redux';
import {createSession} from 'opentok-react';

import Publisher from './Publisher';
import Subscriber from './Subscriber';
import firebase from '../firebase/firebase.js';

import { updateSpeaker } from '../frontend/actions/speakers_actions';

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
      const { dispatch } = this.props;
      dispatch(updateSpeaker(event.data));
    }.bind(this));
  }

  componentDidMount() {
    firebase.database().ref('queue').on('value', (snapshot) => {
      if ( snapshot.val() ) {
        this.setState({ queue: snapshot.val() });
      }
    });
  }

  raiseQuestion() {
    firebase.database().ref(`queue/${this.props.currentUser}`).set({
      name: this.props.currentUser
    });
    this.setState({inQueue: true});
  }

  updateSpeaker(nameId) {
    if (!this.isHost()) return; // Will not do anything if NOT a host

    // Update Speaker in the backend: (Bruce)
    const { dispatch } = this.props;
    dispatch(updateSpeaker(nameId));

    // Send signal to other users to update redux store after we update speaker in the backend:
    this.sessionHelper.session.signal({
      type: 'speaker',
      data: nameId
    }, function(error) {
      if (error) {
        console.log('Error sending signal:', error.name, error.message);
      }
    });

    // Dequeue:
    firebase.database().ref(`queue/${this.props.currentUser}`).remove();
  }

  isHost() { // To check if a user is the host of this room session:
    return (this.props.host === this.props.currentUser);
  }

  renderQuestionSection() {
    if (this.isHost()) return null; // dont render this if user is a host
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
    const { host, currentUser } = this.props;
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
                onClick={(e) => this.updateSpeaker(user.name)}>
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
    currentUser: state.session.currentUser,
    host: state.host.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoBox);
