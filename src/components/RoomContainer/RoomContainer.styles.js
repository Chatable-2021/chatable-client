import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minWidth: '100%',
    minHeight: 'calc(100vh - 80px)',
    [theme.breakpoints.down('xs')]: {
      minHeight: 'calc(100vh - 80px)',
      marginTop: 24,
    },
  },
  chat: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
}));

export default useStyles;
