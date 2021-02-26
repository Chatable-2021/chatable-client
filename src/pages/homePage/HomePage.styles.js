import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    minHeight: '100vh',
    maxHeight: '100vh',
    width: '100%',
    maxWidth: '100%',
    margin: 0,
  },
  backgroundContainer: {
    width: '100%',
    height: '40%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
      height: '100%',
      order: 1,
    },
  },
  buttonsContainer: {
    alignSelf: 'center',
  },
  contentContainer: {
    height: '60%',
    padding: 15,
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
      padding: 15,
    },
    [theme.breakpoints.up('md')]: {
      height: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 15,
      order: 2,
    },
    [theme.breakpoints.up('xl')]: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 20,
    [theme.breakpoints.up('sm')]: {
      padding: 20,
      maxWidth: 500,
    },
    [theme.breakpoints.up('md')]: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 700,
      height: 500,
    },
  },
  gridItemsContainer: {
    alignItems: 'stretch',
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
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
