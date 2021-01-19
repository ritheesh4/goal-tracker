import React, { useEffect, useState } from 'react';
import styles from './Clock.css';

const Clock = () => {
  const [date, setDate] = useState(new Date());
  // Replaces componentDidMount and componentWillUnmount

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return (
    <div className={styles.container}>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
