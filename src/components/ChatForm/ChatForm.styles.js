import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
    },
  },
}));

export default useStyles;
