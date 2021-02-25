import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { io } from 'socket.io-client';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import RoomContainer from './components/RoomContainer/RoomContainer';
import HomePage from './pages/homePage/HomePage';
import LoginPage from './pages/loginPage/LoginPage';
import SignupPage from './pages/signupPage/SignupPage';
import styles from './App.css';
import Header from './components/Header/Header.js';

const App = () => {
  const [socket, setSocket] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    const s = io(process.env.SERVER_URL);
    setSocket(s);
    return () => s.close();
  }, []);

  const handleLogout = () => {
    setUser({});
  };

  let theme = createMuiTheme({
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
              path='/room'
              component={() => (
                <RoomContainer
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
