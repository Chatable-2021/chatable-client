import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  lightRoot: {
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
    height: 80,
  },
  darkRoot: {
    display: 'flex',
    backgroundColor: theme.palette.background.default,
    height: 80,
  },
  toolbar: {
    height: '100%',
    justifyContent: 'space-between',
  },
  logo: {
    height: '100%',
    objectFit: 'contain',
    alignSelf: '',
  },
  logoContainer: {
    height: '3rem',
  },
  iconButton: {
    color: theme.palette.common.white,
  },
}));

export default useStyles;
