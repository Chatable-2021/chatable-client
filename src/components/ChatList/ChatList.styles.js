import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    maxWidth: 'none',
    [theme.breakpoints.down('xs')]: {
      maxHeight: '100vh',
      marginTop: 80,
      marginBottom: 56,
    },
  },
  list: {
    maxHeight: 'calc(100vh - 136px)',
    overflow: 'scroll',
    overflowX: 'hidden',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      minHeight: '100%',
      maxHeight: '100%',
    },
  },
}));

export default useStyles;
