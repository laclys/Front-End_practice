import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
 
import rootSaga from './saga';

import {counter} from './index.redux'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(counter, applyMiddleware(sagaMiddleware))
// console.log(rootSaga)
sagaMiddleware.run(rootSaga)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

