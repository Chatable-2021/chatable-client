import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

function LightDarkButton({ lightOrDark, setLightOrDark }) {
  return (
    <>
      {lightOrDark ? (
        <IconButton size='medium' onClick={() => setLightOrDark(false)}>
          <Brightness7Icon fontSize='large' />
        </IconButton>
      ) : (
        <IconButton size='medium' onClick={() => setLightOrDark(true)}>
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
