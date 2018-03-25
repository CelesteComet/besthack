import React from 'react';

export default class ChatForm extends React.Component {
  state = {
    value: ''
  }

  componentDidMount() {
    const chatForm = document.querySelector('textarea');
    chatForm.addEventListener('keyup', this.submitOnEnter);
  }

  componentWillUnmount() {
    const chatForm = document.querySelector('textarea');
    chatForm.removeEventListener('keyup', this.submitOnEnter);
  }

  submitOnEnter = (e) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        e.target.value += '';
      } else {
        this.handleSubmit(e);
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.value);
    e.target.value = '';
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
