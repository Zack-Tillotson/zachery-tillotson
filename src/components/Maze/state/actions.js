import types from './actionTypes';

function initialize(width, height) {
  return {type: types.initialize, payload: {width, height}};
}

function generationFinished() {
  return {type: types.generationFinished};
}

function requestGeneration(movement) {
  return {type: types.requestGeneration, payload: {movement}};
}

function deadendHit() {
  return {type: types.deadendHit};
}

export default {
  initialize,
  generationFinished,

  requestGeneration,
  deadendHit,
}