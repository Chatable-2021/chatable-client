import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    maxHeight: '100vh',
    width: '100%',
    maxWidth: '100%',
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contentContainer: {
    maxWidth: 400,
    marginTop: 20,
  },
  link: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  linksContainer: {
    textAlign: 'center',
  },
  logo: {
    height: '100%',
    objectFit: 'contain',
  },
  logoContainer: {
    height: '3rem',
    marginLeft: 15,
  },
  title: {
    fontWeight: 900,
    margin: '32px 0 12px 15px',
  },
});

export default useStyles;
