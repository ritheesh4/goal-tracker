import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import Actions from '../reducer/goalActions';
import StatusTitle from './StatusTitle';
import styles from './StatusSubmit.css';
import formatTime from './utils';

export default function StatusSubmit() {
  const dispatch = useDispatch();
  const title = ['LOC', 'Language', 'Status'];
  const [loc, setLoc] = useState('');
  const [language, setLanguage] = useState('');
  const [status, setStatus] = useState('');

  const currentGoal = useSelector((state: any) => {
    const currentGoalIndex = state.goals.currentGoal;
    const { currentTime } = state.goals;
    return {
      goal: state.goals.goals[currentGoalIndex].goal,
      index: currentGoalIndex,
      time: currentTime,
    };
  });

  const saveStatus = () => {
    dispatch(Actions.saveStatus({ currentGoal, loc, language, status }));
  };

  const indexToLength = 1;
  // const languages = [
  //   'JavaScript',
  //   'Python',
  //   'Go',
  //   'CSS',
  //   'HTML',
  //   'JSX',
  //   'SCSS',
  //   'TS',
  // ];

  return (
    <div className={styles.status__submit__container}>
      {/* <SelectGoal /> */}
      <div className={styles.select__goal}>
        {currentGoal.index + indexToLength}.{currentGoal.goal}
      </div>
      <div className={styles.timer__container}>
        <div>
          <p className={styles.timer__box}>{formatTime(currentGoal.time)}</p>
        </div>
      </div>
      <div className={styles.status__section}>
        <div>
          {title?.map((item) => {
            return <StatusTitle title={item} key={item} />;
          })}
        </div>
        <div className={styles.input__container}>
          <input
            type="text"
            value={loc}
            onChange={(e) => setLoc(e.target.value)}
          />
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
      </div>
      <Link to={routes.START_GOAL}>
        <button className={styles.btn} type="submit" onClick={saveStatus}>
          SUBMIT
        </button>
      </Link>
    </div>
  );
}
