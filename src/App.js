import React, { Component } from 'react';
import './App.css';

// Import Actions
import { fetchSpeaker } from './frontend/actions/speakers_actions';

// Import our components:
import VideoBox from './components/VideoBox';
import ChatBox from './components/ChatBox';
// ------------

// class LambdaDemo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {loading: false, msg: null};
//   }

//   componentDidMount() {
//     // check if you are the host

//     // check if stream is speaker1
//     fetchSpeaker
//   }

//   handleClick = (e) => {
//     e.preventDefault();

//     this.setState({loading: true});
//     fetch('/.netlify/functions/hello')
//       .then(response => response.json())
//       .then(json => this.setState({loading: false, msg: json.msg}));
//   }



//   render() {
//     const {loading, msg} = this.state;

//     return <p>
//       <button onClick={this.handleClick}>{loading ? 'Loading...' : 'Call Lambda'}</button><br/>
//       <span>{msg}</span>
//     </p>
//   }
// }

class App extends Component {

  componentDidMount() {
    // check if you are the host

    // check if stream is speaker1
    fetchSpeaker;
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Townhall</h1>
        </header>

        <main>
          <VideoBox />
          <ChatBox />
        </main>

        <footer>
          Reactathon 2018
        </footer>
      </div>
    );
  }
}

export default App;
