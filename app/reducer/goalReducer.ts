import {
  SET_GOAL,
  REMOVE_GOAL,
  CURRENT_GOAL,
  CURRENT_TIME,
  SAVE_STATUS,
} from './goalTypes';

const initialState = {
  goals: [],
  index: 0,
  currentGoal: 0,
  currentTime: 0,
  status: [],
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
    case CURRENT_GOAL:
      return {
        ...state,
        currentGoal: action.payload,
      };
    case CURRENT_TIME:
      return {
        ...state,
        currentTime: action.payload,
      };
    case SAVE_STATUS:
      return {
        ...state,
        status: [
          ...state.status,
          { goal: action.payload, key: state.status.length },
        ],
      };
    default:
      return state;
  }
};

export default goals;
