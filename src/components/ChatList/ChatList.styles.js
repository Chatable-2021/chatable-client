import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    maxWidth: 'none',
  },
  list: {
    maxHeight: 'calc(100vh - 136px)',
    overflow: 'scroll',
    overflowX: 'hidden',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
  },
});

export default useStyles;
