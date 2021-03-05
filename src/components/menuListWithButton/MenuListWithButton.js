import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import Divider from '@material-ui/core/Divider';

import useStyles from './MenuListWithButton.styles.js';

function MenuListWithButton({ handleLogout, setLightOrDark }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const history = useHistory();

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleProfileClick = () => {
    setOpen(false);
    console.log('profile clicked');
  };

  const handleLogoutClick = () => {
    handleLogout();
    setLightOrDark(true);
    setOpen(false);
    history.push('/');
  };

  // close menu on tab
  const handleListKeyDown = event => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

  return (
    <>
      <IconButton
        className={classes.iconButton}
        size='medium'
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup='true'
        onClick={handleToggle}
      >
        <ArrowDropDownCircleIcon fontSize='large' />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        transition
        disablePortal
        placement='bottom'
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClickAway}>
                <MenuList id='menu-list-grow' onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

MenuListWithButton.propTypes = {
  handleLogout: PropTypes.func,
  setLightOrDark: PropTypes.func,
};

export default MenuListWithButton;
