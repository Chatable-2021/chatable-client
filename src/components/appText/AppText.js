import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    fontWeight: styles => styles.fontWeight,
    height: styles => styles.height,
    padding: styles => styles.padding,
    color: styles => styles.color,
    alignSelf: styles => styles.alignSelf,
  },
});

function AppText(props) {
  const { children, styles } = props;
  const classes = useStyles(styles);
  return (
    <Typography className={classes.root} {...props}>
      {children}
    </Typography>
  );
}

AppText.propTypes = {
  children: PropTypes.string,
  styles: PropTypes.object,
};

export default AppText;
