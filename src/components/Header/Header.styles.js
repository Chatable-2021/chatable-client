import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
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
}));

export default useStyles;
