import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { io } from 'socket.io-client';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import HomePage from './pages/homePage/HomePage';
import LoginPage from './pages/loginPage/LoginPage';
import SignupPage from './pages/signupPage/SignupPage';
import LandingPage from './pages/landingPage/LandingPage';
import { getLightOrDark } from './selectors/lightDarkSelector/lightDarkSelector';
import styles from './App.css';

const App = () => {
  const [socket, setSocket] = useState(null);
  const [user, setUser] = useState({});

  const lightOrDark = useSelector(getLightOrDark);
  const palletType = lightOrDark ? 'light' : 'dark';

  useEffect(() => {
    const s = io(process.env.SERVER_URL);
    setSocket(s);
    return () => s.close();
  }, []);

  const handleLogout = () => {
    setUser({});
  };

  let theme = createMuiTheme({
    mixins: {
      toolbar: {
        minHeight: 80,
      },
    },
    typography: {
      fontFamily: 'sans-serif',
    },
    palette: {
      primary: {
        light: '#c4d8cb',
        main: '#26a69a',
        dark: '#00766c',
        contrastText: '#fff',
      },
      type: palletType,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1600,
      },
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <main className={styles.root}>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route
              path='/'
              exact
              component={() => <HomePage socket={socket} setUser={setUser} />}
            />
            <Route
              path='/landing-page'
              component={() => (
                <LandingPage
                  lightOrDark={lightOrDark}
                  handleLogout={handleLogout}
                  user={user}
                  socket={socket}
                />
              )}
            />
            <Route
              path='/signup'
              exact
              component={() => <SignupPage socket={socket} setUser={setUser} />}
            />
            <Route
              path='/login'
              exact
              component={() => <LoginPage socket={socket} setUser={setUser} />}
            />
          </Switch>
        </ThemeProvider>
      </Router>
    </main>
  );
};

export default App;
