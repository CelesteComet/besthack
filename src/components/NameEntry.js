import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser, setToken } from '../frontend/actions/auth_actions';

// Import OpenTok
import opentok from 'opentok';
var myOpenTok = new opentok('46086882', '65c732f900b54d8b78184fe88def8230377a0761');

class NameEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { setCurrentUser } = this.props;
    setCurrentUser(this.state.name);
<<<<<<< HEAD



    // check if you are the host

    // check if stream is speaker1
    const sessionId = '2_MX40NjA4Njg4Mn5-MTUyMTkyNjUwMjA2MX5FL1JpeDdubzFqVnhXMG0zOGV2cmUyTDZ-fg'
    const tokenOptions = {};
    const speakerId = 'bla'

    if (speakerId === 'bob') {
      tokenOptions.role = "subscriber";
      tokenOptions.data = "username=bob";
    } else {
      tokenOptions.role = "subscriber";
      tokenOptions.data = "username=bob";
    }

    // Generate a token.
    var token = myOpenTok.generateToken(sessionId, tokenOptions);
    window.token = token;
    setToken(token);


=======
>>>>>>> e0d37238c6a68591311dc77323154fc08da37f79
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="div-home">

        <form onSubmit={this.handleSubmit} className='name-entry'>

          <div>
            <input type='text' onChange={this.handleChange} />
            <button>Enter Name</button>
          </div>
          <br/>

          <div className="townhall-about">
            <img src="https://res.cloudinary.com/dbtepon6n/image/upload/c_scale,w_189/v1521964232/TownHall.svg" alt="main-logo" />
            <p> TownHall is a multi-purpose video streaming application. </p>
          </div>

        </form>

      </div>




=======
      <form onSubmit={this.handleSubmit} className="name-entry">
        <div className="name-entry-input">
          <input
            type="text"
            placeholder="Enter your name"
            onChange={this.handleChange}
          />
        <button><i class="fas fa-arrow-right" aria-label="Submit"></i></button>
        </div>

        <div className="townhall-about">
          <img src="https://res.cloudinary.com/dbtepon6n/image/upload/c_scale,w_189/v1521964232/TownHall.svg" alt="main-logo" />
          <p> TownHall is a multi-purpose video streaming application. </p>
        </div>
      </form>
>>>>>>> e0d37238c6a68591311dc77323154fc08da37f79
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: username => {
      dispatch(setCurrentUser(username))
    }
  };
};

export default connect(null, mapDispatchToProps)(NameEntry);
