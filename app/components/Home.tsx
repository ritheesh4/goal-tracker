import React, { useEffect, useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';
import Clock from './Clock';
import GoalInput from './GoalInput';
import FinishButton from './FinishButton';
import GoalList from './GoalList';
import Actions from '../reducer/goalActions';
// import { RootState } from '../store';

export default function Home(): JSX.Element {
  const dispatch = useDispatch();
  // const currentState = useSelector((state: RootState) => state);

  const setGoal = () => {
    dispatch(Actions.setGoal(['Learn_react_hooks', 'Complete state']));
  };

  // dispatch(setGoal(['HELLO']));
  return (
    <div className={styles.container} data-tid="container">
      <Clock />
      <GoalInput />
      <FinishButton />
      <button onClick={setGoal} type="button">
        Test
      </button>
      <Link to={routes.COUNTER}>to Counter</Link>
      <div className={styles.goal__list}>
        <GoalList />
      </div>
    </div>
  );
}
