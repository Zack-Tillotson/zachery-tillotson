import React from 'react';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import maze from '../components/Maze/state/reducer';
import populationStats from '../components/PopulationStats/state/reducer';

import mazeSagas from '../components/Maze/state/sagas';
import popStatsSagas from '../components/PopulationStats/state/sagas';

/* eslint-disable-next-line */
const global = typeof window ===  'undefined' ? {} : window;

const rootReducer = combineReducers({
  maze,
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

mazeSagas.forEach(saga => sagaMiddleware.run(saga));
popStatsSagas.forEach(saga => sagaMiddleware.run(saga));

const withRouter = App => props => <Provider store={store}><App {...props} /></Provider>

export default withRouter;