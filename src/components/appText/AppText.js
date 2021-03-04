import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import useStyles from './AppText.styles';

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
