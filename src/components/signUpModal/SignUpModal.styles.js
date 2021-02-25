import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '100%',
    objectFit: 'contain',
  },
  logoContainer: {
    height: '3rem',
    marginLeft: 15,
  },
  paper: {
    padding: 32,
    outline: 0,
  },
  title: {
    fontWeight: 900,
    margin: '32px 0 12px 15px',
  },
});

export default useStyles;
