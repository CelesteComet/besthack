import React from 'react';

export default class VideoBox extends React.Component {
  render() {
    return(
      <div>
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
