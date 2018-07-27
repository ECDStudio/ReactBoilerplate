import React, { Component } from 'react';

import './Home.css';

class Home extends Component {
  state = {
    
  }

  render() {
    return (
      <div className="Home" ref={el => this.$node = el}>
      </div>
    );
  }
}

export default Home;
