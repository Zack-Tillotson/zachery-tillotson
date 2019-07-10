import {put} from 'redux-saga/effects';

// import types from './actionTypes';
import actions from './actions';
// import selector from './selector';

function createGroup(id) {
  return {
    id,
    name: `Group ${id}`,
    mean: parseInt(100 * Math.random() / 2 + 25) / 100,
    stdDev: .1,
  };
}

function* initialize() {
  const groups = new Array(2).fill().map((_, index) => createGroup(index + 1));
  yield put(actions.initialize(groups));
}

export default [
  initialize,
]