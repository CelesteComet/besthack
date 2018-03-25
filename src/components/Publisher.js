import React from 'react';

class Publisher extends React.Component {

  constructor(props) {
    super(props);
    this.state = {sessionId: "", streams: [] };

  }


  render() {
    return (
      <div className="publisher-container">
      </div>
    );
  }
}

export default Publisher;
