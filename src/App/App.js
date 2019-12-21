import React, { Component } from 'react';
import classNames from 'classnames';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';

// Routes.
import { Routes } from './Routes.js';

import './App.scss';

const history = createHistory();

class App extends Component {

  constructor() {
    super();

    this.state = {
      
    }
  }

  componentDidMount = () => {
    this.props.updateViewport(window.innerWidth, window.innerHeight);
    window.addEventListener( 'resize', this.handleResize );
  }

  componentWillUnmount = () => {
    window.removeEventListener( 'resize', this.handleResize );
  }

  handleResize = () => {
    this.props.updateViewport(window.innerWidth, window.innerHeight);
  }

  render = () => {
    const classes = classNames({
      'App': true,
    })

    return (
      <Router history={ history }>
        <div className={ classes }>
          <div className="pages">
            {
              Routes.map((route, key) => (
                <Route
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                  key={key}
                />
              ))
            }
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
