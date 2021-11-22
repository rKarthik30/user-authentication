import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import configreStore from './store/configureStore'

const store = configreStore()
console.log('state', store.getState());

store.subscribe(() => {
    console.log('state updated', store.getState());
})

ReactDOM.render(
  <Provider store={store}><BrowserRouter>
    <App />
  </BrowserRouter></Provider>,
  document.getElementById('root'));