import React from 'react';
import Draggable from 'react-draggable';

export default class VideoBox extends React.Component {
  render() {
    return(
      <div className="video-box">
        <div className="video-title">
          <p>Event Name</p>
          <p>Company/Organizer</p>
        </div>
        <div className="main-video">
          Main Stream Video
          <Draggable bounds="parent">
            <div className="popup-video">
              Pop up video
            </div>
          </Draggable>
        </div>
      </div>
    );
  }
}
