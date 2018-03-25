import React from 'react';
import Draggable from 'react-draggable';
import Publisher from './Publisher';
import Subscriber from './Subscriber';

export default class VideoBox extends React.Component {
  render() {
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
      </div>
    );
  }
}
