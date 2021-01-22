import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import routes from '../constants/routes.json';
import styles from './Home.css';
import Clock from './Clock';
import FinishButton from './FinishButton';
import GoalList from './GoalList';
import Actions from '../reducer/goalActions';
import { createFile } from '../service/services';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        color: 'white',
        width: '45ch',
        '& fieldset': {
          borderColor: 'grey',
        },
      },
    },
  })
);

export default function Home(): JSX.Element {
  const dispatch = useDispatch();
  const [goalsList, setGoalsList] = useState([]);
  const [input, setInput] = React.useState('');

  const classes = useStyles();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const getGoals = useSelector((state: any) => {
    return state.goals.goals;
  });

  const saveToCsv = () => {
    createFile('./output.csv');
  };

  useEffect(() => {
    setGoalsList(getGoals);
  }, [dispatch, getGoals]);

  useEffect(() => {
    saveToCsv();
  }, []);

  const setGoal = () => {
    dispatch(Actions.setGoal(input));
  };

  return (
    <div className={styles.container} data-tid="container">
      <Clock />
      <div className={styles.input__container}>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="outlined-textarea"
              label="Enter goal"
              placeholder="Input your goal..."
              multiline
              variant="outlined"
              onChange={handleChange}
            />
          </div>
        </form>
        <div className={classes.root}>
          <Button variant="contained" color="primary" onClick={setGoal}>
            SUBMIT
          </Button>
        </div>
      </div>
      <Link to={routes.START_GOAL}>
        <FinishButton />
      </Link>
      <div className={styles.goal__list}>
        <GoalList goals={goalsList} />
      </div>
    </div>
  );
}
