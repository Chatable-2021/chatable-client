import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minWidth: '100%',
    minHeight: 'calc(100vh - 80px)',
  },
  rooms: {
    backgroundColor: theme.palette.background.default,
    maxHeight: 'calc(100vh - 80px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minWidth: 300,
  },
  chat: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default useStyles;
