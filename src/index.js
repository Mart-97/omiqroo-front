import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './components/App';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers(), applyMiddleware(sagaMiddleware));

const Base = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Base />, document.querySelector('.app'));
