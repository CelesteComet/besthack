import React from 'react';
import '../styles/video_box.css';

export default class VideoBox extends React.Component {
  render() {
    return(
      <div className="video-box">
        <div className="main-video-box">
          Main Stream Video
        </div>
        <ul className="popup-video-container">
          <li className="popup-video">Pop up video</li>
          <li className="popup-video">Pop up video</li>
          <li className="popup-video">Pop up video</li>
        </ul>
      </div>
    );
  }
}
