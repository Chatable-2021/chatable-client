import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minWidth: '100%',
    minHeight: 'calc(100vh - 80px)',
  },
  rooms: {
    maxHeight: 'calc(100vh - 80px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  chat: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default useStyles;
