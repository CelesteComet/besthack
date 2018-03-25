import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// Import our components:
import VideoBox from './components/VideoBox';
import ChatBox from './components/ChatBox';
import Login from './components/Login';
// ------------

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: false, msg: null};
  }

  handleClick = (e) => {
    e.preventDefault();

    this.setState({loading: true});
    fetch('/.netlify/functions/hello')
      .then(response => response.json())
      .then(json => this.setState({loading: false, msg: json.msg}));
  }

  render() {
    const {loading, msg} = this.state;

    return <p>
      <button onClick={this.handleClick}>{loading ? 'Loading...' : 'Call Lambda'}</button><br/>
      <span>{msg}</span>
    </p>
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { alias: "" };
  }

  setAlias(alias) {
    this.setState({alias});
  }

  render() {
    return (
      <div className="App">
        <Login setAlias={alias => this.setAlias(alias)} alias={this.state.alias} />
        <LambdaDemo alias={this.state.alias} />
        <div className="App2">
          <VideoBox alias={this.state.alias} />
          <ChatBox alias={this.state.alias} />
        </div>
      </div>
    );
  }
}

export default App;
