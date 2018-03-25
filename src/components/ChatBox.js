import React from 'react';
import MessagesList from './MessagesList';
import ChatForm from './ChatForm';
import '../styles/chat_box.css';

export default class ChatBox extends React.Component {
  render() {
    return(
      <section className="chatbox">
        <MessagesList />
        <ChatForm />
      </section>
    );
  }
}
