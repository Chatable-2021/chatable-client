import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import useStyles from './LightDarkButton.styles';

function LightDarkButton({ lightOrDark, setLightOrDark }) {
  const classes = useStyles();

  return (
    <>
      {lightOrDark ? (
        <IconButton
          className={classes.root}
          size='medium'
          onClick={() => setLightOrDark(false)}
        >
          <Brightness7Icon fontSize='large' />
        </IconButton>
      ) : (
        <IconButton
          className={classes.root}
          size='medium'
          onClick={() => setLightOrDark(true)}
        >
          <Brightness4Icon fontSize='large' />
        </IconButton>
      )}
    </>
  );
}

LightDarkButton.propTypes = {
  lightOrDark: PropTypes.bool,
  setLightOrDark: PropTypes.func,
};

export default LightDarkButton;
