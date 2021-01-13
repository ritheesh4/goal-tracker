import { SET_GOAL, REMOVE_GOAL } from './goalTypes';

const setGoal = (goals: []) => {
  return { type: SET_GOAL, payload: goals };
};

const removeGoal = (index: number) => {
  return { type: REMOVE_GOAL, payload: index };
};

export default { setGoal, removeGoal };
