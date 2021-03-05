import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import useStyles from './AppButton.styles';

function AppButton(props) {
  const { children, styles } = props;
  const classes = useStyles(styles);
  return (
    <Button className={classes.root} {...props}>
      {children}
    </Button>
  );
}

AppButton.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.object,
};

export default AppButton;
