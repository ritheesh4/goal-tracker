import React from 'react';
import SelectGoal from './SelectGoal';
import Timer from './Timer';
import StartButton from './StartButton';
import StopButton from './StopButton';
import FinishButton from './FinishButton';
import UpDownButtons from './UpDownButtons';
import styles from './StartGoal.css';

export default function StartGoal() {
  return (
    <div className={styles.start__goal}>
      <div className={styles.current__goal}>
        <SelectGoal />
        <UpDownButtons />
      </div>
      <Timer />
      <StartButton />
      <StopButton />
      <FinishButton />
    </div>
  );
}
