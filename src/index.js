import React from 'react';
import thunk from 'redux-thunk'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import App from './components/App';
import { initializeComments } from './actions/index';
import axios from 'axios';

let store = createStore(reducer, applyMiddleware(thunk));

const getComments = (dispatch) => {
  axios.get('/api/comments')
    .then((response) => {
      dispatch(initializeComments(response.data));
    })
    .catch((error) => {
      console.log(error);
    })
}

getComments(store.dispatch);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)