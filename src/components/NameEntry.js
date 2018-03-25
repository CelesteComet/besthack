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
        setToken(token);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='name-entry'>
        <div>
          <input type='text' onChange={this.handleChange} />
          <button>Enter Name</button>
        </div>
      </form>
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

