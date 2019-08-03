// Core dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { HashRouter, Route } from 'react-router-dom'
// Application dependencies
import './index.css';
import App from './App';

// Progressive Web App support
import registerServiceWorker from './registerServiceWorker';

// Redux store
import applicationStore from './registerApplicationStore';

ReactDOM.render(
  <Provider store={applicationStore()}>
    <HashRouter>
      <Route component={App}/>
    </HashRouter>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
