import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    maxWidth: 'none',
    touchAction: 'none',
    maxHeight: 'calc(100vh - 136px)',
    [theme.breakpoints.down('xs')]: {
      minHeight: '100%',
    },
  },
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
  list: {
    maxHeight: 'calc(100vh - 136px)',
    overflow: 'scroll',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      marginTop: 80,
      marginBottom: 56,
      overflow: 'scroll',
      overflowX: 'hidden',
    },
  },
}));

export default useStyles;
