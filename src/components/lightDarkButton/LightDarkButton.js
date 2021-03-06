import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import useStyles from './LightDarkButton.styles';
import { setLightDark } from '../../actions/lightDarkActions/lightDarkActions';

function LightDarkButton({ lightOrDark }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleClick = lightOrDark => {
    dispatch(setLightDark(lightOrDark));
  };

  return (
    <>
      {lightOrDark ? (
        <IconButton
          className={classes.root}
          size='medium'
          onClick={() => handleClick(false)}
        >
          <Brightness7Icon fontSize='large' />
        </IconButton>
      ) : (
        <IconButton
          className={classes.root}
          size='medium'
          onClick={() => handleClick(true)}
        >
          <Brightness4Icon fontSize='large' />
        </IconButton>
      )}
    </>
  );
}

LightDarkButton.propTypes = {
  lightOrDark: PropTypes.bool,
};

export default LightDarkButton;
