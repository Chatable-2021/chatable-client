import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.background.default,
    marginTop: 10,
    maxHeight: 40,
  },
}));

export default useStyles;
