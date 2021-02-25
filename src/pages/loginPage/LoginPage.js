import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Container, Link, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import AppText from '../../components/appText/AppText';
import blueLogo from '../../assets/blueLogo.png';
import Login from '../../components/Login/Login';
import SignUpModal from '../../components/signUpModal/SignUpModal';
import useStyles from './LoginPage.styles';

function LoginPage({ socket, setUser }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const history = useHistory();

  const theme = useTheme();
  const isScreenSizeSm = useMediaQuery(theme.breakpoints.down('sm'), {
    noSsr: true,
  });

  return (
    <Container
      disableGutters={true}
      className={classes.root}
      component='section'
    >
      <Box className={classes.contentContainer}>
        <Box className={classes.logoContainer}>
          <img src={blueLogo} className={classes.logo} />
        </Box>
        <AppText variant='h4' component='h1' className={classes.title}>
          Log in to Chatable
        </AppText>
        <Login
          socket={socket}
          setUser={setUser}
          styles={{
            width: 400,
            flexDirection: 'column',
            buttonWidth: '100%',
            inputWidth: '100%',
            buttonVariant: 'contained',
          }}
        />
        <Box className={classes.linksContainer}>
          <Link
            className={classes.link}
            onClick={
              isScreenSizeSm ? () => history.push('/signup') : handleOpen
            }
          >
            Sign up for Chatable
          </Link>
        </Box>
      </Box>
      <SignUpModal
        socket={socket}
        setUser={setUser}
        open={open}
        handleClose={handleClose}
        styles={{
          inputWidth: '100%',
          buttonWidth: '100%',
          buttonVariant: 'contained',
        }}
      />
    </Container>
  );
}

LoginPage.propTypes = {
  socket: PropTypes.shape({
    emit: PropTypes.func.isRequired,
    on: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
  }),
  setUser: PropTypes.func.isRequired,
};

export default LoginPage;
