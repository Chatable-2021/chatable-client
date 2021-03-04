import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

import { AppInput } from '../../controls';
import AppText from '../../appText/AppText';
import useStyles from './AppInputWithError.styles';

function AppInputWithError({
  errors,
  emailOrPasswordOrName,
  styles,
  register,
  autoFocus,
}) {
  const classes = useStyles(styles);
  const showError = Boolean(errors[emailOrPasswordOrName]);

  let emailOrPasswordOrNameLabel;
  if (emailOrPasswordOrName === 'email') {
    emailOrPasswordOrNameLabel = 'Email';
  } else if (emailOrPasswordOrName === 'password') {
    emailOrPasswordOrNameLabel = 'Password';
  } else if (emailOrPasswordOrName === 'name') {
    emailOrPasswordOrNameLabel = 'Name';
  }

  const showErrorOrEmptyString = (shouldShow, message) =>
    shouldShow ? message : '';

  return (
    <Box className={classes.inputBox}>
      <AppInput
        autoFocus={autoFocus}
        id={emailOrPasswordOrName}
        name={emailOrPasswordOrName}
        inputRef={register}
        variant='outlined'
        label={emailOrPasswordOrNameLabel}
        size='medium'
        color='primary'
        fullWidth={true}
        type={emailOrPasswordOrName}
      />
      <AppText
        styles={{
          height: 24,
          padding: '0 0 0 14px',
          color: '#f44336',
          alignSelf: 'flex-start',
        }}
      >
        {showErrorOrEmptyString(
          showError,
          errors[emailOrPasswordOrName]?.message
        )}
      </AppText>
    </Box>
  );
}

AppInputWithError.propTypes = {
  errors: PropTypes.object,
  emailOrPasswordOrName: PropTypes.string,
  styles: PropTypes.object,
  register: PropTypes.func,
  autoFocus: PropTypes.bool,
};

export default AppInputWithError;
