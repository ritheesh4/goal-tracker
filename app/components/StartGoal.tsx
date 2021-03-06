import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import SelectGoal from './SelectGoal';
import Timer from './Timer';
import FinishButton from './FinishButton';
// import UpDownButtons from './UpDownButtons';
import styles from './StartGoal.css';

export default function StartGoal() {
  const [goalsList, setGoalsList] = useState([]);

  const getGoals = useSelector((state: any) => {
    return state.goals.goals;
  });

  useEffect(() => {
    setGoalsList(getGoals);
  }, [getGoals]);

  return (
    <div className={styles.start__goal}>
      <div className={styles.current__goal}>
        <SelectGoal goal={goalsList} />
        {/* <UpDownButtons /> */}
      </div>
      <Timer />
      <Link to={routes.STATUS_UPDATE}>
        <FinishButton />
      </Link>
    </div>
  );
}
