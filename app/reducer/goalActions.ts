import {
  SET_GOAL,
  REMOVE_GOAL,
  INPUT_VALUE,
  CURRENT_GOAL,
  CURRENT_TIME,
  SAVE_STATUS,
} from './goalTypes';

const setGoal = (goal: string) => {
  return { type: SET_GOAL, payload: goal };
};

const removeGoal = (index: number) => {
  return { type: REMOVE_GOAL, payload: index };
};

const inputValue = (value: string) => {
  return { type: INPUT_VALUE, payload: value };
};

const currentGoal = (index: number) => {
  return { type: CURRENT_GOAL, payload: index };
};

const currentTime = (time: any) => {
  return { type: CURRENT_TIME, payload: time };
};

const saveStatus = (data: any) => {
  return { type: SAVE_STATUS, payload: data };
};

export default {
  setGoal,
  removeGoal,
  inputValue,
  currentGoal,
  currentTime,
  saveStatus,
};
