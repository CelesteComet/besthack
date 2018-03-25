import React from 'react';
import { connect } from 'react-redux';
import {OTPublisher, OTSubscriber, createSession} from 'opentok-react';

class Subscriber extends React.Component {

  constructor(props) {
    super(props);
    this.state = { sessionId: "", streams: [] };
    this.renderSpeaker = this.renderSpeaker.bind(this);
  }

  componentWillMount() {
    this.sessionHelper = createSession({
      apiKey: '46086882',
      sessionId: '2_MX40NjA4Njg4Mn5-MTUyMTkyNjUwMjA2MX5FL1JpeDdubzFqVnhXMG0zOGV2cmUyTDZ-fg',
      token: 'T1==cGFydG5lcl9pZD00NjA4Njg4MiZzaWc9Yzk4OTZiZDdmMDViMWNjNDViYjc1ZTk1YzU5MTYzMDE1YjU0YjBmYjpzZXNzaW9uX2lkPTJfTVg0ME5qQTROamc0TW41LU1UVXlNVGt5TmpVd01qQTJNWDVGTDFKcGVEZHViekZxVm5oWE1HMHpPR1YyY21VeVREWi1mZyZjcmVhdGVfdGltZT0xNTIxOTMxMzUxJm5vbmNlPTAuMjg4OTgwNzE3MDc3NDYyMSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTI0NTIzMzQ5JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9',
      onStreamsUpdated: streams => { console.log(streams);this.setState({ streams }); } // real time watching stream
    });
  }

  renderSpeaker() {
    console.log("render speaker");
    for (let i = 0; i < this.state.streams.length; i++) {
      if (this.state.streams[i].name === this.props.speaker) {
        return (
          <OTSubscriber
            key={this.state.streams[i].id}
            session={this.sessionHelper.session}
            stream={this.state.streams[i]}
            properties={{name: this.state.streams[i].name}}
          />
        );
      }
    }
  }

  render() {
    return (
      <div>
        {this.renderSpeaker()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    speaker: state.speaker,
    token: state.session.token
  };
};

export default connect(mapStateToProps, null)(Subscriber);
