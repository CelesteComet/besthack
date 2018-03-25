import React from 'react';
<<<<<<< HEAD
import '../styles/video_box.css';
=======
import Draggable from 'react-draggable';
import Publisher from './Publisher';
import Subscriber from './Subscriber';
>>>>>>> master

export default class VideoBox extends React.Component {
  render() {
    return(
      <div className="video-box">
<<<<<<< HEAD
        <div className="main-video-box">
          Main Stream Video
=======
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
>>>>>>> master
        </div>
      </div>
    );
  }
}
