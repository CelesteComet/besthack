import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { alias: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setAlias(this.state.alias);
  }

  updateAlias(e) {
    this.setState({
      alias: e.target.value
    });
  }

  render() {
    if (this.props.alias !== "") {
      return <div></div>;
    }
    return (
      <div className="alias-form">
        <label>Enter alias below:</label>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder="Alias"
            onChange={e => this.updateAlias(e)}
          />
        </form>
      </div>
    );
  }
}