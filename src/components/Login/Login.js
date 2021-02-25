import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './Login.schema';
import PropTypes from 'prop-types';

import { AppInputWithError, AppButtonWithError } from '../controls';
import useStyles from './Login.styles';

function Login({ socket, setUser, styles }) {
  const [error, setError] = useState('');
  const [invalid, setInvalid] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const classes = useStyles(styles);

  const history = useHistory();

  useEffect(() => {
    if (socket) {
      socket.on('AUTH_RESULTS', authResults => {
        if (!authResults.success) {
          setError(authResults.message);
          setInvalid(true);
        } else {
          setUser(authResults.user);
          history.push('/room');
        }
        return () => socket.off();
      });
    }
  }, []);

  const handleLogin = formValues => {
    socket.emit('LOGIN', formValues);
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
          errors={errors}
          emailOrPasswordOrName='password'
          styles={styles}
          register={register}
        />
        <AppButtonWithError styles={styles} error={error} invalid={invalid}>
          Login
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
