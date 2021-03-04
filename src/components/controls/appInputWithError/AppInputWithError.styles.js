import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  inputBox: {
    width: styles => styles.inputWidth,
    padding: styles => styles.padding,
  },
});

export default useStyles;
