import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';
import Clock from './Clock';
import FinishButton from './FinishButton';
import GoalList from './GoalList';
import Actions from '../reducer/goalActions';
// import { RootState } from '../store';

export default function Home(): JSX.Element {
  const dispatch = useDispatch();
  const [goalsList, setGoalsList] = useState([]);
  const [input, setInput] = useState('');

  const getGoals = useSelector((state: any) => {
    return state.goals.goals;
  });

  useEffect(() => {
    setGoalsList(getGoals);
  }, [dispatch, getGoals]);

  const setGoal = () => {
    dispatch(Actions.setGoal(input));
  };

  return (
    <div className={styles.container} data-tid="container">
      <Clock />
      <div className={styles.input__container}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.btn} type="button" onClick={setGoal}>
          Submit
        </button>
      </div>
      <FinishButton />
      <Link to={routes.COUNTER}>to Counter</Link>
      <div className={styles.goal__list}>
        <GoalList goals={goalsList} />
      </div>
    </div>
  );
}
