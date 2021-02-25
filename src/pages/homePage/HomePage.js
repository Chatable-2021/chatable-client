import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Grid, Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';

import { AppButton } from '../../components/controls';
import AppText from '../../components/appText/AppText';
import blueLogo from '../../assets/blueLogo.png';
import backgroundImage from '../../assets/chatable-background.jpeg';
import Login from '../../components/Login/Login';
import useStyles from './HomePage.styles';

function HomePage({ socket, setUser }) {
  const classes = useStyles();

  const theme = useTheme();
  const isScreenSizeXl = useMediaQuery(theme.breakpoints.up('xl'), {
    noSsr: true,
  });

  const history = useHistory();

  return (
    <Container
      disableGutters={true}
      className={classes.root}
      component='section'
    >
      <Grid container className={classes.gridItemsContainer}>
        <Grid item container md={6} lg={5} className={classes.contentContainer}>
          {isScreenSizeXl ? (
            <Grid item>
              <Login
                socket={socket}
                setUser={setUser}
                styles={{
                  width: 600,
                  flexDirection: 'row',
                  buttonWidth: 300,
                  inputWidth: '100%',
                  buttonVariant: 'outlined',
                  padding: '0 24px 0 0',
                }}
              />
            </Grid>
          ) : null}
          <Grid item container className={classes.innerContainer}>
            <Grid item className={classes.logoContainer}>
              <img src={blueLogo} className={classes.logo} />
            </Grid>

            <Grid item>
              <AppText variant='h2' component='h1' styles={{ fontWeight: 900 }}>
                Get started now
              </AppText>
            </Grid>

            <Grid item>
              <AppText variant='h4' component='h2' styles={{ fontWeight: 400 }}>
                Join Chatable today
              </AppText>
            </Grid>

            <Grid item container className={classes.buttonsContainer}>
              <Grid item xs={12}>
                <AppButton
                  variant='contained'
                  color='primary'
                  fullWidth={true}
                  onClick={() => history.push('/signup')}
                  styles={{
                    fontWeight: 'bold',
                    maxWidth: 400,
                    borderRadius: 25,
                    height: 50,
                    margin: '0 0 15px 0',
                  }}
                >
                  Sign Up
                </AppButton>
              </Grid>
              <Grid item xs={12}>
                <AppButton
                  variant='outlined'
                  color='primary'
                  fullWidth={true}
                  onClick={() => history.push('/login')}
                  styles={{
                    fontWeight: 'bold',
                    maxWidth: 400,
                    borderRadius: 25,
                    height: 50,
                    margin: '0 0 15px 0',
                  }}
                >
                  Login
                </AppButton>
              </Grid>
            </Grid>
          </Grid>
          {isScreenSizeXl ? <Box style={{ height: 110 }}></Box> : null}
        </Grid>

        <Grid item md={6} lg={7} className={classes.backgroundContainer}>
          <img src={backgroundImage} className={classes.image} />
        </Grid>
      </Grid>
    </Container>
  );
}

HomePage.propTypes = {
  user: PropTypes.object,
  socket: PropTypes.shape({
    emit: PropTypes.func.isRequired,
    on: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
  }),
  setUser: PropTypes.func.isRequired,
};

export default HomePage;
