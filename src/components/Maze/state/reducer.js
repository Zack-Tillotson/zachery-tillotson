import types from './actionTypes';

const initialCell = {
  top: true,
  right: true,
  bottom: true,
  left: true,
  visited: false,
}

const initialState = {
  state: 'Ready',
  options: {
    showPath: false,
    backgroundImage: false,
    fastMode: false,
  },

  size: {
    width: 1,
    height: 1,
  },
  grid: [], // Array maps to grid row by row

  path: [], // Index of steps along path
}

export default function(state = initialState, action) {
  switch(action.type) {
    case types.initialize: {
      const {width, height} = action.payload;
      const nextState = {
        ...initialState,
        options: state.options,
        size: {width, height},
        grid: new Array(width*height).fill(initialCell),
        path: [0],
      };

      nextState.grid[nextState.path[0]] = {...nextState.grid[nextState.path[0]], visited: true};
      return nextState;
    }

    case types.movementTaken: {

      const {movement} = action.payload;

      const latestStepIndex = state.path[state.path.length - 1];
      let nextStepIndex;
      switch(movement) {
        case 0: // up
          nextStepIndex = latestStepIndex - state.size.width;
          break;
        case 1: // right
          nextStepIndex = latestStepIndex + 1;
          break;
        case 2: // down
          nextStepIndex = latestStepIndex + state.size.width;
          break;
        case 3: // left
          nextStepIndex = latestStepIndex - 1;
          break;
        default:
      }

      const nextStep = {...state.grid[nextStepIndex], visited: true};
      const latestStep = {...state.grid[latestStepIndex]};

      switch(movement) {
        case 0: // up
          nextStep.bottom = false;
          latestStep.top = false;
          break;
        case 1: // right
          nextStep.left = false;
          latestStep.right = false;
          break;
        case 2: // down
          nextStep.top = false;
          latestStep.bottom = false;
          break;
        case 3: // left
          nextStep.right = false;
          latestStep.left = false;
          break;
        default:
      }

      const nextState = {
        ...state,
        state: 'In Progress',
        grid: [...state.grid],
        path: [...state.path],
      }
      nextState.path.push(nextStepIndex);
      nextState.grid[nextStepIndex] = nextStep;
      nextState.grid[latestStepIndex] = latestStep;

      return nextState;
    }

    case types.deadendHit: {
      return {
        ...state,
        path: state.path.slice(0, -1),
      }
    }

    case types.generationFinished: {
      return {
        ...state,
        state: 'Complete',
      }
    }

    case types.optionChanged: {
      const {name, value} = action.payload;

      return {
        ...state,
        options: {
          ...state.options,
          [name]: value,
        }
      }
    }

    default:
  }
  return state;
}