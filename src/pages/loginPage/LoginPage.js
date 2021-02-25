import React from 'react';
import Login from '../../components/Login/Login';
import PropTypes from 'prop-types';
import { Box, Container } from '@material-ui/core';

import AppText from '../../components/appText/AppText';
import blueLogo from '../../assets/blueLogo.png';
import useStyles from './LoginPage.styles';

function LoginPage({ socket, setUser }) {
  const classes = useStyles();
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
          Login to Chatable
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
      </Box>
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
