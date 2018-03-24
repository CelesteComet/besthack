import React from 'react';
import Draggable from 'react-draggable';

export default class VideoBox extends React.Component {
  render() {
    return(
      <div className="video-box">
        <div className="main-video">
          Main Stream Video
        </div>
        <Draggable bounds="parent">
          <div className="popup-video">
            Pop up video
          </div>
        </Draggable>
      </div>
    );
  }
}
