import React from 'react';
import SubmitButton from './SubmitButton';
import styles from './GoalInput.css';

export default function GoalInput() {
  return (
    <div className={styles.container}>
      <input type="text" />
      <SubmitButton />
    </div>
  );
}
