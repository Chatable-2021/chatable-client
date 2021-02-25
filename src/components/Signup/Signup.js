import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from './Signup.schema';
import styles from './Signup.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { AppInputWithError, AppButtonWithError } from '../controls';

const useStyles = makeStyles({
  root: {
    width: 400,
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Signup({ socket, setUser }) {
  const classes = useStyles();
  const [error, setError] = useState('');
  const [invalid, setInvalid] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signupSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const showNameError = Boolean(errors.name);
  const showEmailError = Boolean(errors.email);
  const showPasswordError = Boolean(errors.password);
  const showErrorOrEmptyString = (shouldShow, message) =>
    shouldShow ? message : '';

  const history = useHistory();

  // useEffect(() => {
  //   socket.on('AUTH_RESULTS', (authResults) => {
  //     if(!authResults.success) {
  //       setError(authResults.message);
  //       setInvalid(true);
  //     } else {
  //       setUser(authResults.user);
  //       setInvalid(false);
  //       history.push('/room');
  //     }
  //     return () => socket.off('AUTH_RESULTS');
  //   });
  // }, []);

  const handleSignup = formValues => {
    socket.emit('SIGN_UP', formValues);
  };

  // work on styles object for the first input
  return (
    <>
      <form className={classes.root} onSubmit={handleSubmit(handleSignup)}>
        <AppInputWithError
          errors={errors}
          autoFocus={true}
          emailOrPasswordOrName='name'
          register={register}
          styles={styles}
        />
        <p className={styles.errorsMessage}>
          {showErrorOrEmptyString(showNameError, errors.name?.message)}
        </p>
        <input
          className={styles.formInput}
          name='email'
          ref={register}
          placeholder='Email'
        />
        <p className={styles.errorsMessage}>
          {showErrorOrEmptyString(showEmailError, errors.email?.message)}
        </p>
        <input
          className={styles.formInput}
          name='password'
          ref={register}
          type='password'
          placeholder='Password'
        />
        <p className={styles.errorsMessage}>
          {showErrorOrEmptyString(showPasswordError, errors.password?.message)}
        </p>
        <button className={styles.submitButton} type='submit'>
          Sign Up
        </button>
        <p className={styles.errorsMessage}>{invalid ? error : ''}</p>
      </form>
    </>
  );
}

Signup.propTypes = {
  user: PropTypes.object,
  socket: PropTypes.shape({
    emit: PropTypes.func.isRequired,
    on: PropTypes.func.isRequired,
    off: PropTypes.func.isRequired,
  }),
  setUser: PropTypes.func.isRequired,
};

export default Signup;
