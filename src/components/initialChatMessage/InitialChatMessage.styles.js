import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  divider: {
    margin: '0 16px 16px 16px',
  },
  dividerWithMessages: {
    margin: '0 16px 0 16px',
  },
  initialMessageContainer: {
    padding: theme.spacing(2),
    display: 'block',
  },
  initialMessageSubtitle: {},
  initialMessageTitle: {
    paddingBottom: theme.spacing(1),
    fontWeight: 900,
  },
}));

export default useStyles;
