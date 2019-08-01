// Core dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { HashRouter } from 'react-router-dom'
// Application dependencies
import './index.css';
import App from './App';

// Progressive Web App support
import registerServiceWorker from './registerServiceWorker';

// Redux store
import applicationStore from './registerApplicationStore';

// console.log(applicationStore().getState())
ReactDOM.render(
  <Provider store={applicationStore()}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
