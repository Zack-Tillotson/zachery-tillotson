import {put, takeLatest, select, delay} from 'redux-saga/effects';

import types from './actionTypes';
import actions from './actions';
import selector from './selector';

const DELAY = 1;

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
    yield put(actions.generationFinished()); // We done!
    return true;
  }

  yield put(actions.deadendHit());
  return false;
}

function* generateMaze() {
  if((yield select(selector)).state !== 'Ready') {
    yield initialize();
    return;
  }

  try {
    while(true) {
      yield delay(DELAY);

      const moveOptions = yield calculateMoveOptions();

      if(!moveOptions.length) {
        const isFinished = yield retracePath();
        if(isFinished) {
          break;
        }
      } else {
        const movement = moveOptions[parseInt(Math.random() * moveOptions.length)];
        yield put(actions.movementTaken(movement));
      }
    }
  } catch(e) {
    // Is cancellable
  }
}

function* startDepthFirstGeneration() {
  yield takeLatest(types.requestGeneration, generateMaze);
}

export default [
  initialize,
  startDepthFirstGeneration,
]