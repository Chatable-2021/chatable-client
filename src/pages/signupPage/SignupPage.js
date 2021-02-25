import React from 'react';
import PropTypes from 'prop-types';

import Signup from '../../components/Signup/Signup';

function SignupPage({ socket, setUser }) {
  return (
    <>
      <Signup socket={socket} setUser={setUser} />
    </>
  );
}

SignupPage.propTypes = {};

export default SignupPage;
