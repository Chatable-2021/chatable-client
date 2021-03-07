import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    width: '100%',
    maxHeight: '100%',
    boxSizing: 'border-box',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
});

export default useStyles;
