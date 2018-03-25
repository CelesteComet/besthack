import React from 'react';
import {fetchMessages} from '../frontend/actions/messages_actions';
import { connect } from 'react-redux';

class MessagesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.fetchMessages().then(() => {
      this.setState({loading: false});
    })
  }

  toLocalTime(utc) {
    const date = new Date(Date.parse(utc));
    const timeString = date.toLocaleTimeString();
    return timeString.slice(0, -6).concat(timeString.slice(-3));
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="chat-messages">
          Loading...
        </div>
      )
    }

    return(
      <ul className="chat-messages">
        {this.props.messages.map((message, idx) => (
          <li key={idx}>
            <span className="message-author">
              {message.author_name}:
            </span>
            <span className="message-body">
              {message.body}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMessages: () => dispatch(fetchMessages())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
