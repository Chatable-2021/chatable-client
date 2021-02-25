import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: styles => styles.width,
    padding: 15,
    display: 'flex',
    flexDirection: styles => styles.flexDirection,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default useStyles;
