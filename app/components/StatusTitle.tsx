import React from 'react';
import styles from './StatusTitle.css';

export default function StatusTitle(props: { title: string }) {
  return <div className={styles.status__title}>{props?.title}</div>;
}
