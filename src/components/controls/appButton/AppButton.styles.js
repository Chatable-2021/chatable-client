import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    fontWeight: styles => styles.fontWeight,
    borderRadius: styles => styles.borderRadius,
    height: styles => styles.height,
    margin: styles => styles.margin,
    width: styles => styles.width,
    [theme.breakpoints.up('md')]: {
      maxWidth: styles => styles.maxWidth,
    },
  },
}));

export default useStyles;
