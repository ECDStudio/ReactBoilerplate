import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

import './App.css';

// Routes.
import { Routes } from './Routes';

const history = createHistory();

class App extends Component {
  state = {
    
  }

  render() {
    return (
      <Router history={history}>
        <div className="App" ref={el => this.$node = el}>
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
      </Router>
    );
  }
}

export default App;
