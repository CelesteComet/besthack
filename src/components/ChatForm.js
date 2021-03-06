import React from 'react';
import {createSession} from 'opentok-react';
import {createMessage, receiveMessage} from '../frontend/actions/messages_actions';
import { connect } from 'react-redux';

class ChatForm extends React.Component {
  state = {
    value: ''
  }

  componentWillMount() {

    this.sessionHelper = createSession({
      apiKey: '46086882',
      sessionId: '2_MX40NjA4Njg4Mn5-MTUyMTkyNjUwMjA2MX5FL1JpeDdubzFqVnhXMG0zOGV2cmUyTDZ-fg',
      token: 'T1==cGFydG5lcl9pZD00NjA4Njg4MiZzaWc9Yzk4OTZiZDdmMDViMWNjNDViYjc1ZTk1YzU5MTYzMDE1YjU0YjBmYjpzZXNzaW9uX2lkPTJfTVg0ME5qQTROamc0TW41LU1UVXlNVGt5TmpVd01qQTJNWDVGTDFKcGVEZHViekZxVm5oWE1HMHpPR1YyY21VeVREWi1mZyZjcmVhdGVfdGltZT0xNTIxOTMxMzUxJm5vbmNlPTAuMjg4OTgwNzE3MDc3NDYyMSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTI0NTIzMzQ5JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9',
      onStreamsUpdated: streams => { this.setState({ streams }); }
    });

    this.sessionHelper.session.on('signal:msg', (event) => {
      let msg = JSON.parse(event.data);
      this.props.receiveMessage(msg.author_name, msg.body);
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
    let messageBody = this.state.value.trim()

    if (messageBody) {
      this.sessionHelper.session.signal({
        type: 'msg',
        data: `{"author_name": "${this.props.currentUser}", "body": "${messageBody}"}`,
      }, (error) => {
        if (error) {
          console.log('Error sending signal:', error.name, error.message);
        } else {
          this.props.createMessage(this.props.currentUser, messageBody)
            .then(() => {
              const list = document.querySelector('.chat-messages');
              list.scrollTop = list.scrollHeight;
          });
        }
      });

      e.target.value = '';
      this.setState({ value: '' });
    }
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
        <input type="submit" value="Send" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createMessage: (authorName, body) => dispatch(createMessage(authorName, body)),
    receiveMessage: (authorName, body) => dispatch(receiveMessage({author_name: authorName, body: body}))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatForm);
