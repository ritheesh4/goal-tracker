import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SelectGoal.css';
import Actions from '../reducer/goalActions';

export default function SelectGoal(props: any) {
  const dispatch = useDispatch();
  const [goalIndex, setIndex] = useState(0);
  const indexToLength = 1;
  const { goal } = props;

  useEffect(() => {
    dispatch(Actions.currentGoal(goalIndex));
  }, [goalIndex, dispatch]);

  const upDirection = () => {
    if (goal.length > goalIndex + indexToLength) {
      setIndex(goalIndex + 1);
    }
  };

  const downDirection = () => {
    if (goalIndex > 0) {
      setIndex(goalIndex - indexToLength);
    }
  };

  return (
    <div className={styles.goal__container}>
      <div className={styles.select__goal}>
        {goalIndex + indexToLength}.{goal[goalIndex]?.goal}
      </div>
      <div className={styles.updown__btn__container}>
        <button onClick={upDirection} type="button">
          UP
        </button>
        <button onClick={downDirection} type="button">
          DOWN
        </button>
      </div>
    </div>
  );
}
