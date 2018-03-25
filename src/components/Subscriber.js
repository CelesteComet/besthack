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
      onStreamsUpdated: streams => { console.log(streams);this.setState({ streams }); }
    });
  }

  renderSpeaker() {
    if (this.props.currentUser === this.props.speaker) {
      return <OTPublisher session={this.sessionHelper.session} properties={this.state.properties} />
    }
    this.state.streams.forEach(stream => {
      if (stream.name === this.props.speaker) {
        return (
          <OTSubscriber
            key={stream.id}
            session={this.sessionHelper.session}
            stream={stream}
            properties={{name: stream.name}}
          />
        );
      }
    })

    // return this.state.streams.map(stream => {
    //   return <OTSubscriber
    //     key={stream.id}
    //     session={this.sessionHelper.session}
    //     stream={stream}
    //     properties={{name: stream.name}}
    //   />
        
    // })
  }
  componentWillReceiveProps() {
    console.log("RERENDER")
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
