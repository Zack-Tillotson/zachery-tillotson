import types from './actionTypes';
import rng from '../zigg';

const initialState = {
  state: 'Ready',
  size: 1000,

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

    case types.definitionChanged: {
      return {
        ...state,
        definitions: state.definitions.map(group => {
          if(group.id !== action.payload.id) {
            return group;
          }

          return {
            ...group,
            [action.payload.name]: Number(action.payload.value),
          }
        }),
      }
    }

    case types.generate: {
      const {size} = state;
      const groups = state.definitions.map(({mean, stdDev}) => {
        return new Array(size).fill().map(() => rng.nextGaussian() * stdDev + mean);
      });

      const together = groups.reduce((soFar, group) => soFar.concat(group), []).sort();

      const percThreshold1 = together[parseInt(together.length * .99)];
      const percThreshold10 = together[parseInt(together.length * .9)];
      const percThreshold50 = together[parseInt(together.length * .5)];
      const stats = [{
        name: 'Top 50%',
        groups: groups.map(group => group.reduce((soFar, item) => item > percThreshold50 ? soFar + 1 : soFar, 0)),
      }, {
      //   name: 'Top 10%',
      //   groups: groups.map(group => group.reduce((soFar, item) => item > percThreshold10 ? soFar + 1 : soFar, 0)),
      // }, {
        name: 'Top 1%',
        groups: groups.map(group => group.reduce((soFar, item) => item > percThreshold1 ? soFar + 1 : soFar, 0)),
      },
];

      return {
        ...state,
        groups,
        stats,
      }
    }
    default:
  }
  return state;
}