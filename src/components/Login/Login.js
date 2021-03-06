import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './Login.schema';
import PropTypes from 'prop-types';

import { AppInputWithError, AppButtonWithError } from '../controls';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';
import useStyles from './Login.styles';

function Login({ socket, setUser, styles }) {
  const classes = useStyles(styles);
  const [error, setError] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
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
          setLoading(false);
        } else {
          setLoading(false);
          setInvalid(false);
          setUser(authResults.user);
          history.push('/landing-page');
        }
      });
      return () => socket.off('AUTH_RESULTS');
    }
  }, []);

  const handleLogin = formValues => {
    socket.emit('LOGIN', formValues);
    setLoading(true);
  };

  return (
    <>
      <form className={classes.root} onSubmit={handleSubmit(handleLogin)}>
        <AppInputWithError
          errors={errors}
          emailOrPasswordOrName='email'
          autoFocus={true}
          styles={styles}
          register={register}
        />
        <AppInputWithError
          autoComplete='current-pasword'
          errors={errors}
          emailOrPasswordOrName='password'
          styles={styles}
          register={register}
        />
        <AppButtonWithError styles={styles} error={error} invalid={invalid}>
          {loading ? <LoadingSpinner loading={loading} /> : 'Login'}
        </AppButtonWithError>
      </form>
    </>
  );
}

Login.propTypes = {
  user: PropTypes.object,
  socket: PropTypes.shape({
    emit: PropTypes.func.isRequired,
    on: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
  }),
  setUser: PropTypes.func.isRequired,
  styles: PropTypes.object,
};

export default Login;
