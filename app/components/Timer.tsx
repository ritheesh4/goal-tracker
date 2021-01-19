import React from 'react';
import { useDispatch } from 'react-redux';
import useTimer from './useTimer';
import StartButton from './StartButton';
import StopButton from './StopButton';
import { formatTime } from './utils';
import styles from './Timer.css';
import Actions from '../reducer/goalActions';

const Timer = () => {
  const dispatch = useDispatch();
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0);

  const saveCurrentTime = () => {
    handlePause();
    dispatch(Actions.currentTime(timer));
  };

  return (
    <div className={styles.timer__container}>
      <div>
        <p className={styles.timer__box}>{formatTime(timer)}</p>
        <div className={styles.buttons__container}>
          {isActive ? (
            <button onClick={saveCurrentTime} type="button">
              <StopButton />
            </button>
          ) : (
            <button onClick={handleStart} type="button">
              <StartButton />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timer;
