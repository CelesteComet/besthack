import React from 'react';
import { connect } from 'react-redux';
import {OTPublisher, createSession, OTSubscriber} from 'opentok-react';
import callEndIcon from '../images/icon-call-end.svg';
import vidIcon from '../images/icon-video.svg';
import vidOffIcon from '../images/icon-video-off.svg';

class Publisher extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      streams: [],
      properties: {
        name: props.currentUser,
        audioFallbackEnabled: false,
        showControls: true,
        publishVideo: true
      }
    };
    this.renderHost = this.renderHost.bind(this);
  }

  componentWillMount() {
    this.sessionHelper = createSession({
      apiKey: '46086882',
      sessionId: '2_MX40NjA4Njg4Mn5-MTUyMTkyNjUwMjA2MX5FL1JpeDdubzFqVnhXMG0zOGV2cmUyTDZ-fg',
      token: 'T1==cGFydG5lcl9pZD00NjA4Njg4MiZzaWc9Yzk4OTZiZDdmMDViMWNjNDViYjc1ZTk1YzU5MTYzMDE1YjU0YjBmYjpzZXNzaW9uX2lkPTJfTVg0ME5qQTROamc0TW41LU1UVXlNVGt5TmpVd01qQTJNWDVGTDFKcGVEZHViekZxVm5oWE1HMHpPR1YyY21VeVREWi1mZyZjcmVhdGVfdGltZT0xNTIxOTMxMzUxJm5vbmNlPTAuMjg4OTgwNzE3MDc3NDYyMSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTI0NTIzMzQ5JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9',
      onStreamsUpdated: streams => { this.setState({ streams }); }
    });
  }

  componentWillReceiveProps() {

  }

  componentWillUnmount() {
    this.sessionHelper.disconnect();
  }

  handleClick = (e) => {
    e.preventDefault();
    let properties = {...this.state.properties};
    let bool = (properties.publishVideo === false) ? true : false;
    properties.publishVideo = bool;
    this.setState({properties});
  }

  endCall = (e) => {
    e.preventDefault();
    // this.sessionHelper.disconnect();
    this.sessionHelper.session.unpublish();

  }

  renderHost() {
    let style;
    const { currentUser, host } = this.props;
    // if (currentUser === host) {
    //   style = {'display': 'block'};
    // } else {
    //   style = {'display': 'none'};
    // }

    return (
      <div>
        <OTPublisher session={this.sessionHelper.session} properties={this.state.properties} />

      </div>

    );
    // if (this.props.currentUser === this.props.host) {
    //   return <OTPublisher session={this.sessionHelper.session} properties={this.state.properties} />
    // }
    // this.state.streams.forEach(stream => {
    //   if (stream.name === this.props.host) {
    //     return (
    //       <OTSubscriber
    //         key={stream.id}
    //         session={this.sessionHelper.session}
    //         stream={stream}
    //         properties={{name: stream.name}}
    //       />
    //     )
    //   } else {
    //     <div style={style}>
    //       <OTPublisher session={this.sessionHelper.session} properties={this.state.properties} />
    //     </div>
    //   }
    // })
    // return <OTPublisher session={this.sessionHelper.session} properties={this.state.properties} />

  }

  render() {
    let videoStatus = this.state.properties.publishVideo;
    let videoToggle = videoStatus ? vidIcon : vidOffIcon;
    return (
      <div className="publisher-container">
        <div className="video-buttons">
          <button onClick={this.handleClick}>
            <img src={videoToggle} aria-label="Toggle Video" />
          </button>
          <button
            style={{backgroundColor: 'red'}}
            onClick={this.endCall}>
            <img src={callEndIcon} aria-label="End Call" />
          </button>
        </div>
        {this.renderHost()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    token: state.session.token,
    host: state.host.name,
    speaker: state.speaker
  };
};


export default connect(mapStateToProps, null)(Publisher);
