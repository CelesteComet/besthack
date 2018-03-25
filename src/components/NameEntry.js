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
  }

  render() {
    return (

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
