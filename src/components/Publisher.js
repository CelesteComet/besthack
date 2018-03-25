import React from 'react';
import { OTSession, OTPublisher, OTStreams, OTSubscriber, createSession} from 'opentok-react';

class Publisher extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      streams: [],
      properties: {
        name: 'Bruce',
        audioFallbackEnabled: false,
        showControls: false,
        publishVideo: true
      }
    };
  }

  componentWillMount() {

    this.sessionHelper = createSession({
      apiKey: '46086882',
      sessionId: '2_MX40NjA4Njg4Mn5-MTUyMTkyNjUwMjA2MX5FL1JpeDdubzFqVnhXMG0zOGV2cmUyTDZ-fg',
      token: 'T1==cGFydG5lcl9pZD00NjA4Njg4MiZzaWc9Yzk4OTZiZDdmMDViMWNjNDViYjc1ZTk1YzU5MTYzMDE1YjU0YjBmYjpzZXNzaW9uX2lkPTJfTVg0ME5qQTROamc0TW41LU1UVXlNVGt5TmpVd01qQTJNWDVGTDFKcGVEZHViekZxVm5oWE1HMHpPR1YyY21VeVREWi1mZyZjcmVhdGVfdGltZT0xNTIxOTMxMzUxJm5vbmNlPTAuMjg4OTgwNzE3MDc3NDYyMSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTI0NTIzMzQ5JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9',
      onStreamsUpdated: streams => { this.setState({ streams }); }
    });
    //
    // this.properties = {
    //   name: 'Bruce',
    //   audioFallbackEnabled: false,
    //   showControls: true
    // };
  }

  componentWillUnmount() {
    this.sessionHelper.disconnect();
  }

  handleClick = (e) => {
    e.preventDefault();

    let properties = {...this.state.properties};
    let bool = (properties.publishVideo === false)? true: false;
    properties.publishVideo = bool;
    this.setState({properties});
  }

  endCall = (e) => {
    e.preventDefault();
    this.sessionHelper.disconnect();
  }



  render() {
    return (
      <div className="publisher-container">
        <div className="video-buttons">
          <button onClick={this.handleClick}> Toggle Video </button>
          <button onClick={this.endCall}> End Call </button>
        </div>
        <OTPublisher session={this.sessionHelper.session} properties={this.state.properties} />
      </div>
    );
  }
}



export default Publisher;
