import {put} from 'redux-saga/effects';

// import types from './actionTypes';
import actions from './actions';
// import selector from './selector';

function createGroup(id, index) {
  return {
    id,
    name: `Group ${id}`,
    mean: 1,
    stdDev: .03 + .01 * index,
  };
}

function* initialize() {
  const groups = new Array(2).fill().map((_, index) => createGroup(index + 1, index));
  yield put(actions.initialize(groups));
}

export default [
  initialize,
]