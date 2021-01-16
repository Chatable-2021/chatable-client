import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import Signup from './components/Signup/Signup';
import styles from './App.css';

const App = () => (
  <div className={styles.root}>
    <Router>
      <Route path="/" exact component={Join} />
      <Route path='/chat' exact component={Chat} />
      <Route path='/signup' exact component={Signup} />
    </Router>
  </div>
);

export default App;
