import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '5rem',
        height: '5rem',
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  })
);

export default function StartButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="add">
        START
      </Fab>
    </div>
  );
}
