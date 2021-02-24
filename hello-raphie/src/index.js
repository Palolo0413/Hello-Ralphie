import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import store from './client/store'
import history from './history'
import App from './client/app'




ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
  
  <Router history={history}>
    <App />
  </Router>
  
  </React.StrictMode>
  </Provider>,
  document.getElementById('app')
);


