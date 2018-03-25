import React from 'react';
import { OTSession, OTPublisher, OTStreams, OTSubscriber, createSession} from 'opentok-react';

export default class ChatForm extends React.Component {
  state = {
    value: ''
  }

  componentWillMount() {

    // This fetch will activate a lambda function which returns a sessionId and is then set in our state.
    fetch('/.netlify/functions/tokbox')
     .then(response => response.json())
     .then(json => this.setState({sessionId: json.payload}));

    this.sessionHelper = createSession({
      apiKey: '46086882',
      sessionId: '2_MX40NjA4Njg4Mn5-MTUyMTkyNjUwMjA2MX5FL1JpeDdubzFqVnhXMG0zOGV2cmUyTDZ-fg',
      token: 'T1==cGFydG5lcl9pZD00NjA4Njg4MiZzaWc9Yzk4OTZiZDdmMDViMWNjNDViYjc1ZTk1YzU5MTYzMDE1YjU0YjBmYjpzZXNzaW9uX2lkPTJfTVg0ME5qQTROamc0TW41LU1UVXlNVGt5TmpVd01qQTJNWDVGTDFKcGVEZHViekZxVm5oWE1HMHpPR1YyY21VeVREWi1mZyZjcmVhdGVfdGltZT0xNTIxOTMxMzUxJm5vbmNlPTAuMjg4OTgwNzE3MDc3NDYyMSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTI0NTIzMzQ5JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9',
      onStreamsUpdated: streams => { this.setState({ streams }); }
    });

    this.properties = {
      name: 'Bruce'
    };

    this.sessionHelper.session.on('signal:msg', function(event) {
      console.log(event);
    });
  }

  componentDidMount() {
    const chatForm = document.querySelector('textarea');
    chatForm.addEventListener('keydown', this.submitOnEnter);
  }

  componentWillUnmount() {
    const chatForm = document.querySelector('textarea');
    chatForm.removeEventListener('keydown', this.submitOnEnter);
  }

  submitOnEnter = (e) => {
    if (e.key === 'Enter') {
      if (!e.target.value.trim()) {
        e.preventDefault();
      }

      if (!e.shiftKey && e.target.value.trim()) {
        e.preventDefault();
        this.handleSubmit(e);
      }
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.value.trim()) {
      console.log(this.state.value.trim());
      e.target.value = '';
      this.setState({ value: '' });
    }

    this.sessionHelper.session.signal({
      type: 'msg',
      data: 'foo'
    }, function(error) {
    if (error) {
      console.log('Error sending signal:', error.name, error.message);
    } else {
      
    }

  });
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return(
      <form className="chat-form" onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Type a message..."
        />
        <div className="chat-buttons">
          <input type="submit" value="Send" />
        </div>
      </form>
    );
  }
}
