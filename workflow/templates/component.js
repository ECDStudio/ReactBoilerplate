import React, { Component } from 'react';

import './${COMPONENT}.css';

class ${COMPONENT} extends Component {
  state = {
    
  }

  render() {
    return (
      <div className="${COMPONENT}" ref={el => this.$node = el}>
      </div>
    );
  }
}

export default ${COMPONENT};
