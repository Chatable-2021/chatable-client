import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Box } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

import LightDarkButton from '../lightDarkButton/LightDarkButton';
import blueLogo from '../../assets/blueLogo.png';
import useStyles from './Header.styles';

function Header({ user, handleLogout, lightOrDark, setLightOrDark }) {
  const classes = useStyles();
  return (
    <AppBar elevation={0} position='static' className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Box className={classes.logoContainer}>
          <img src={blueLogo} className={classes.logo} />
        </Box>
        <Box>
          <IconButton size='medium'>
            <AccountCircleIcon fontSize='large' />
          </IconButton>

          <LightDarkButton
            lightOrDark={lightOrDark}
            setLightOrDark={setLightOrDark}
          />

          <IconButton size='medium'>
            <ArrowDropDownCircleIcon fontSize='large' />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  user: PropTypes.object,
  handleLogout: PropTypes.func,
  lightOrDark: PropTypes.bool,
  setLightOrDark: PropTypes.func,
};

export default Header;
