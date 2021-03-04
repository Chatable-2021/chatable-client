import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

import { AppButton } from '../../controls';
import AppText from '../../appText/AppText';
import useStyles from './AppButton.styles';

function AppButtonWithError({ styles, error, invalid, children }) {
  const classes = useStyles(styles);

  return (
    <Box className={classes.buttonBox}>
      <AppButton
        variant={styles.buttonVariant}
        color='primary'
        type='submit'
        fullWidth={true}
        styles={{
          fontWeight: 'bold',
          height: 50,
          borderRadius: 25,
        }}
      >
        {children}
      </AppButton>
      <AppText
        styles={{
          height: 24,
          padding: '0 0 0 14px',
          color: '#f44336',
        }}
      >
        {invalid ? error : ''}
      </AppText>
    </Box>
  );
}

AppButtonWithError.propTypes = {
  styles: PropTypes.object,
  error: PropTypes.string,
  invalid: PropTypes.bool,
};

export default AppButtonWithError;
