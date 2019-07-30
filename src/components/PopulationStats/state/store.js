import React from 'react';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import populationStats from './reducer';

import popStatsSagas from './sagas';

/* eslint-disable-next-line */
const global = typeof window ===  'undefined' ? {} : window;

const rootReducer = combineReducers({
  populationStats,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
];
const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middleware),
));

popStatsSagas.forEach(saga => sagaMiddleware.run(saga));

const withStore = App => props => <Provider store={store}><App {...props} /></Provider>

export default withStore;