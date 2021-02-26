import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    flexGrow: 1,
    width: '100%',
    boxSizing: 'border-box',
    overflowY: 'scroll',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column-reverse',
  },
}));

export default useStyles;
