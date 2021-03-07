import React from 'react';
import { useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import useStyles from './WelcomeMessage.styles';

export default function WelcomeMessage() {
  const classes = useStyles();
  const location = useLocation();

  const isUrlSearch = location.search;
  return (
    <>
      {!isUrlSearch ? (
        <div className={classes.root}>
          <Typography className={classes.header} variant='h3'>
            Welcome to Chatable!
          </Typography>
          <Typography className={classes.subHeader}>
            Get started by creating a room or joining an existing one.
          </Typography>
        </div>
      ) : null}
    </>
  );
}
