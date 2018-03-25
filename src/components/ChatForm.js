import React from 'react';

export default class ChatForm extends React.Component {
  state = {
    value: ''
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
