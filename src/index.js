import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { store } from './redux/store';

import './index.css';

import App from './sections/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App/>
    </BrowserRouter>
  </Provider>), document.getElementById('root')
);

registerServiceWorker();
