import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    maxWidth: 'none',
    touchAction: 'none',
    maxHeight: 'calc(100vh - 136px)',
    [theme.breakpoints.down('xs')]: {
      maxHeight: '100%',
      position: 'fixed',
    },
  },
  list: {
    maxHeight: 'calc(100vh - 136px)',
    overflow: 'scroll',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      marginTop: 80,
      marginBottom: 56,
      overflow: 'scroll',
      overflowX: 'hidden',
    },
  },
}));

export default useStyles;
