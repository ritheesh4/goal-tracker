import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import formatTime from './utils';
import styles from './FinalStatus.css';

export default function FinalStatus() {
  const totalTime: any = [];
  const totalLoc: any = [];

  const data = useSelector((state: any) => {
    const { status } = state.goals;
    return status;
  });

  return (
    <div>
      <div className={styles.title__container}>
        <div className={styles.grid__item}>GOAL</div>
        <div className={styles.grid__item}>TIME SPENT</div>
        <div className={styles.grid__item}>STATUS</div>
        <div className={styles.grid__item}>LANGUAGE</div>
        <div className={styles.grid__item}>LOC</div>
        {data?.map((item: any) => {
          totalLoc.push(item.goal.loc);
          totalTime.push(item.goal.currentGoal.time);
          return (
            <>
              <div className={styles.grid__item} key={item.key + 101}>
                {item.goal.currentGoal.goal}
              </div>
              <div className={styles.grid__item} key={item.key + 111}>
                {formatTime(item.goal.currentGoal.time)} HRs
              </div>
              <div className={styles.grid__item} key={item.key + 121}>
                {item.goal.status}
              </div>
              <div className={styles.grid__item} key={item.key + 131}>
                {item.goal.language}
              </div>
              <div className={styles.grid__item} key={item.key + 141}>
                {item.goal.loc}
              </div>
            </>
          );
        })}
        <div className={styles.grid__item}>TOTAL</div>
        <div className={styles.grid__item}>
          {formatTime(
            totalTime.reduce((a: any, b: any) => Number(a) + Number(b), 0)
          )}{' '}
          HRs
        </div>
        <div className={styles.grid__item} />
        <div className={styles.grid__item} />
        <div className={styles.grid__item}>
          {totalLoc.reduce((a: any, b: any) => Number(a) + Number(b), 0)}
        </div>
      </div>
      <Link to={routes.START_GOAL}>
        <button type="button" className={styles.back_btn}>
          BACK
        </button>
      </Link>
    </div>
  );
}
