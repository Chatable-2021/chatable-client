import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100%',
    minWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: 16,
    fontWeight: 'bolder',
    textAlign: 'center',
    maxWidth: '80%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.125rem',
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
    },
  },
  subHeader: {
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: '80%',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
    },
  },
}));

export default useStyles;
