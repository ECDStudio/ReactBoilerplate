import React, { Component } from 'react';
import classNames from 'classnames';

import './${COMPONENT}.scss';

class ${COMPONENT} extends Component {
  constructor(props) {
      super(props);

      this.state = {
        
      };
  }

  render = () => {
    const classes = classNames({
      '${COMPONENT}': true
    })
  
    return (
      <div className={ classes } ref={ el => this.$node = el }>
      </div>
    )
  }
}

export default ${COMPONENT};
