import React from 'react';
import Draggable from 'react-draggable';
import Publisher from './Publisher';
import Subscriber from './Subscriber';
import firebase from '../firebase/firebase.js';

export default class VideoBox extends React.Component {
  constructor() {
    super();
    this.state = { queue: {}};
  }

  componentDidMount() {
    firebase.database().ref('queue').on('value', (snapshot) => {
      if ( snapshot.val() ) {
        this.setState({ queue: snapshot.val() });
      }
    });
  }

  raiseQuestion() {
    const userToken = Math.floor(Math.random() * 10);
    firebase.database().ref(`queue/${userToken}`).set({
      userToken: userToken,
      name: "testing Name"
    });
  }

  renderQuestionSection() {
    const userToken = 10;
    if (this.state.queue[userToken]) {// already in the queue
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
        <div className="video-title">
          <p>Event Name</p>
          <p>Company/Organizer</p>
        </div>
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
          {queue.slice(0,4).map(user => {
            return (<li className="queue-item">{user.userToken}</li>);
          })}
        </ul>
      </div>
    );
  }
}
