import {put, takeEvery, select, delay} from 'redux-saga/effects';

import types from './actionTypes';
import actions from './actions';
import selector from './selector';

function* initialize() {
  yield put(actions.initialize(25, 25));
}

function* calculateMoveOptions() {
  const {size: {width, height}, path, grid} = yield select(selector);

  if(!path.length) return [];

  const loc = path[path.length - 1];
  const options = [];

  if(loc >= width && !grid[loc - width].visited) options.push(0); // up
  if((loc + 1) % width !== 0 && !grid[loc + 1].visited) options.push(1); // right
  if(loc < (width - 1) * height && !grid[loc + width].visited) options.push(2); // down
  if(loc % width !== 0 && !grid[loc - 1].visited) options.push(3); //left

  return options;
}

function* retracePath() {
  const {path} = yield select(selector);
  if(!path.length) {
    return yield put(actions.generationFinished()); // We done!
  }

  yield put(actions.deadendHit());
  yield attemptMovement();
}

function* attemptMovement() {
  const moveOptions = yield calculateMoveOptions();

  if(!moveOptions.length) {
    return yield retracePath();
  }

  yield delay(10);
  const movement = moveOptions[parseInt(Math.random() * moveOptions.length)];
  yield put(actions.requestGeneration(movement));
}

function* startDepthFirstGeneration() {
  yield takeEvery(types.requestGeneration, attemptMovement);
}

export default [
  initialize,
  startDepthFirstGeneration,
]