import React from 'react';
// import styles from './GoalList.css';

const GoalList = (props: any) => {
  const { goals } = props;
  const indexToNumber = 1;

  return (
    <div>
      <ol>
        {goals.map((item: any, index: number) => (
          <li key={item.key}>{`${index + indexToNumber}. ${item.goal}`}</li>
        ))}
      </ol>
    </div>
  );
};

export default GoalList;
