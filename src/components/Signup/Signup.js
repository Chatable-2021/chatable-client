import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from './Signup.schema';
import PropTypes from 'prop-types';

import { AppInputWithError, AppButtonWithError } from '../controls';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';
import useStyles from './Signup.styles';

function Signup({ socket, setUser, styles }) {
  const classes = useStyles();
  const [error, setError] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signupSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const history = useHistory();

  useEffect(() => {
    if (socket) {
      socket.on('AUTH_RESULTS', authResults => {
        if (!authResults.success) {
          setError(authResults.message);
          setInvalid(true);
        } else {
          setUser(authResults.user);
          setInvalid(false);
          setLoading(false);
          history.push('/landing-page');
        }
        return () => socket.off('AUTH_RESULTS');
      });
    }
  }, []);

  const handleSignup = formValues => {
    socket.emit('SIGN_UP', formValues);
    setLoading(true);
  };

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
        <AppInputWithError
          errors={errors}
          emailOrPasswordOrName='email'
          register={register}
          styles={styles}
        />
        <AppInputWithError
          autoComplete='new-password'
          errors={errors}
          emailOrPasswordOrName='password'
          register={register}
          styles={styles}
        />
        <AppButtonWithError styles={styles} error={error} invalid={invalid}>
          {loading ? <LoadingSpinner loading={loading} /> : 'Sign Up'}
        </AppButtonWithError>
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
  styles: PropTypes.object,
};

export default Signup;
