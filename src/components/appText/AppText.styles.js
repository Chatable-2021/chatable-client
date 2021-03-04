import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontWeight: styles => styles.fontWeight,
    height: styles => styles.height,
    padding: styles => styles.padding,
    color: styles => styles.color,
    alignSelf: styles => styles.alignSelf,
  },
});

export default useStyles;
