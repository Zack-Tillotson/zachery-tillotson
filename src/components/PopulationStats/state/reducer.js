import types from './actionTypes';
import zgg from '../zigg';

const rng = zgg();

const initialState = {
  state: 'Ready',

  definitions: [],

  groups: [],

  stats: [],  
}

export default function(state = initialState, action) {
  switch(action.type) {
    case types.initialize: {
      return {
        ...state,
        definitions: action.payload,
      }
    }

    case types.generate: {
      const groups = state.definitions.map({size, min, max, stdDev} => {
        return new Array(group.size).fill().map(() => rng * stdDev * (max - min) + min);
      })

      return {
        ...state,
        groups,
      }
    }
    default:
  }
  return state;
}