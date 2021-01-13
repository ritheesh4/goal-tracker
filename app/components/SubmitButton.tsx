import React from 'react';
import styles from './SubmitButton.css';

export default function SubmitButton() {
  return (
    <button className={styles.btn} type="submit">
      Submit
    </button>
  );
}
