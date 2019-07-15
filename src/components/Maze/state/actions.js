import types from './actionTypes';

function initialize(width, height) {
  return {type: types.initialize, payload: {width, height}};
}

function generationFinished() {
  return {type: types.generationFinished};
}

function requestInitialization() {
  return {type: types.requestInitialization}
}

function requestGeneration() {
  return {type: types.requestGeneration};
}

function movementTaken(movement) {
  return {type: types.movementTaken, payload: {movement}};
}

function deadendHit() {
  return {type: types.deadendHit};
}

function optionChanged(name, value) {
  return {type: types.optionChanged, payload: {name, value}};
}

export default {
  initialize,
  generationFinished,

  requestInitialization,
  requestGeneration,
  movementTaken,
  deadendHit,

  optionChanged,
}