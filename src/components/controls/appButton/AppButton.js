import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    fontWeight: styles => styles.fontWeight,
    borderRadius: styles => styles.borderRadius,
    height: styles => styles.height,
    margin: styles => styles.margin,
    width: styles => styles.width,
    [theme.breakpoints.up('md')]: {
      maxWidth: styles => styles.maxWidth,
    },
  },
}));

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
  children: PropTypes.string,
  styles: PropTypes.object,
};

export default AppButton;
