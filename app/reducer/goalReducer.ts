import { SET_GOAL, REMOVE_GOAL } from './goalTypes';

const initialState = {
  goals: [],
  index: 0,
};

const goals = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_GOAL:
      return {
        ...state,
        goals: [
          ...state.goals,
          { goal: action.payload, key: state.goals.length },
        ],
      };
    case REMOVE_GOAL:
      return {
        ...state,
        goals: action.payload,
      };
    default:
      return state;
  }
};

export default goals;
