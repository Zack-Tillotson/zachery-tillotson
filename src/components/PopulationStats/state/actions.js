import types from './actionTypes';

function initialize(definitions) {
  return {type: types.initialize, payload: definitions};
}

function definitionChanged(id, name, value) {
  return {type: types.definitionChanged, payload: {id, name, value}}
}

function generate() {
  return {type: types.generate};
}


export default {
  initialize,
  definitionChanged,
  generate,
}