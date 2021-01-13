import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';
import Clock from './Clock';
import GoalInput from './GoalInput';
import FinishButton from './FinishButton';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      <Clock />
      <GoalInput />
      <FinishButton />
      <Link to={routes.COUNTER}>to Counter</Link>
    </div>
  );
}
