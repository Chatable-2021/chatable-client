import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    background: theme.palette.divider,
  },
  selected: {
    color: theme.palette.primary.main,
  },
  tooltip: {
    fontSize: 15,
  },
}));

export default useStyles;
