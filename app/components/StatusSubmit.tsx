import React from 'react';
import SelectGoal from './SelectGoal';
import Timer from './Timer';
import StatusTitle from './StatusTitle';
import SubmitButton from './SubmitButton';
import ListSelect from './ListSelect';
import StatusInput from './StatusInput';
import styles from './StatusSubmit.css';

export default function StatusSubmit() {
  const title = ['LOC', 'Language', 'Status'];
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
      <SelectGoal />
      <Timer />
      <div className={styles.status__section}>
        <div>
          {title.map((item) => {
            return <StatusTitle title={item} key={item} />;
          })}
        </div>
        <div>
          <StatusInput />
          <ListSelect />
          <StatusInput />
        </div>
      </div>
      <SubmitButton />
    </div>
  );
}
