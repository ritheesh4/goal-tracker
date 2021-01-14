import { SET_GOAL, REMOVE_GOAL, INPUT_VALUE } from './goalTypes';

const setGoal = (goal: string) => {
  return { type: SET_GOAL, payload: goal };
};

const removeGoal = (index: number) => {
  return { type: REMOVE_GOAL, payload: index };
};

const inputValue = (value: string) => {
  return { type: INPUT_VALUE, payload: value };
};

export default { setGoal, removeGoal, inputValue };
