import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  lightRoot: {
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
    height: 80,
    [theme.breakpoints.up('sm')]: {
      width: 'calc(100% - 300px)',
      marginLeft: 300,
    },
    // [theme.breakpoints.down('xs')]: {
    //   position: 'fixed',
    // },
  },
  darkRoot: {
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    height: 80,
    [theme.breakpoints.up('sm')]: {
      width: 'calc(100% - 300px)',
      marginLeft: 300,
    },
    // [theme.breakpoints.down('xs')]: {
    //   position: 'fixed',
    // },
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
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  iconButton: {
    color: theme.palette.common.white,
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

export default useStyles;
