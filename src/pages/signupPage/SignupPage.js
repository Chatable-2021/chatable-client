import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import AppText from '../../components/appText/AppText';
import blueLogo from '../../assets/blueLogo.png';
import Signup from '../../components/Signup/Signup';
import useStyles from './Signup.styles';

function SignupPage({ socket, setUser }) {
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
          Create your account
        </AppText>
        <Signup
          socket={socket}
          setUser={setUser}
          styles={{
            inputWidth: '100%',
            buttonWidth: '100%',
            buttonVariant: 'contained',
          }}
        />
      </Box>
    </Container>
  );
}

SignupPage.propTypes = {
  socket: PropTypes.shape({
    emit: PropTypes.func.isRequired,
    on: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
  }),
  setUser: PropTypes.func.isRequired,
};

export default SignupPage;
