import { createStore, compose, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '../redux/rootReducer';
import { sagaWatcher } from '../redux/sagas';

const saga = createSagaMiddleware();

export default createStore(rootReducer, compose(
  applyMiddleware(
    saga
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

saga.run(sagaWatcher);
