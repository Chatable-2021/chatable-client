import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    flexGrow: 1,
    width: '100%',
    boxSizing: 'border-box',
    overflowY: 'scroll',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
});

export default useStyles;
