import React, { Component } from 'react';
import classNames from 'classnames';

import './Home.scss';

class Home extends Component {

  constructor(props) {
      super(props);

      this.state = {
        
      };
  }

  render = () => {
    const classes = classNames({
      'Home': true,
    })

    return (
      <section className={ classes } ref={el => this.$node = el}>
        
      </section>
    );
  }
}

export default Home;
